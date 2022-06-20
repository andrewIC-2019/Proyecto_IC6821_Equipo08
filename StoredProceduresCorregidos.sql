
USE parqueos


-- ==========================================
--		I PARTE: CORRECCIONES HORARIOS
-- ==========================================

/*
	dbo.sp_pintarEditarUsuario
		Correccion Simple, para que se traiga solo los horarios no borrados
*/

DROP PROCEDURE IF EXISTS dbo.sp_pintarEditarUsuario
GO

CREATE PROCEDURE dbo.sp_pintarEditarUsuario
	@usuarioId bigint
AS
	SELECT correo, telefono, departamento = codigoDivision, notificarCorreoAlterno, usuarioId FROM dbo.Usuarios u
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE usuarioId = @usuarioId and deshabilitado=0 FOR JSON PATH

	SELECT placa FROM dbo.Vehiculos_Por_Usuario vu 
	INNER JOIN dbo.Vehiculos v ON vu.vehiculoId = v.vehiculoId
	WHERE usuarioId = @usuarioId AND vu.deshabilitado = 0 FOR JSON AUTO

	SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
	INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
	WHERE usuarioId = @usuarioId AND hu.deshabilitado = 0 FOR JSON AUTO

	RETURN 1

GO



/*
	dbo.sp_registrarUsuarioTotalF2
		Para corregir el problema de los horarios
*/

DROP PROCEDURE IF EXISTS dbo.sp_registrarUsuarioTotalF2
GO

CREATE PROCEDURE dbo.sp_registrarUsuarioTotalF2
	@correoInstitucional nvarchar(200),
	@identificacion nvarchar(60),
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@nombre nvarchar(60),
	@apellido1 nvarchar(60),
	@apellido2 nvarchar(60),
	@departamento nvarchar(50),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
	@notificarCorreoAlterno bit,
	@esAdministrador bit,			-- nuevo
	@esJefatura bit,
	@esDiscapacitado bit,
	@esOperador bit
AS
	-- busqueda del Id de la division
	DECLARE @divisionId INT
	SELECT @divisionId = divisionId FROM dbo.Divisiones WHERE codigoDivision = @departamento OR descripcion = @departamento

	DECLARE @nuevoUsuarioId BIGINT
	EXEC @nuevoUsuarioId = dbo.sp_RegistrarFuncionario NULL, @divisionId, @identificacion, @nombre, @apellido1, @apellido2, @telefono, @correoInstitucional, @correo, @notificarCorreoAlterno, @password
	
	IF @nuevoUsuarioId = 0 BEGIN
		RETURN 0					-- QUIERE DECIR QUE YA EL USUARIO ESTA REGISTRADO (por Id o por correoInstitucional)
	END

	-- Inmediatamente Inserta los permisos

	EXEC dbo.sp_permisosUsuario @nuevoUsuarioId,1
	EXEC dbo.sp_permisosUsuario @nuevoUsuarioId,2


	-- busqueda o registro de las placas (el 1 es auto particular)

	IF @placa1 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa1, 1
	END

	IF @placa2 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa2, 1
	END

	IF @placa3 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa3, 1
	END

	IF @placa4 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa4, 1
	END

	-- insercion de los horarios

	-- *AHORA SE LLAMAN APARTE, LLAMANDO A:
	--	EXEC dbo.sp_registrarHorario @usuarioId, @dia, @horaEntrada, @horaSalida

	-- division en caso de que no sirva

	DECLARE @departamentoFinal INT
	SELECT @departamentoFinal = division FROM dbo.Usuarios WHERE usuarioId = @nuevoUsuarioId

	IF @departamentoFinal IS NULL BEGIN
		UPDATE dbo.Usuarios SET division = 1 WHERE usuarioId= @nuevoUsuarioId
	END


	-- Setea si es Administrador, Jefatura, Discapacitado, Operador								-- NUEVO
	IF @esAdministrador = 1 BEGIN
		UPDATE dbo.Usuarios SET esAdministrador = 1 WHERE usuarioId= @nuevoUsuarioId
	END

	IF @esJefatura = 1 BEGIN
		UPDATE dbo.Usuarios SET esJefatura = 1 WHERE usuarioId= @nuevoUsuarioId
	END

	IF @esDiscapacitado = 1 BEGIN
		UPDATE dbo.Usuarios SET esDiscapacitado = 1 WHERE usuarioId= @nuevoUsuarioId
	END

	IF @esOperador = 1 BEGIN
		UPDATE dbo.Usuarios SET esOperador = 1 WHERE usuarioId= @nuevoUsuarioId
	END																							-- NUEVO

	RETURN @nuevoUsuarioId -- Se completo exitosamente

GO

/*
-- ejemplo de ejecucion
EXEC dbo.sp_registrarUsuarioTotalF2 'aarias.19@itcr.ac.cr', '818049752', 'aarias.19@email.cr', 'aarias.19', '42361203', 'Andrés', 'Arias', 'Siles', 'IC',
'232056', 'GTR232', NULL, NULL, 1,
0,0,0,0
*/


/*
	dbo.sp_guardarEditarUsuarioF2
		Para corregir el problema de los horarios
*/

DROP PROCEDURE IF EXISTS dbo.sp_guardarEditarUsuarioF2
GO

CREATE PROCEDURE dbo.sp_guardarEditarUsuarioF2
	@usuarioId bigint,
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@departamento nvarchar(50),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
	@notificarCorreoAlterno bit
AS
	-- busqueda del Id de la division
	DECLARE @divisionId INT
	SELECT @divisionId = divisionId FROM dbo.Divisiones WHERE codigoDivision = @departamento OR descripcion = @departamento

	SELECT @departamento
	SELECT @divisionId

	-- actualiza informacion de la tabla de usuario
	IF @password IS NOT NULL
		UPDATE dbo.Usuarios SET correo= @correo, [password]= HASHBYTES('SHA2_256', @password), telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
		WHERE usuarioId = @usuarioId
	ELSE 
		UPDATE dbo.Usuarios SET correo= @correo, telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
		WHERE usuarioId = @usuarioId



	-- limpia las placas asociadas para poder insertar las nuevas

	UPDATE dbo.Vehiculos_Por_Usuario SET deshabilitado=1 WHERE usuarioId = @usuarioId

	-- limpia los horarios asociadas para poder insertar las nuevas

	UPDATE dbo.Horarios_Por_Usuario SET deshabilitado=1 WHERE usuarioId = @usuarioId



	-- busqueda o registro de las placas

	IF @placa1 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa1, 1
	END

	IF @placa2 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa2, 1
	END

	IF @placa3 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa3, 1
	END

	IF @placa4 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa4, 1
	END

	-- actualizacion de los horarios
	
	-- *AHORA SE LLAMAN APARTE, AQUI SE LIMPIAN LOS ACTUALES Y APARTE
	--  EN EL CICLO ES DONDE SE VAN A INSERTAR
	--  LLAMANDO A:
	--	EXEC dbo.sp_registrarHorario @usuarioId, @dia, @horaEntrada, @horaSalida

	-- en caso de algun error

	DECLARE @departamentoFinal INT
	SELECT @departamentoFinal = division FROM dbo.Usuarios WHERE usuarioId = @usuarioId

	IF @departamentoFinal IS NULL BEGIN
		UPDATE dbo.Usuarios SET division = 1 WHERE usuarioId= @usuarioId
	END

	RETURN 1

GO

/*
-- ejemplo de ejecucion
EXEC dbo.sp_guardarEditarUsuarioF2 1, 'correito@email.cr', 'actualizada', '15531105', 'AU', 'ABC123', 'NRC152', 'NVA156', NULL, 1
*/





-- ==========================================================================================





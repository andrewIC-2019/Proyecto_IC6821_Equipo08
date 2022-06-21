
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
	@notificarCorreoAlterno bit,
	@esAdministrador bit,			-- nuevo
	@esJefatura bit,
	@esDiscapacitado bit,
	@esOperador bit
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


	UPDATE dbo.Usuarios SET esAdministrador = 0, esJefatura = 0, esDiscapacitado = 0, esOperador = 0 WHERE usuarioId= @usuarioId

	-- Setea si es Administrador, Jefatura, Discapacitado, Operador								-- NUEVO
	IF @esAdministrador = 1 BEGIN
		UPDATE dbo.Usuarios SET esAdministrador = 1 WHERE usuarioId= @usuarioId
	END

	IF @esJefatura = 1 BEGIN
		UPDATE dbo.Usuarios SET esJefatura = 1 WHERE usuarioId= @usuarioId
	END

	IF @esDiscapacitado = 1 BEGIN
		UPDATE dbo.Usuarios SET esDiscapacitado = 1 WHERE usuarioId= @usuarioId
	END

	IF @esOperador = 1 BEGIN
		UPDATE dbo.Usuarios SET esOperador = 1 WHERE usuarioId= @usuarioId
	END																							-- NUEVO



	RETURN 1

GO

/*
-- ejemplo de ejecucion
EXEC dbo.sp_guardarEditarUsuarioF2 1, 'correito@email.cr', 'actualizada', '15531105', 'AU', 'ABC123', 'NRC152', 'NVA156', NULL, 1
*/





-- ==========================================================================================


-- ==========================================
--		II PARTE: CORRECCIONES LOGIN
-- ==========================================

/*
	dbo.sp_login
		Devuelve nuevas banderas
*/


DROP PROCEDURE IF EXISTS dbo.sp_login
GO

CREATE PROCEDURE dbo.sp_login
	@user nvarchar(200),
	@pass nvarchar(200)
AS
	DECLARE @elUsuario INT = -1
	DECLARE @continue INT = 0
	
	SELECT @elUsuario=usuarioId FROM dbo.Usuarios WHERE correoInstitucional = @user AND deshabilitado = 0

	IF @elUsuario = -1 BEGIN
		RETURN 0
	END ELSE BEGIN
		DECLARE @temporal VARBINARY(256)
		SELECT @temporal=[password] FROM dbo.Usuarios WHERE usuarioId = @elUsuario
		IF @temporal = HASHBYTES('SHA2_256', @pass) BEGIN
			SELECT usuarioId, apellido1, apellido2, nombre, esAdministrador, esJefatura, esDiscapacitado, esOperador, correo FROM dbo.Usuarios WHERE usuarioId = @elUsuario FOR JSON AUTO
			RETURN 1
		END ELSE BEGIN
			RETURN 0
		END
	END
GO

/*
-- Ejemplo de ejecucion: correoInstitucional, password
EXEC dbo.sp_login 'aarias.19@itcr.ac.cr', '12345'

-- Por si es necesario, cuando las banderas estan nulas:
-- UPDATE dbo.Usuarios SET esAdministrador = 0, esJefatura = 0, esDiscapacitado = 0, esOperador = 0 WHERE usuarioId = 2
*/



-- ==========================================================================================


-- =========================================================
--		III PARTE: CORRECCIONES INSERTAR Y EDITAR PARQUEOS
-- =========================================================

--	Actualiza los espacios dispnibles

-- ==========================================
--		FORMULARIO REGISTRAR ESTACIONAMIENTO
-- ==========================================

DROP PROCEDURE IF EXISTS dbo.sp_registrarEstacionamientoTotal
GO

CREATE PROCEDURE dbo.sp_registrarEstacionamientoTotal
	@nombre nvarchar(200),
	@correo nvarchar(200),
	@telefono nvarchar(40),
	@identificacion nvarchar(60),
	@direccionExacta nvarchar(500),
	@formaAcceso nvarchar(500),
	@descripcion nvarchar(250),
	@cantEspaciosEspeciales int,
	@cantEspaciosJefaturas int,
	@cantEspaciosVisitantes int,
	@cantEspaciosOficiales int,
	@cantEspacios int,
	@imageUrl nvarchar(800),
	@lunesA time(7),
	@lunesB time(7),
	@martesA time(7),
	@martesB time(7),
	@miercolesA time(7),
	@miercolesB time(7),
	@juevesA time(7),
	@juevesB time(7),
	@viernesA time(7),
	@viernesB time(7),
	@sabadoA time(7),
	@sabadoB time(7),
	@domingoA time(7),
	@domingoB time(7),
	@esInstitucional bit
AS
	-- institucional 1:
	-- subcontratado 2:

	DECLARE @tipoEstacionamiento INT

	IF @esInstitucional=1 BEGIN
		SELECT @tipoEstacionamiento = tipoEstacionamientoId FROM dbo.TiposEstacionamientos WHERE tipo = 'institucional' 
	END ELSE BEGIN
		SELECT @tipoEstacionamiento = tipoEstacionamientoId FROM dbo.TiposEstacionamientos WHERE tipo = 'subcontratado' 
	END

	DECLARE @nuevoEstacionamientoId BIGINT
	EXEC @nuevoEstacionamientoId = dbo.sp_registrarEstacionamiento @tipoEstacionamiento, 1, 1, 1, @direccionExacta,
	@nombre, @formaAcceso, @cantEspacios, @cantEspaciosEspeciales, @cantEspaciosJefaturas, @cantEspaciosVisitantes, @cantEspaciosOficiales,
	@correo, @telefono, @identificacion, @imageUrl, @descripcion

	-- insercion de los horarios

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 2, @lunesA, @lunesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 3, @lunesA, @lunesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 4, @lunesA, @lunesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 5, @lunesA, @lunesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 7, @domingoA, @domingoB
	END

	-- *Actualiza los espacios disponibles de ese parqueo
	EXEC dbo.sp_actualizarEspaciosDisponibles @nuevoEstacionamientoId

	RETURN @nuevoEstacionamientoId -- Se completo exitosamente

GO

/*
-- Ejemplo de ejecucion
EXEC dbo.sp_registrarEstacionamientoTotal 'Parqueo Amón2', 'parqueo.amon@email.cr', '75643462', NULL, 'Diagonal a casa verd2e', 'Dar la vuelta por el edificio principal, sentido S-N2', 'Parqueo cercano al campus2',
1, 1, 1, 0, 7, 'https://uc905e507265cf72e311859374ed.previews.dropboxusercontent.com/p/thumb/ABhIgcjAJXv8k4siO1HiGTPNXePMIt8QbCiYXVl17E9zpJSLT9osxPUDlcr6gGHTJfx0rvGXQ4P0vfIHIrpoPQ5Y7yCmaBcLDPilYGYBZPgcrxzoUs2CGSStm1kdLwxekiQ7nYOR6fwGW-c0T5wtwRGb8ehEIK7pMohYhJl2qmaX1gPGlefKgnQ_usdMuY4tnAKyNXyE-N12y8y1786sRO1JpxiabYn72hNdqiGK8Jp13JcIEAeePQSliayjYjbj05EtTO88nFVCxaAUelH1xF8fRTGojcVLwoOSl1FBk-KJ0wb3wrwW3ZWfzZjnz7vvgwnEW4DbuLzK9r2LcH1iFV0JrOlSWjIOP57Iw0r67e5k9gXksr1cZS8H6sF4wlg-V2s/p.jpeg',
'06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '08:00', '16:00', NULL, NULL, 0
SELECT * FROM dbo.Estacionamientos
*/


-- ==================================================
--		FORMULARIO MODIFICAR ESTACIONAMIENTO
-- ==================================================

--		guardar: para salvar los cambios, en caso de que el boton se oprima

DROP PROCEDURE IF EXISTS dbo.sp_guardarEditarEstacionamiento
GO

CREATE PROCEDURE dbo.sp_guardarEditarEstacionamiento
	@estacionamientoId int,
	@identificacion nvarchar(60),
	@nombre nvarchar(200),
	@correo nvarchar(200),
	@telefono nvarchar(40),
	@direccionExacta nvarchar(500),
	@formaAcceso nvarchar(500),
	@descripcion nvarchar(250),
	@cantEspaciosEspeciales int,
	@cantEspaciosJefaturas int,
	@cantEspaciosVisitantes int,
	@cantEspaciosOficiales int,
	@cantEspacios int,
	@imageUrl nvarchar(800),
	@tipoEstacionamiento int,
	@lunesA time(7),
	@lunesB time(7),
	@martesA time(7),
	@martesB time(7),
	@miercolesA time(7),
	@miercolesB time(7),
	@juevesA time(7),
	@juevesB time(7),
	@viernesA time(7),
	@viernesB time(7),
	@sabadoA time(7),
	@sabadoB time(7),
	@domingoA time(7),
	@domingoB time(7)
AS
	-- busqueda del Id del estacionamiento
	-- DECLARE @estacionamientoId INT
	-- SELECT @estacionamientoId = estacionamientoId FROM dbo.Estacionamientos WHERE identificacion = @identificacion

	-- busca y actualiza la direccionExacta
	DECLARE @laUbicacion BIGINT
	SELECT @laUbicacion = ubicacion FROM dbo.Estacionamientos WHERE identificacion = @identificacion OR estacionamientoId = @estacionamientoId

	UPDATE dbo.Ubicaciones SET direccionExacta = @direccionExacta WHERE ubicacionId = @laUbicacion

	-- actualiza informacion de la tabla de estacionamiento
	IF @formaAcceso IS NOT NULL
	UPDATE dbo.Estacionamientos SET nombre = @nombre, correo= @correo, telefono = @telefono, formaAcceso = @formaAcceso, 
	descripcion = @descripcion, cantEspaciosEspeciales = @cantEspaciosEspeciales, cantEspaciosJefaturas = @cantEspaciosJefaturas, cantEspaciosVisitantes = @cantEspaciosVisitantes,
	cantEspaciosOficiales = @cantEspaciosOficiales, cantEspacios = @cantEspacios, imageUrl = @imageUrl, tipoEstacionamiento=@tipoEstacionamiento
	WHERE identificacion = @identificacion OR estacionamientoId = @estacionamientoId

	ELSE
	UPDATE dbo.Estacionamientos SET nombre = @nombre, correo= @correo, telefono = @telefono, 
	descripcion = @descripcion, cantEspaciosEspeciales = @cantEspaciosEspeciales, cantEspaciosJefaturas = @cantEspaciosJefaturas, cantEspaciosVisitantes = @cantEspaciosVisitantes,
	cantEspaciosOficiales = @cantEspaciosOficiales, cantEspacios = @cantEspacios, imageUrl = @imageUrl, tipoEstacionamiento=@tipoEstacionamiento
	WHERE identificacion = @identificacion OR estacionamientoId = @estacionamientoId


	-- actualizacion de los horarios

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 2, @martesA, @martesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 3, @miercolesA, @miercolesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 4, @juevesA, @juevesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 5, @viernesA, @viernesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 7, @domingoA, @domingoB
	END

	-- *Actualiza los espacios disponibles de ese parqueo
	EXEC dbo.sp_actualizarEspaciosDisponibles @estacionamientoId

	RETURN 1

GO

/*
-- ejemplo de ejecucion
EXEC dbo.sp_guardarEditarEstacionamiento 6, '75643457', 'Parqueo Nuevo Amón', 'nuevoamon@email.cr','96213505', '200m norte del morazán', 'Sobre la calle del casino, sentido O - E, mano derecha', 'Parqueo bajo techo',
1, 1, 1, 1, 6, NULL,
NULL, NULL, '07:30', '16:30', '07:30', '16:30', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
*/



-- ===================================
-- ||		STORE PROCEDURES		||
-- ===================================


-- Permisos de Usuario:
--		Se llamara dentro del proceso de registro de usuario, para asignarle los permisos pertinentes

DROP PROCEDURE IF EXISTS dbo.sp_permisosUsuario

CREATE PROCEDURE dbo.sp_permisosUsuario
	@usuarioId bigint,
	@permisoUsuarioId int
AS
	INSERT INTO dbo.Permisos_Por_Usuario (permisoUsuarioId, usuarioId)
	VALUES
	(@permisoUsuarioId, @usuarioId)

	RETURN 1
GO

EXEC dbo.sp_permisosUsuario 1,1
EXEC dbo.sp_permisosUsuario 1,2
EXEC dbo.sp_permisosUsuario 1,3
EXEC dbo.sp_permisosUsuario 1,4

-- ..............................................................................................

-- Ubicaciones:
--		Inserta ubicaciones (provincia, canton, distrito y la direccion exacta)
--		Por el momento es solo utilizado al momento de gestionar estacionamientos

DROP PROCEDURE IF EXISTS dbo.sp_ubicaciones

CREATE PROCEDURE dbo.sp_ubicaciones
	@provincia tinyint, 
	@canton smallint,
	@distrito int,
	@direccion nvarchar(500)
AS
	INSERT INTO dbo.Ubicaciones (provincia, canton, distrito, direccionExacta) VALUES
	(@provincia, @canton, @distrito, @direccion)

	RETURN 1
GO
-- ..............................................................................................

-- Estacionamiento:
--		Registra un nuevo estacionamiento

DROP PROCEDURE IF EXISTS dbo.sp_registrarEstacionamiento

CREATE PROCEDURE dbo.sp_registrarEstacionamiento
	@tipoEstacionamiento smallint,
	@provincia tinyint, 
	@canton smallint,
	@distrito int,
	@direccion nvarchar(500),
	@nombre nvarchar(200),
	@formaAcceso nvarchar(500),
	@cantEspacios int,
	@cantEspaciosEspeciales int,
	@cantEspaciosJefaturas int,
	@cantEspaciosVisitantes int,
	@cantEspaciosOficiales int,
	@correo nvarchar(200),
	@telefono nvarchar(40),
	@identificacion nvarchar(60),
	@imageUrl nvarchar(128),
	@descripcion nvarchar(250)
AS
	-- Registra la ubicacion
	EXEC dbo.sp_ubicaciones @provincia, @canton, @distrito, @direccion

	-- Obtiene la direccion de esa ubicacion recien registrada
	DECLARE @ubicacion bigint 
	SELECT @ubicacion = MAX(ubicacionId) FROM dbo.Ubicaciones

	BEGIN TRANSACTION

		INSERT INTO dbo.Estacionamientos 
			(	tipoEstacionamiento, ubicacion, nombre, formaAcceso,
				cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales,
				correo, telefono, identificacion, imageUrl, descripcion	)
		VALUES
			(	@tipoEstacionamiento, @ubicacion, @nombre, @formaAcceso,
				@cantEspacios, @cantEspaciosEspeciales, @cantEspaciosJefaturas, @cantEspaciosVisitantes, @cantEspaciosOficiales,
				@correo, @telefono, @identificacion, @imageUrl, @descripcion	)
	COMMIT

GO

EXEC dbo.sp_registrarEstacionamiento 1, 1, 1, 1, 'Sobre calle 5, Costado sur del edificio principal', 'Parqueo Principal CTLSJ',
'Sobre Avenida 7 o 9, tomar calle 5, entrada al costado sur del edificio principal', 0, 2, 6, 0, 2, 'ctlsanjose@itcr.ac.cr', '2550 0001',
NULL, NULL, 'Cuenta con espacios exclusivos para las jefaturas y vehiculos oficiales'
				
SELECT * FROM dbo.Estacionamientos

-- ..............................................................................................

-- Horarios:
--		La idea seria buscar si ya está, si no, entonces crearlo
--		Me devuelve el horarioId


-- NO
DROP PROCEDURE IF EXISTS dbo.sp_InsertarHorario

CREATE PROCEDURE dbo.sp_InsertarHorario
	@diaSemana tinyint,					-- parametros
	@horaInicio time(7),
	@horaFinal time(7)
AS

	DECLARE @registradoComo INT	= 0					-- busca si ya el horario esta registrado
	SELECT @registradoComo = horarioId FROM dbo.Horarios WHERE diaSemana = @diaSemana AND horaInicio = @horaInicio AND horaFinal = @horaFinal;

	IF @registradoComo<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		
		BEGIN TRANSACTION
			INSERT INTO dbo.Horarios(diaSemana, horaInicio, horaFinal)
			VALUES
			(@diaSemana, @horaInicio, @horaFinal)
		COMMIT
		SELECT @registradoComo = MAX(horarioId) FROM dbo.Horarios
	END

	RETURN @registradoComo

GO

EXEC dbo.sp_InsertarHorario 1, '17:00', '21:00'

-- Ejemplo de obtencion del valor de retorno
DECLARE @hola INT
EXEC @hola = dbo.sp_InsertarHorario 1, '17:00', '21:00'
SELECT @hola
GO

-- xxxxxxxxxxxxxxxxxxxxxxxxx

-- SP Horarios y Usuario 

DROP PROCEDURE IF EXISTS dbo.sp_registrarHorario

CREATE PROCEDURE dbo.sp_registrarHorario
	@usuarioId bigint,
	@diaSemana tinyint,					-- parametros
	@horaInicio time(7),
	@horaFinal time(7)
AS

	DECLARE @registradoComo INT	= 0					-- busca si ya el horario esta registrada
	SELECT @registradoComo = horarioId FROM dbo.Horarios WHERE diaSemana = @diaSemana AND horaInicio = @horaInicio AND horaFinal = @horaFinal;

	DECLARE @yaAsociado BIT = 0
	SELECT @yaAsociado=1 FROM dbo.Horarios_Por_Usuario WHERE usuarioId = @usuarioId AND horarioId = @registradoComo AND deshabilitado = 0

	IF @yaAsociado=1 BEGIN
		RETURN 0					-- Si ya el usuario tenia ese carro, entonces no sigue el registro
	END

	IF @registradoComo<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		BEGIN TRANSACTION
			INSERT INTO dbo.Horarios(diaSemana, horaInicio, horaFinal)
			VALUES
			(@diaSemana, @horaInicio, @horaFinal)
		COMMIT
		SELECT @registradoComo = MAX(horarioId) FROM dbo.Horarios
	END
																	-- asocia al usuario con el horario
	BEGIN TRANSACTION												-- para este punto el @registradoComo tiene el id del horario lo haya encontrado o creado
		INSERT INTO dbo.Horarios_Por_Usuario (usuarioId, horarioId)
		VALUES
		(@usuarioId, @registradoComo)
	COMMIT

GO

EXEC dbo.sp_registrarHorario 1, 3, '17:00', '21:00'
GO

SELECT * FROM dbo.Horarios_Por_Usuario

-- xxxxxxxxxxxxxxxxxxxxxxxxx

-- ..............................................................................................
-- Vehiculos

-- SP Vehiculo:
--		Inserta un vehiculo

-- NO

DROP PROCEDURE IF EXISTS dbo.sp_InsertarVehiculo

CREATE PROCEDURE dbo.sp_InsertarVehiculo
	@placa NVARCHAR(20),					-- parametros
	@tipoVehiculo SMALLINT
AS

	DECLARE @Existe INT						-- busca si ya la placa esta registrada
	SELECT @Existe = COUNT(vehiculoId) FROM dbo.Vehiculos WHERE placa = @placa AND tipoVehiculo = @tipoVehiculo;

	IF @Existe<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion

		BEGIN TRANSACTION
			INSERT INTO dbo.Vehiculos (placa, tipoVehiculo)
			VALUES
			(@placa, @tipoVehiculo)
		COMMIT

	END

GO

EXEC dbo.sp_InsertarVehiculo 'DFG235', 1
GO

-- SP Vehiculo y Usuario
--		Asocia un vehiculo junto a un usuario

DROP PROCEDURE IF EXISTS dbo.sp_RegistrarVehiculo

CREATE PROCEDURE dbo.sp_RegistrarVehiculo
	@usuarioId bigint,
	@placa NVARCHAR(20),					-- parametros
	@tipoVehiculo SMALLINT
AS

	DECLARE @Existe INT	= 0					-- busca si ya la placa esta registrada
	SELECT @Existe = vehiculoId FROM dbo.Vehiculos WHERE placa = @placa AND tipoVehiculo = @tipoVehiculo;

	DECLARE @yaAsociado BIT = 0
	SELECT @yaAsociado=1 FROM dbo.Vehiculos_Por_Usuario WHERE usuarioId = @usuarioId AND vehiculoId = @Existe AND deshabilitado = 0

	IF @yaAsociado=1 BEGIN
		RETURN 0					-- Si ya el usuario tenia ese carro, entonces no sigue el registro
	END

	IF @Existe<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		BEGIN TRANSACTION
			INSERT INTO dbo.Vehiculos (placa, tipoVehiculo)
			VALUES
			(@placa, @tipoVehiculo)
		COMMIT
		SELECT @Existe = MAX(vehiculoId) FROM dbo.Vehiculos
	END

	BEGIN TRANSACTION						-- asocia al usuario con el vehiculo
		INSERT INTO dbo.Vehiculos_Por_Usuario (usuarioId, vehiculoId)
		VALUES
		(@usuarioId, @Existe)
	COMMIT

	RETURN @Existe

GO

EXEC dbo.sp_RegistrarVehiculo 1, 'MRC152', 1
GO

SELECT * FROM dbo.Vehiculos_Por_Usuario
-- ..............................................................................................
-- Usuarios

-- SP Funcionarios

DROP PROCEDURE IF EXISTS dbo.sp_RegistrarFuncionario

CREATE PROCEDURE dbo.sp_RegistrarFuncionario
	@tipoFuncionario int,
	@division int,
	@identificacion nvarchar(60),
	@nombre nvarchar(60),
	@apellido1 nvarchar(60),
	@apellido2 nvarchar(60),
	@telefono nvarchar(40),
	@correoInstitucional nvarchar(200),
	@correo nvarchar(200),
	@notificarCorreoAlterno bit,
	@password nvarchar(100)
AS
	DECLARE @buscaUsuario INT = 0					-- busca si ya la placa esta registrada
	SELECT @buscaUsuario = usuarioId FROM dbo.Usuarios WHERE correoInstitucional = @correoInstitucional OR identificacion = @identificacion;

	
	IF @buscaUsuario = 0 BEGIN
		
		BEGIN TRANSACTION
			INSERT INTO dbo.Usuarios
			(tipoFuncionario, division, identificacion, 
			nombre, apellido1, apellido2, telefono, correoInstitucional,
			correo, notificarCorreoAlterno, [password])
			VALUES
			(@tipoFuncionario, @division, @identificacion, 
			@nombre, @apellido1, @apellido2, @telefono, @correoInstitucional,
			@correo, @notificarCorreoAlterno, HASHBYTES('SHA2_256', @password))
		COMMIT

		SELECT @buscaUsuario = MAX(usuarioId) FROM dbo.Usuarios
		RETURN @buscaUsuario
	END ELSE BEGIN
		RETURN 0
	END
	
GO

DECLARE @impreso INT
EXEC @impreso = dbo.sp_RegistrarFuncionario NULL, 12, '741025896', 'Fabiola', 'Perez', 'Martinez', '30258756', 'fperez.92@itcr.ac.cr', 'fperez.92@email.cr', 1, 'fperez.92'
SELECT @impreso

SELECT * FROM dbo.Usuarios


-- -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
--			SPs Vistas
-- -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-


-- Pantalla 0: login

DROP PROCEDURE IF EXISTS dbo.sp_login

CREATE PROCEDURE dbo.sp_login
	@user nvarchar(200),
	@pass nvarchar(200)
AS
	DECLARE @elUsuario INT = -1
	DECLARE @continue INT = 0
	
	SELECT @elUsuario=usuarioId FROM dbo.Usuarios WHERE correoInstitucional = @user

	IF @elUsuario = -1 BEGIN
		RETURN 0
	END ELSE BEGIN
		DECLARE @temporal VARBINARY(256)
		SELECT @temporal=[password] FROM dbo.Usuarios WHERE usuarioId = @elUsuario
		IF @temporal = HASHBYTES('SHA2_256', @pass) BEGIN
			SELECT usuarioId, apellido1, apellido2, nombre, esAdministrador, correo FROM dbo.Usuarios WHERE usuarioId = @elUsuario FOR JSON AUTO
		END ELSE BEGIN
			RETURN 0
		END
	END
GO

EXEC dbo.sp_login 'mcampos.71@itcr.ac.cr', 'hola'


-- / / / / / / / / / / / / / / / 
-- Pantalla 2 (/inicio): 
--		Tarjetas Estacionamientos

DROP PROCEDURE IF EXISTS dbo.sp_inicio

CREATE PROCEDURE dbo.sp_inicio
AS
	SELECT estacionamientoId, nombre, espaciosTotales = cantEspacios+cantEspaciosEspeciales+cantEspaciosJefaturas+cantEspaciosVisitantes+cantEspaciosOficiales, telefono from dbo.Estacionamientos FOR JSON PATH
GO

EXEC dbo.sp_inicio


-- / / / / / / / / / / / / / / / 
-- Pantalla 3 (/estacionamientoinfo): 
--		Informacion Estacionamiento

DROP PROCEDURE IF EXISTS dbo.sp_estacionamientoinfo

CREATE PROCEDURE dbo.sp_estacionamientoinfo 
	@estacionamientoId INT
AS
	SELECT nombre, descripcion, direccionExacta, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosOficiales, cantEspaciosVisitantes
	FROM dbo.Estacionamientos e INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId WHERE estacionamientoId = @estacionamientoId FOR JSON PATH
GO

EXEC dbo.sp_estacionamientoinfo 4

-- / / / / / / / / / / / / / / / 
-- Pantalla (/informes)


-- [] Informe detallado de estacionamientos

DROP PROCEDURE IF EXISTS dbo.sp_informeEstacionamientos

CREATE PROCEDURE dbo.sp_informeEstacionamientos
AS
	SELECT nombre, correo, telefono, descripcion, direccionExacta, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosOficiales, cantEspaciosVisitantes
	FROM dbo.Estacionamientos e INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId FOR JSON PATH
GO

EXEC dbo.sp_informeEstacionamientos


-- [] Informe detallado de funcionarios

DROP PROCEDURE IF EXISTS dbo.sp_informeFuncionarios

CREATE PROCEDURE dbo.sp_informeFuncionarios

AS
	SELECT identificacion, apellido1, apellido2, nombre, correoInstitucional, telefono
	FROM dbo.Usuarios ORDER BY apellido1
GO

EXEC dbo.sp_informeFuncionarios


-- [] Estadística de franjas horarias

-- Mas simples
-- SELECT usuarioId, horarioId FROM dbo.Horarios_Por_Usuario WHERE deshabilitado = 0
-- SELECT horarioId, funcionarios = count(horarioId) FROM dbo.Horarios_Por_Usuario GROUP BY horarioId ORDER BY funcionarios DESC

DROP PROCEDURE IF EXISTS dbo.sp_franjasHorarias

CREATE PROCEDURE dbo.sp_franjasHorarias

AS
	SELECT dia, horaInicio, horaFinal, funcionarios FROM
	(SELECT horarioId, funcionarios = count(horarioId) FROM dbo.Horarios_Por_Usuario
	 WHERE deshabilitado=0 GROUP BY horarioId) hua 
	INNER JOIN dbo.Horarios h ON hua.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.dia
	ORDER BY funcionarios DESC
GO

EXEC dbo.sp_franjasHorarias


-- [] Consulta de un funcionario por identificacion

DROP PROCEDURE IF EXISTS dbo.sp_consultaFuncionario

CREATE PROCEDURE dbo.sp_consultaFuncionario
	@identificacion nvarchar(60)
AS 

	DECLARE @usuarioId bigint = -1
	SELECT @usuarioId = usuarioId FROM dbo.Usuarios WHERE identificacion = @identificacion

	IF @usuarioId > 0 BEGIN
		SELECT identificacion, apellido1, apellido2, nombre, telefono, correoInstitucional
		FROM dbo.Usuarios WHERE identificacion = @identificacion FOR JSON AUTO

		SELECT placa FROM dbo.Vehiculos_Por_Usuario vu 
		INNER JOIN dbo.Vehiculos v ON vu.vehiculoId = v.vehiculoId 
		WHERE usuarioId = @usuarioId FOR JSON AUTO

		SELECT dia, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
		INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
		INNER JOIN dbo.Dias d ON h.diaSemana = d.dia
		WHERE usuarioId = @usuarioId FOR JSON AUTO
	END ELSE BEGIN
		RETURN 0
	END
GO

EXEC dbo.sp_consultaFuncionario '965310025'

-- FOR JSON PATH: Fijo
-- FOR JSON AUTO: Hace anidacion



-- °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
--	Nuevo	Nuevo	Nuevo	Nuevo	Nuevo	Nuevo	Nuevo	Nuevo
-- °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

-- ==========================================
--		FORMULARIO MODIFICAR MI INFORMACION
-- ==========================================

--		traer: para pintar en las cajas

DROP PROCEDURE IF EXISTS dbo.sp_pintarEditarUsuario

CREATE PROCEDURE dbo.sp_pintarEditarUsuario
	@usuarioId bigint
AS
	SELECT correo, telefono, departamento = codigoDivision, notificarCorreoAlterno FROM dbo.Usuarios u
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE usuarioId = @usuarioId FOR JSON PATH

	SELECT placa FROM dbo.Vehiculos_Por_Usuario vu 
	INNER JOIN dbo.Vehiculos v ON vu.vehiculoId = v.vehiculoId
	WHERE usuarioId = @usuarioId AND vu.deshabilitado = 0 FOR JSON AUTO

	SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
	INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
	WHERE usuarioId = @usuarioId FOR JSON AUTO

GO

-- ejemplo de ejecucion
EXEC dbo.sp_pintarEditarUsuario 1

--		guardar: para salvar los cambios, en caso de que el boton se oprima

DROP PROCEDURE IF EXISTS dbo.sp_guardarEditarUsuario

CREATE PROCEDURE dbo.sp_guardarEditarUsuario
	@usuarioId bigint,
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@departamento nvarchar(8),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
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
	@notificarCorreoAlterno bit
AS
	-- busqueda del Id de la division
	DECLARE @divisionId INT
	SELECT @divisionId = divisionId FROM dbo.Divisiones WHERE codigoDivision = @departamento OR descripcion = @departamento

	-- actualiza informacion de la tabla de usuario
	UPDATE dbo.Usuarios SET correo= @correo, [password]= HASHBYTES('SHA2_256', @password), telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
	WHERE usuarioId = @usuarioId


	-- limpia las placas asociadas para poder insertar las nuevas

	UPDATE dbo.Vehiculos_Por_Usuario SET deshabilitado=1 WHERE usuarioId = @usuarioId

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

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 2, @martesA, @martesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 3, @miercolesA, @miercolesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 4, @juevesA, @juevesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 5, @viernesA, @viernesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 7, @domingoA, @domingoB
	END

GO

-- ejemplo de ejecucion
EXEC dbo.sp_guardarEditarUsuario 1, 'correito@email.cr', 'actualizada', '15531105', 'AU', 'ABC123', 'NRC152', 'NVA156', NULL,
NULL, NULL, '07:30', '16:30', '07:30', '16:30', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1






-- ==========================================
--		FORMULARIO REGISTRAR USUARIO
-- ==========================================

DROP PROCEDURE dbo.sp_registrarUsuarioTotal

CREATE PROCEDURE dbo.sp_registrarUsuarioTotal
	@correoInstitucional nvarchar(200),
	@identificacion nvarchar(60),
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@nombre nvarchar(60),
	@apellido1 nvarchar(60),
	@apellido2 nvarchar(60),
	@departamento nvarchar(8),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
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
	@notificarCorreoAlterno bit
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

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 2, @martesA, @martesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 3, @miercolesA, @miercolesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 4, @juevesA, @juevesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 5, @viernesA, @viernesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 7, @domingoA, @domingoB
	END

	RETURN @nuevoUsuarioId -- Se completo exitosamente

GO

-- Ejemplo de ejecucion

DECLARE @otraSalida BIGINT
EXEC @otraSalida = dbo.sp_registrarUsuarioTotal 'jsolis.67@itcr.ac.cr', '812547785', 'jsolis.67@email.cr', 'jsolis.67', '74120336', 'Jorge', 'Solis', 'Thames', 'DIR',
'RJST670', NULL, NULL, NULL,
'07:30', '16:30', NULL, NULL, '07:30', '16:30', NULL, NULL, '07:30', '16:30', NULL, NULL, NULL, NULL, 0
SELECT @otraSalida


-- Ejemplo de ejecucion

DECLARE @otraSalida BIGINT
EXEC @otraSalida = dbo.sp_registrarUsuarioTotal 'aarias.19@itcr.ac.cr', '818049752', 'aarias.19@email.cr', 'aarias.19', '42361203', 'Andrés', 'Arias', 'Siles', 'IC',
'232056', 'GTR232', NULL, NULL,
'13:00', '16:30', '07:30', '16:30', '07:30', '16:30', '07:30', '16:30',  '07:30', '12:00', NULL, NULL, NULL, NULL, 1
SELECT @otraSalida

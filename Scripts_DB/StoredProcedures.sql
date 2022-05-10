
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
	SELECT 'Im here'
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

-- SP Horarios y Usuario (INNECESARIO LO PODRIA LLAMAR A LA HORA DE REGISTRAR

DROP PROCEDURE IF EXISTS dbo.Registrar_Horario

CREATE PROCEDURE dbo.Registrar_Horario
	@usuarioId bigint,
	@diaSemana tinyint,					-- parametros
	@horaInicio time(7),
	@horaFinal time(7)
AS

	DECLARE @registradoComo INT	= 0					-- busca si ya la placa esta registrada
	SELECT @registradoComo = horarioId FROM dbo.Horarios WHERE diaSemana = @diaSemana AND horaInicio = @horaInicio AND horaFinal = @horaFinal;

	IF @registradoComo<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		BEGIN TRANSACTION
			INSERT INTO dbo.Horarios(diaSemana, horaInicio, horaFinal)
			VALUES
			(@diaSemana, @horaInicio, @horaFinal)
		COMMIT
		SET @registradoComo = SELECT MAX(horarioId) FROM dbo.Horarios
	END
																	-- asocia al usuario con el horario
	BEGIN TRANSACTION												-- para este punto el @registradoComo tiene el id del horario lo haya encontrado o creado
		INSERT INTO dbo.Horarios_Por_Usuario (usuarioId, horarioId)
		VALUES
		(@usuarioId, @registradoComo)
	COMMIT

GO

EXEC dbo.Registrar_Horario 1, 2, '17:00', '21:00'
GO

SELECT * FROM dbo.Horarios_Por_Usuario

-- xxxxxxxxxxxxxxxxxxxxxxxxx

-- ..............................................................................................
-- Vehiculos

-- SP Vehiculo:
--		Inserta un vehiculo

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

EXEC dbo.sp_RegistrarVehiculo 1, 'ABC123', 1
GO

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
	END
	
GO


EXEC dbo.sp_RegistrarFuncionario 2, 1, '965310025', 'Mauricio', 'Campos', 'Méndez', '19710601', 'mcampos.71@itcr.ac.cr', NULL, 0, 'mcampos.71'


SELECT * FROM dbo.Usuarios


-- -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
--			SPs Vistas
-- -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-


-- Pantalla 1: login

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

EXEC dbo.sp_login 'mcampos.71@itcr.ac.cr', 'mcampos.71'


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
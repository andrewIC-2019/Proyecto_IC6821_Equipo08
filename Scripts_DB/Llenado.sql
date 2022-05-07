USE parqueos;

-- ---------------------------------------------
-- INSERCION DE INFORMACION BASICA DEL CATALOGO
-- ---------------------------------------------

-- Provincia
INSERT INTO dbo.Provincias (provincia) 
VALUES ('SAN_JOSÉ')

-- Canton
INSERT INTO dbo.Cantones (provinciaId, canton) 
VALUES (1, 'San José')

-- Distritos
INSERT INTO dbo.Distritos (provinciaId, cantonId, distrito) 
VALUES (1, 1, 'Carmen')

INSERT INTO dbo.Distritos (provinciaId, cantonId, distrito) 
VALUES (1, 1, 'Merced')

INSERT INTO dbo.Distritos (provinciaId, cantonId, distrito) 
VALUES (1, 1, 'Hospital')

INSERT INTO dbo.Distritos (provinciaId, cantonId, distrito) 
VALUES (1, 1, 'Catedral')

-- Dias
INSERT INTO dbo.Dias (dia) VALUES ('Lunes'), ('Martes'), ('Miercoles'), ('Jueves'), ('Viernes'), ('Sabado'), ('Domingo')

-- Divisiones
INSERT INTO dbo.Divisiones (codigoDivision, descripcion) VALUES
('DIR', 'Dirección'),
('AU', 'Arquitectura y Urbanismo'),
('IC', 'Ingeniería en Computación'),
('AE', 'Administración de Empresas'),
('UCU', 'Unidad de Cultura'),
('UDE', 'Unidad de Deporte'),
('CCA', 'Casa Cultural Amón'),
('UGA', 'Unidad de Gestión Administrativa'),
('DAR', 'Departamento Admisión y Registro'),
('DOP', 'Departamento Orientación y Psicología'),
('OEG', 'Oficina Equidad y Género'),
('TSR', 'Unidad de Tesorería'),
('UTS', 'Trabajo Social'),
('BIB', 'Unidad de Gestión Bibliotecaria'),
('CIS', 'Clínica Integral Salud'),
('USV', 'Seguridad'),
('TI', 'Soporte Técnico'),
('UMA', 'Mantenimiento')


-- Permisos Usuario
INSERT INTO dbo.PermisosUsuario (permiso) VALUES
('CONSULTAR_ESTACIONAMIENTOS'),
('RESERVAR'),
('GESTIONAR_USUARIOS'),
('GESTIONAR_ESTACIONAMIENTOS')


DROP PROCEDURE IF EXISTS dbo.Permisos_Usuario

CREATE PROCEDURE dbo.Permisos_Usuario
	@usuarioId bigint,
	@permisoUsuarioId int
AS
	INSERT INTO dbo.Permisos_Por_Usuario (permisoUsuarioId, usuarioId)
	VALUES
	(@usuarioId, @permisoUsuarioId)
GO


-- Tipo Vehiculos
INSERT INTO dbo.tipoVehiculo (tipo) VALUES
('Particular'),
('Oficial')

-- Tipos Espacios
INSERT INTO dbo.Tipos_Espacios(tipo) VALUES
('Particular'),
('Oficial'),
('Visitante'),
('Jefatura'),
('Discapacitado')

-- Tipos Estacionamientos
INSERT INTO dbo.TiposEstacionamientos(tipo) VALUES
('Institucional'),
('Subcontratado')

-- Tipos Funcionarios
INSERT INTO dbo.TiposFuncionarios(tipoFuncionario) VALUES
('Docente'),
('Administrativo')


-- Ubicaciones
INSERT INTO dbo.Ubicaciones (provinciaId, cantonId, distritoId, direccionExacta) VALUES
(1, 1, 1, 'Sobre calle 5, Costado sur del edificio principal')

-- Estacionamiento
INSERT INTO dbo.Estacionamientos (	tipoEstacionamiento, ubicacion, nombre, formaAcceso,
									cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales,
									correo, telefono, identificacion, imageUrl, descripcion)
		VALUES
								(	1, 1, 'Parqueo Principal CTLSJ', 'Sobre Avenida 7 o 9, tomar calle 5, entrada al costado sur del edificio principal',
								0, 2, 6, 0, 2,
								'ctlsanjose@itcr.ac.cr', '2550 ????', NULL, 'somealmacenaje.cr/photo/pprincipal', 'Cuenta con espacios exclusivos para las jefaturas y vehiculos oficiales')
								




-- ===============================
-- ||	CREAR STORE PROCEDURES	||
-- ===============================


-- Horarios
--	La idea seria buscar si ya está, si no, entonces crearlo

INSERT INTO dbo.Horarios (diaSemana, horaInicio, horaFinal) VALUES
(1, '07:30', '16:30'),
(2, '07:30', '16:30'),
(3, '07:30', '16:30'),
(4, '07:30', '16:30'),
(5, '07:30', '16:30')

-- SP Horarios

DROP PROCEDURE IF EXISTS dbo.Insertar_Horario

CREATE PROCEDURE dbo.Insertar_Horario
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
		
		-- SELECT MAX(horarioId) FROM dbo.Horarios

	END

GO

EXEC dbo.Insertar_Horario 1, '17:00', '21:00'
GO


-- SP Horarios y Usuario

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

-- .........
-- Vehiculos
-- .........


INSERT INTO dbo.Vehiculos(placa, tipoVehiculo) VALUES
('920536', 1),
('265090', 2),
('265403',2),
('RWS123', 1),
('71203', 1)

-- SP Vehiculo

DROP PROCEDURE IF EXISTS dbo.Insertar_Vehiculo

CREATE PROCEDURE dbo.Insertar_Vehiculo
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

EXEC dbo.Insertar_Vehiculo 'ABC123', 1
GO

-- SP Vehiculo y Usuario

DROP PROCEDURE IF EXISTS dbo.Registrar_Vehiculo

CREATE PROCEDURE dbo.Registrar_Vehiculo
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
	SET @Existe = SELECT MAX(vehiculoId) FROM dbo.Vehiculos
	END

	BEGIN TRANSACTION						-- asocia al usuario con el vehiculo
		INSERT INTO dbo.Vehiculos_Por_Usuario (usuarioId, vehiculoId)
		VALUES
		(@usuarioId, @Existe)
	COMMIT

GO

EXEC dbo.Registrar_Vehiculo 1, 'ABC123', 1
GO



-- Usuarios
INSERT INTO dbo.Usuarios (	tipoFuncionario, division, identificacion, 
							nombre, apellido1, apellido2, telefono, correoInstitucional,
							correo, notificarCorreoAlterno, [password])
		VALUES

--		Andres Arias: Administrativo
						 (	2, 3, '818049752', 
							'Andrés', 'Arias', 'Siles', '42361203', 'aarias.19@itcr.ac.cr',
							'aarias.19@email.cr', 1, HASHBYTES('SHA2_256', 'aarias.19')
						 ),

--		Mauricio Campos: Administrativo - Admin de la plataforma
						 (	2, 1, '965310025',
							'Mauricio', 'Campos', 'Méndez', '19710601', 'mcampos.71@itcr.ac.cr',
							NULL, 0, HASHBYTES('SHA2_256', 'mcampos.71')
						)


-- SP Funcionarios

DROP PROCEDURE IF EXISTS dbo.Registrar_Funcionario

CREATE PROCEDURE dbo.Registrar_Funcionario
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
		
		INSERT INTO dbo.Usuarios
		(tipoFuncionario, division, identificacion, 
		nombre, apellido1, apellido2, telefono, correoInstitucional,
		correo, notificarCorreoAlterno, [password])
		VALUES
		(@tipoFuncionario, @division, @identificacion, 
		@nombre, @apellido1, @apellido2, @telefono, @correoInstitucional,
		@correo, @notificarCorreoAlterno, HASHBYTES('SHA2_256', @password))

	END
	
GO


EXEC dbo.Registrar_Funcionario 2, 1, '965310025', 'Mauricio', 'Campos', 'Méndez', '19710601', 'mcampos.71@itcr.ac.cr', NULL, 0, 'mcampos.71'


-- Ubicacion del Campus Tecnológico Local San José:
--		Calles 5 y 7, Avenida 9 y 11 ... Barrio Amón. San José, San José

SELECT * FROM dbo.Usuarios
SELECT tipoVehiculoId FROM dbo.tipoVehiculo WHERE tipo='Oficial'



-- ---------------------
--  SPs Vistas
-- ---------------------


-- Pantalla 1: login

DROP PROCEDURE IF EXISTS dbo.sp_login

CREATE PROCEDURE dbo.sp_login
	@user nvarchar(200),
	@pass nvarchar(200)
AS
	DECLARE @elUsuario INT = -1
	DECLARE @continue INT = 0
	
	SELECT @elUsuario=usuarioId FROM dbo.Usuarios WHERE correoInstitucional = @user
	SELECT @elUsuario

	IF @elUsuario = -1 BEGIN
		SELECT 0;
	END ELSE BEGIN
		DECLARE @temporal VARBINARY(256)
		SELECT @temporal=[password] FROM dbo.Usuarios WHERE usuarioId = @elUsuario
		IF @temporal = HASHBYTES('SHA2_256', @pass) BEGIN
			SELECT 1
		END ELSE BEGIN
			SELECT 0
		END
	END
GO

EXEC dbo.sp_login 'mcampos.71@itcr.ac.cr', 'mcampos.71'


-- Pantalla 2: Tarjetas Estacionamientos

SELECT nombre, cantEspacios, telefono from dbo.Estacionamientos


-- Pantalla 3: Informacion Estacionamiento
SELECT nombre, descripcion, ubicacion, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosJefaturas, cantEspaciosVisitantes
FROM dbo.Estacionamientos WHERE estacionamientoId = 1


-- - - - - - - - - - - - - - - - -
-- Informes
-- - - - - - - - - - - - - - - - -

-- Informe detallado de estacionamientos
SELECT nombre, descripcion, ubicacion, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosJefaturas, cantEspaciosVisitantes
FROM dbo.Estacionamientos

-- Informe detallado de funcionarios
SELECT identificacion, apellido1, apellido2, nombre, telefono
FROM dbo.Usuarios ORDER BY apellido1

-- Estadística de franjas horarias
SELECT usuarioId, horarioId FROM dbo.Horarios_Por_Usuario WHERE deshabilitado = 0

-- Consulta de un funcionario por identificacion
SELECT identificacion, apellido1, apellido2, nombre, telefono
FROM dbo.Usuarios WHERE identificacion = 965310025
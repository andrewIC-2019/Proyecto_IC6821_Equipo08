-- ----------------------------------
--       Informacion de Llenado
--
--	Diseno de Software - I-2022
--
--	Proyecto de Estacionamientos TEC
--
--	Equipo 08:	Andres Arias
--				Manuel Casasola
--				Jarod Cervantes
-- ----------------------------------


-- Base de datos a utilizar
USE parqueos;

-- ---------------------------------------------
-- INSERCION DE INFORMACION BASICA DEL CATALOGO
-- ---------------------------------------------

-- Provincia
INSERT INTO dbo.Provincias (provincia) 
VALUES ('SAN_JOS�')

-- Canton
INSERT INTO dbo.Cantones (provinciaId, canton) 
VALUES (1, 'San Jos�')

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
('DIR', 'Direcci�n'),
('AU', 'Arquitectura y Urbanismo'),
('IC', 'Ingenier�a en Computaci�n'),
('AE', 'Administraci�n de Empresas'),
('UCU', 'Unidad de Cultura'),
('UDE', 'Unidad de Deporte'),
('CCA', 'Casa Cultural Am�n'),
('UGA', 'Unidad de Gesti�n Administrativa'),
('DAR', 'Departamento Admisi�n y Registro'),
('DOP', 'Departamento Orientaci�n y Psicolog�a'),
('OEG', 'Oficina Equidad y G�nero'),
('TSR', 'Unidad de Tesorer�a'),
('UTS', 'Trabajo Social'),
('BIB', 'Unidad de Gesti�n Bibliotecaria'),
('CIS', 'Cl�nica Integral Salud'),
('USV', 'Seguridad'),
('TI', 'Soporte T�cnico'),
('UMA', 'Mantenimiento')

-- Permisos Usuario
INSERT INTO dbo.PermisosUsuario (permiso) VALUES
('CONSULTAR_ESTACIONAMIENTOS'),
('RESERVAR'),
('GESTIONAR_USUARIOS'),
('GESTIONAR_ESTACIONAMIENTOS')

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


-- Adicionalmente...

INSERT INTO dbo.Horarios (diaSemana, horaInicio, horaFinal) VALUES
(1, '07:30', '16:30'),
(2, '07:30', '16:30'),
(3, '07:30', '16:30'),
(4, '07:30', '16:30'),
(5, '07:30', '16:30')

INSERT INTO dbo.Vehiculos(placa, tipoVehiculo) VALUES
('920536', 1),
('265090', 2),
('265403',2),
('RWS123', 1),
('71203', 1)

INSERT INTO dbo.Usuarios (	tipoFuncionario, division, identificacion, 
							nombre, apellido1, apellido2, telefono, correoInstitucional,
							correo, notificarCorreoAlterno, [password])
		VALUES

--		Andres Arias: Administrativo
						 (	2, 3, '818049752', 
							'Andr�s', 'Arias', 'Siles', '42361203', 'aarias.19@itcr.ac.cr',
							'aarias.19@email.cr', 1, HASHBYTES('SHA2_256', 'aarias.19')
						 ),

--		Mauricio Campos: Administrativo - Admin de la plataforma
						 (	2, 1, '965310025',
							'Mauricio', 'Campos', 'M�ndez', '19710601', 'mcampos.71@itcr.ac.cr',
							NULL, 0, HASHBYTES('SHA2_256', 'mcampos.71')
						)
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
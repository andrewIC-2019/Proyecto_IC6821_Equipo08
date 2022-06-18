-- ---------------------------------
--	Orden Truncate Tables
-- ----------------------------------

-- Permisos Por Usuario
-- ---------------------

-- SELECT * FROM dbo.Permisos_Por_Usuario

TRUNCATE TABLE dbo.Permisos_Por_Usuario
GO

-- SELECT * FROM dbo.Permisos_Por_Usuario


-- *************************************************************

-- Vehiculos Por Usuario
-- ----------------------

-- SELECT * FROM dbo.Vehiculos_Por_Usuario

TRUNCATE TABLE dbo.Vehiculos_Por_Usuario
GO

-- SELECT * FROM dbo.Vehiculos_Por_Usuario


-- *************************************************************

-- Vehiculos 
-- ----------

-- SELECT * FROM dbo.Vehiculos

BEGIN TRANSACTION
	DELETE FROM dbo.Vehiculos
	DBCC CHECKIDENT ('dbo.Vehiculos', RESEED, 0)
COMMIT

-- SELECT * FROM dbo.Vehiculos


-- *************************************************************

-- Horarios Por Usuario
-- ---------------------

-- SELECT * FROM dbo.Horarios_Por_Usuario

TRUNCATE TABLE dbo.Horarios_Por_Usuario
GO

-- SELECT * FROM dbo.Horarios_Por_Usuario


-- *************************************************************

-- Horarios Por Estacionamiento
-- ---------------------

-- SELECT * FROM dbo.Horarios_Por_Estacionamiento

TRUNCATE TABLE dbo.Horarios_Por_Estacionamiento
GO

-- SELECT * FROM dbo.Horarios_Por_Estacionamiento


-- *************************************************************

-- Horarios
-- ---------------------

-- SELECT * FROM dbo.Horarios

BEGIN TRANSACTION
	DELETE FROM dbo.Horarios
	DBCC CHECKIDENT ('dbo.Horarios', RESEED, 0)
COMMIT

-- SELECT * FROM dbo.Horarios


-- *************************************************************

-- Usuarios
-- ---------

-- SELECT * FROM dbo.Usuarios

BEGIN TRANSACTION
	DELETE FROM dbo.Usuarios
	DBCC CHECKIDENT ('dbo.Usuarios', RESEED, 0)
COMMIT

-- SELECT * FROM dbo.Usuarios


-- *************************************************************

-- Estacionamientos
-- ------------------

-- SELECT * FROM dbo.Estacionamientos

BEGIN TRANSACTION
	DELETE FROM dbo.Estacionamientos
	DBCC CHECKIDENT ('dbo.Estacionamientos', RESEED, 0)
COMMIT

-- SELECT * FROM dbo.Estacionamientos

-- *************************************************************

-- Ubicaciones
-- ------------

-- SELECT * FROM dbo.Ubicaciones

BEGIN TRANSACTION
	DELETE FROM dbo.Ubicaciones
	DBCC CHECKIDENT ('dbo.Ubicaciones', RESEED, 0)
COMMIT

-- SELECT * FROM dbo.Ubicaciones
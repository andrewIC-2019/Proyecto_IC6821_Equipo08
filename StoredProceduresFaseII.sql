-- Stored Procedures Fase II --

USE parqueos

-- --------------------------
--  Operador Estacionamiento
-- --------------------------

-- Para ver el detalle de su estacionamiento, usar:

--		EXEC dbo.sp_estacionamientoinfo [idDelEstacionamientoAsociado]


-- ----------------------------------------
--  Crea los espacios del estacionamiento
--  - estacionamientoId
--  - tipo de espacios
--  - cantidad de ese espacio
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_crearEspacios
GO

CREATE PROCEDURE sp_crearEspacios
	@estacionamiento int,
	@tipo nvarchar(20),
	@cantidad int
AS
	DECLARE @i INT
	SET @i = 1
	WHILE @i <= @cantidad
	BEGIN
		INSERT INTO dbo.Espacios_Estacionamientos (estacionamientoId, tipo) VALUES
		(@estacionamiento, @tipo)
		SET @i = @i + 1
	END
GO

-- Truncate tabla Espacios_Estacionamientos

--	BEGIN TRANSACTION
--		DELETE FROM dbo.Espacios_Estacionamientos
--		DBCC CHECKIDENT ('dbo.Espacios_Estacionamientos', RESEED, 0)
--	COMMIT


-- EXEC sp_crearEspacios 1, 1, 4



-- ----------------------------------------
--  Verifica que el horario indicado se encuentra dentro de esas franjas
--  - usuario
--  - inicio de la reserva
--  - salida de la reserva
-- ----------------------------------------



DROP PROCEDURE IF EXISTS dbo.sp_verificacionFranjas
GO


CREATE PROCEDURE sp_verificacionFranjas
	@usuario bigint,
	@entrada datetime,
	@salida datetime
AS

	-- Obtiene el dia de la semana de la reservacion
	DECLARE @diaSemanaAnalizando tinyint
	SELECT @diaSemanaAnalizando = DATEPART(WEEKDAY, GETDATE())-1
	IF (@diaSemanaAnalizando = 0) 
	BEGIN 
		SET @diaSemanaAnalizando = 7
	END

	DECLARE @horariosCompatibles INT;

	-- Obtiene los horarios actuales del usuario, en el dia especifico

	WITH Horarios_CTE(diaSemana, horaInicio, horaFinal)
	AS
	(
		SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
		INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
		WHERE usuarioId = @usuario AND hu.deshabilitado = 0 AND diaSemana = @diaSemanaAnalizando
	)

	
	SELECT @horariosCompatibles = COUNT(*) FROM Horarios_CTE WHERE  horaInicio <= CAST(@entrada AS TIME) AND horaFinal >= CAST(@salida AS TIME)

	IF (@horariosCompatibles < 1) BEGIN
		RETURN 0
	END ELSE BEGIN
		RETURN 1
	END
GO

/*
DECLARE @entrada datetime = '2022-06-23 07:30:00'
DECLARE @salida datetime = '2022-06-23 08:30:00'

DECLARE @PRINT INT
EXEC @PRINT = sp_verificacionFranjas 1, @entrada, @salida
SELECT @PRINT
*/

-- ----------------------------------------
--  Verifica que el dia indicado sea laboral para la jefatura
--  - jefe
--  - dia reserva
-- ----------------------------------------



DROP PROCEDURE IF EXISTS dbo.sp_verificacionDiaLaboral
GO


CREATE PROCEDURE dbo.sp_verificacionDiaLaboral
	@jefe bigint,
	@dia nvarchar(40)
AS

	-- Obtiene el dia de la semana de la reservacion
	DECLARE @diaSemanaAnalizando tinyint
	SELECT @diaSemanaAnalizando = diaId - 1 FROM dbo.Dias WHERE dia = @dia
	IF (@diaSemanaAnalizando = 0) 
	BEGIN 
		SET @diaSemanaAnalizando = 7
	END

	DECLARE @horariosCompatibles INT;

	-- Obtiene los horarios actuales del usuario, en el dia especifico

	WITH Horarios_CTE(diaSemana, horaInicio, horaFinal)
	AS
	(
		SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
		INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
		WHERE usuarioId = @jefe AND hu.deshabilitado = 0 AND diaSemana = @diaSemanaAnalizando
	)

	
	SELECT @horariosCompatibles = COUNT(*) FROM Horarios_CTE

	IF (@horariosCompatibles < 1) BEGIN
		RETURN 0
	END ELSE BEGIN
		RETURN 1
	END
GO


DECLARE @impreso int
EXEC @impreso = dbo.sp_verificacionDiaLaboral 3, 'Lunes'
SELECT @impreso



-- ----------------------------------------
--  Obtiene todos los dias de la semana
--  Similar al sp que se trae los departamentos
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_diasSemana
GO

CREATE PROCEDURE dbo.sp_diasSemana
AS
	SELECT diaId, dia FROM Dias FOR JSON AUTO
	RETURN 1
GO

/*
-- Ejemplo de ejecucion: 
 EXEC dbo.sp_diasSemana
*/


-- ----------------------------------------
--  Obtiene los parqueos y los espacios designados
--  a un tipo especifico de espacio
--  (no contempla reservas)
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_getDisponiblesTipo
GO

CREATE PROCEDURE dbo.sp_getDisponiblesTipo
	@tipo nvarchar(60)
AS
	IF (@tipo = 'Particular') BEGIN
		SELECT estacionamientoId, cantEspacios FROM dbo.Estacionamientos WHERE cantEspacios>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo='Oficial') BEGIN
		SELECT estacionamientoId, cantEspaciosOficiales FROM dbo.Estacionamientos WHERE cantEspaciosOficiales>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo = 'Visitante') BEGIN
		SELECT estacionamientoId, cantEspaciosVisitantes FROM dbo.Estacionamientos WHERE cantEspaciosVisitantes>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo = 'Jefatura') BEGIN
		SELECT estacionamientoId, cantEspaciosJefaturas FROM dbo.Estacionamientos WHERE cantEspaciosJefaturas>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo = 'Discapacitado') BEGIN
		SELECT estacionamientoId, cantEspaciosEspeciales FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
GO

/*
-- Ejemplo de Ejecucion
EXEC dbo.sp_getDisponiblesTipo 'Discapacitado'
*/


-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
--		II Parte
-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


-- ----------------------------------------
--  Simula el paso del tiempo
--  Recibe una fecha que se utilizara como si
--	fuese la hora actual; toda reservacion
--  cuya hora y franja horaria sea menor a la
--  pivot, se pasara al estado deshabilitado
-- ----------------------------------------


DROP PROCEDURE IF EXISTS dbo.sp_actualizarSalidaReservaciones
GO

CREATE PROCEDURE dbo.sp_actualizarSalidaReservaciones
	@horaPivot datetime
AS
	UPDATE dbo.Reservaciones SET deshabilitado = 1 WHERE horaFinal < @horaPivot
	RETURN 1
GO

/*
-- Ejemplo de Ejecucion
EXEC dbo.sp_actualizarSalidaReservaciones '2016-06-13 16:35:00'
*/


-- ----------------------------------------
--  Reporte del Porcentaje de Ocupacion Por Tipo Espacio
-- Recibe
--	- El id del parqueo
-- Si x tipo de espacios no estan contemplados en ese parqueo, me retorna un  
-- -1
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_ocupacionXTipo
GO

CREATE PROCEDURE dbo.sp_ocupacionXTipo
	@estacionamiento INT
AS

	-- obtiene los disponibles de cada tipo en ese parqueo

	DECLARE @totalParticulares INT
	DECLARE @totalEspeciales INT
	DECLARE @totalJefaturas INT
	DECLARE @totalVisitantes INT
	DECLARE @totalOficiales INT
	SELECT @totalParticulares = cantEspacios, @totalEspeciales = cantEspaciosEspeciales, @totalJefaturas = cantEspaciosJefaturas,
	       @totalVisitantes = cantEspaciosVisitantes, @totalOficiales = cantEspaciosOficiales
	FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamiento

	-- obtiene los ocupados ya en reservas

	DECLARE @ocupadosParticulares INT
	DECLARE @ocupadosEspeciales INT
	DECLARE @ocupadosJefaturas INT
	DECLARE @ocupadosVisitantes INT
	DECLARE @ocupadosOficiales INT

	-- Obtiene los particulares
	SELECT @ocupadosParticulares = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 1 AND deshabilitado = 0


	-- Obtiene los Especiales/Discapacitados
	SELECT @ocupadosEspeciales = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 5 AND deshabilitado = 0


	-- Obtiene los de Jefaturas
	SELECT @ocupadosJefaturas = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 4 AND deshabilitado = 0

	-- Obtiene los de Visitantes
	SELECT @ocupadosVisitantes = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 3 AND deshabilitado = 0

	-- Obtiene los Oficiales
	SELECT @ocupadosOficiales = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 2 AND deshabilitado = 0


	-- Calcula el porcentaje de ocupacion: (ocupados/totales)*100

	DECLARE @relacionParticulares INT
	DECLARE @relacionEspeciales INT
	DECLARE @relacionJefaturas INT
	DECLARE @relacionVisitantes INT
	DECLARE @relacionOficiales INT

	-- En cada uno hay bloques begin-try, quiere decir que no hay espacios de x tipo (o sea, su cantidad es 0)
	-- entonces dara un  error de division por cero. Se asigna un -1 y eso indicaria que no esta disponible

	BEGIN TRY
		SELECT @relacionParticulares = (CAST(@ocupadosParticulares AS FLOAT)/CAST(@totalParticulares AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionParticulares = -1;
	END CATCH;


	BEGIN TRY
		SELECT @relacionEspeciales = (CAST(@ocupadosEspeciales AS FLOAT)/CAST(@totalEspeciales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionEspeciales = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionJefaturas = (CAST(@ocupadosJefaturas AS FLOAT)/CAST(@totalJefaturas AS FLOAT))*100
	END TRY
	BEGIN CATCH
		SELECT @relacionJefaturas = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionVisitantes = (CAST(@ocupadosVisitantes AS FLOAT)/CAST(@totalVisitantes AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionVisitantes = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionOficiales = (CAST(@ocupadosOficiales AS FLOAT)/CAST(@totalOficiales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionOficiales = -1;
	END CATCH;

	SELECT @relacionParticulares AS Particulares, @relacionEspeciales AS Especiales, @relacionJefaturas AS Jefaturas, @relacionVisitantes AS Visitantes, @relacionOficiales AS Oficiales FOR JSON PATH
	RETURN 1
GO

/*
-- Ejemplo de Ejecucion
SELECT * FROM dbo.Estacionamientos
SELECT * FROM dbo.Tipos_Espacios
EXEC dbo.sp_ocupacionXTipo 1
*/



-- ----------------------------------------
--  Reporte del Porcentaje de Ocupacion de un parqueo Por Departamento
-- Recibe
--	- El id del parqueo
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_ocupacionXDepartamento
GO

CREATE PROCEDURE dbo.sp_ocupacionXDepartamento
	@estacionamiento INT
AS
	DECLARE @totalReservasEstacionamiento INT
	SELECT @totalReservasEstacionamiento = count(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND deshabilitado = 0

	SELECT codigoDivision, descripcion, CONVERT(numeric(3,0), (CAST(count(reservacionId) AS FLOAT)/CAST(@totalReservasEstacionamiento AS FLOAT))*100)
	AS Espacios FROM dbo.Reservaciones r
	INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE estacionamientoId = @estacionamiento AND r.deshabilitado = 0
	GROUP BY codigoDivision, descripcion FOR JSON PATH

	RETURN 1
GO

/*
-- Ejemplo de Ejecucion
EXEC dbo.sp_ocupacionXDepartamento 1
*/



-- ----------------------------------------
--  Reporte del Porcentaje de Ocupacion por Departamento, en todos los parqueos
-- Recibe
--	- El id del departamento
--	FUNCIONA PARA ADMIN Y JEFATURA
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_ocupacionTotalXDepartamento
GO

CREATE PROCEDURE dbo.sp_ocupacionTotalXDepartamento
	@departamento INT
AS

	SELECT t1.estacionamiento, CONVERT(numeric(3,0), (CAST(ocupacion AS FLOAT)/CAST(total AS FLOAT))*100) AS ocupacion
	FROM 
		(SELECT e.nombre AS estacionamiento, COUNT(r.reservacionId) AS ocupacion FROM dbo.Reservaciones r
		INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
		INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
		WHERE u.division = @departamento
		GROUP BY e.nombre) t1
	INNER JOIN
		(SELECT e.nombre AS estacionamiento, COUNT(reservacionId) AS total FROM dbo.Reservaciones r 
		INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
		GROUP BY e.nombre) t2
	ON t1.estacionamiento = t2.estacionamiento
	FOR JSON PATH

	RETURN 1
GO

/*
-- Ejemplo de Ejecucion
EXEC dbo.sp_ocupacionTotalXDepartamento 1
*/


-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
--		III Parte
-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


-- ----------------------------------------
-- El perfil de funcionario estándar puede visualizar las reservaciones que tiene en un rango de fechas
-- brindado detalle de los estacionamientos y franjas horarias ordenado cronológicamente.
-- Brinda las que esten activas en ese intervalo de tiempo
-- ----------------------------------------


DROP PROCEDURE IF EXISTS dbo.verMisReservas
GO

CREATE PROCEDURE dbo.verMisReservas
	@usuario BIGINT,
	@limiteA DATETIME,
	@limiteB DATETIME
AS
	SELECT r.reservacionId, r.horaInicio, r.horaFinal, r.tipoEspacioId, e.nombre, u.direccionExacta, e.telefono FROM dbo.Reservaciones r
	INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
	INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId
	WHERE r.usuarioId = @usuario AND r.horaInicio<=@limiteB AND r.horaFinal>=@limiteA   AND r.deshabilitado = 0 
	ORDER BY r.horaInicio, r.horaFinal FOR JSON PATH

	RETURN 1
GO

/*
-- Ejemplo de Ejecucion
EXEC dbo.verMisReservas 1, '2022-06-18 21:59:59', '2022-06-18 23:00:00'
*/


-- ----------------------------------------
-- El perfil de operador del estacionamiento puede consultar todo el detalle del estacionamiento que tiene a cargo.
-- Ve la info mediante:
--		EXEC dbo.sp_estacionamientoinfo estacionamientoId
--		Para ver las reservas activas, se utiliza:
-- ----------------------------------------


DROP PROCEDURE IF EXISTS dbo.verReservasEstacionamiento
GO

CREATE PROCEDURE dbo.verReservasEstacionamiento
	@estacionamiento BIGINT
AS
	SELECT r.reservacionId, r.horaInicio, r.horaFinal, r.tipoEspacioId, CONCAT(u.nombre, ' ', u.apellido1, ' ', u.apellido2) AS Usuario FROM dbo.Reservaciones r
	INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND r.deshabilitado = 0
	ORDER BY r.horaInicio, r.horaFinal FOR JSON PATH

	RETURN 1
GO

/*
Ejemplo de ejecucion
EXEC dbo.verReservasEstacionamiento 1
*/


-- ---------------------------------------
-- FIRMA
-- Recuerde que carros oficiales y visitantes salen de los estacionamientos por medio del operador de este,
-- sea un estacionamiento propio o subcontratado.
-- ---------------------------------------

-- Oficiales Entrada
DROP PROCEDURE IF EXISTS dbo.sp_RegistrarOficial
GO

CREATE PROCEDURE dbo.sp_RegistrarOficial
	@estacionamientoId INT,
	@placa NVARCHAR(20),
	@conductor NVARCHAR(120),
	@entrada DATETIME
AS
	-- Retornaria un JSON con la info
GO

-- Oficiales Salida
DROP PROCEDURE IF EXISTS dbo.sp_SalidaOficial
GO

CREATE PROCEDURE dbo.sp_SalidaOficial
	@estacionamientoId INT,
	@placa NVARCHAR(20),
	@conductor NVARCHAR(120),
	@salida DATETIME
AS
	-- Return 1
GO


-- -----------------------------------------
--			IV PARTE
-- -----------------------------------------

-- ----------------------------------------
--  Reporte del Porcentaje de Ocupacion Por Tipo Espacio
--	JEFATURA
-- Recibe
--	- El id del parqueo
--	- El departamento al cual pertenece la jefatura
-- Si x tipo de espacios no estan contemplados en ese parqueo, me retorna un  
-- -1
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_ocupacionXTipoJefe
GO

CREATE PROCEDURE dbo.sp_ocupacionXTipoJefe
	@estacionamiento INT,
	@departamento INT

AS

	-- obtiene los disponibles de cada tipo en ese parqueo

	DECLARE @totalParticulares INT
	DECLARE @totalEspeciales INT
	DECLARE @totalJefaturas INT
	DECLARE @totalVisitantes INT
	DECLARE @totalOficiales INT
	SELECT @totalParticulares = cantEspacios, @totalEspeciales = cantEspaciosEspeciales, @totalJefaturas = cantEspaciosJefaturas,
	       @totalVisitantes = cantEspaciosVisitantes, @totalOficiales = cantEspaciosOficiales
	FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamiento

	-- obtiene los ocupados ya en reservas

	DECLARE @ocupadosParticulares INT
	DECLARE @ocupadosEspeciales INT
	DECLARE @ocupadosJefaturas INT
	DECLARE @ocupadosVisitantes INT
	DECLARE @ocupadosOficiales INT

	-- Obtiene los particulares
	SELECT @ocupadosParticulares = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND tipoEspacioId = 1 AND r.deshabilitado = 0 AND u.division = @departamento


	-- Obtiene los Especiales/Discapacitados
	SELECT @ocupadosEspeciales = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND tipoEspacioId = 5 AND r.deshabilitado = 0 AND u.division = @departamento


	-- Obtiene los de Jefaturas
	SELECT @ocupadosJefaturas = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND tipoEspacioId = 4 AND r.deshabilitado = 0 AND u.division = @departamento

	-- Obtiene los de Visitantes
	SELECT @ocupadosVisitantes = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND r.tipoEspacioId = 3 AND r.deshabilitado = 0 AND u.division = @departamento

	-- Obtiene los Oficiales
	SELECT @ocupadosOficiales = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND r.tipoEspacioId = 2 AND r.deshabilitado = 0 AND u.division = @departamento


	-- Calcula el porcentaje de ocupacion: (ocupados/totales)*100

	DECLARE @relacionParticulares INT
	DECLARE @relacionEspeciales INT
	DECLARE @relacionJefaturas INT
	DECLARE @relacionVisitantes INT
	DECLARE @relacionOficiales INT

	-- En cada uno hay bloques begin-try, quiere decir que no hay espacios de x tipo (o sea, su cantidad es 0)
	-- entonces dara un  error de division por cero. Se asigna un -1 y eso indicaria que no esta disponible

	BEGIN TRY
		SELECT @relacionParticulares = (CAST(@ocupadosParticulares AS FLOAT)/CAST(@totalParticulares AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionParticulares = -1;
	END CATCH;


	BEGIN TRY
		SELECT @relacionEspeciales = (CAST(@ocupadosEspeciales AS FLOAT)/CAST(@totalEspeciales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionEspeciales = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionJefaturas = (CAST(@ocupadosJefaturas AS FLOAT)/CAST(@totalJefaturas AS FLOAT))*100
	END TRY
	BEGIN CATCH
		SELECT @relacionJefaturas = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionVisitantes = (CAST(@ocupadosVisitantes AS FLOAT)/CAST(@totalVisitantes AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionVisitantes = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionOficiales = (CAST(@ocupadosOficiales AS FLOAT)/CAST(@totalOficiales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionOficiales = -1;
	END CATCH;

	SELECT @relacionParticulares AS Particulares, @relacionEspeciales AS Especiales, @relacionJefaturas AS Jefaturas, @relacionVisitantes AS Visitantes, @relacionOficiales AS Oficiales FOR JSON PATH
	RETURN 1
GO


-- ----------------------------------------
--  Reporte del Porcentaje de Ocupacion de un parqueo Por Departamento
-- Recibe
--	- El id del parqueo
-- ----------------------------------------

DROP PROCEDURE IF EXISTS dbo.sp_ocupacionXDepartamentoJefe
GO

CREATE PROCEDURE dbo.sp_ocupacionXDepartamentoJefe
	@estacionamiento INT,
	@departamento INT
AS
	DECLARE @totalReservasEstacionamiento INT
	SELECT @totalReservasEstacionamiento = count(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND deshabilitado = 0

	SELECT codigoDivision, descripcion, CONVERT(numeric(3,0), (CAST(count(reservacionId) AS FLOAT)/CAST(@totalReservasEstacionamiento AS FLOAT))*100)
	AS Espacios FROM dbo.Reservaciones r
	INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE estacionamientoId = @estacionamiento AND r.deshabilitado = 0 AND u.division = @departamento
	GROUP BY codigoDivision, descripcion FOR JSON PATH

	RETURN 1
GO

/*
-- Ejemplo de Ejecucion
EXEC dbo.sp_ocupacionXDepartamentoJefe 1, 1
*/



/*
-- Ejemplo de Ejecucion
SELECT * FROM dbo.Estacionamientos
SELECT * FROM dbo.Tipos_Espacios
EXEC dbo.sp_ocupacionXTipoJefe 1, 1
*/


-- ----------------------------------------
--  dbo.sp_estacionamientosUsuario
-- Recibe
--	- El objetivo que tiene el usuario, esto es reserva:
--		1	Propia
--		2	Visitante
--		3	Oficial
--	- El usuario que esta haciendo la gestion
-- ----------------------------------------


DROP PROCEDURE IF EXISTS dbo.sp_estacionamientosUsuario
GO

CREATE PROCEDURE dbo.sp_estacionamientosUsuario
	@objetivo INT,
	@usuario BIGINT
AS
	
	DECLARE @esAdministrador BIT, @esJefatura BIT, @esDiscapacitado BIT, @esOperador BIT
	SELECT @esAdministrador = esAdministrador, @esJefatura = esJefatura, @esDiscapacitado = esDiscapacitado, @esOperador = esOperador FROM dbo.Usuarios WHERE usuarioId = @usuario

	DECLARE @esFuncionario BIT = 1

	IF @esAdministrador = 1 OR @esJefatura = 1 OR @esOperador = 1 BEGIN
		SET @esFuncionario = 0
	END
	
	DECLARE @disponibles INT

	-- Usuario que esta reservando es un jefe
	IF @esJefatura = 1 BEGIN
		IF @objetivo = 1 BEGIN		-- jefatura reserva para si mismo
			IF @esDiscapacitado = 1 BEGIN			-- jefe + discapacidad
				SELECT estacionamientoId, nombre, telefono, 'Discapacitado' AS tipo, cantEspaciosEspeciales AS cantidad, cantEspecialesDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 AND deshabilitado = 0 FOR JSON PATH
			END ELSE BEGIN						-- solo en los de jefatura
				SELECT estacionamientoId, nombre, telefono, 'Jefatura' AS tipo, cantEspaciosJefaturas AS cantidad, cantJefaturasDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosJefaturas>0 AND deshabilitado = 0 FOR JSON PATH
			END
		END
		IF @objetivo = 2 BEGIN		-- jefatura reserva para un visitante
			SELECT estacionamientoId, nombre, telefono, 'Visitantes' AS tipo, cantEspaciosVisitantes AS cantidad, cantVisitantesDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosVisitantes>0 AND tipoEstacionamiento = 2 AND deshabilitado = 0 FOR JSON PATH
		END
	END

	-- Usuario que esta reservando es un administrador
	IF @esAdministrador = 1 BEGIN
		IF @objetivo = 1 BEGIN		-- administrador va a reservar para si mismo
			IF @esDiscapacitado = 1 BEGIN		-- admin + discapacidad
				SELECT estacionamientoId, nombre, telefono, 'Discapacitado' AS tipo, cantEspaciosEspeciales AS cantidad, cantEspecialesDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 AND deshabilitado = 0 FOR JSON PATH
			END ELSE BEGIN					-- solo en los particulares
				SELECT estacionamientoId, nombre, telefono, 'Particular' AS tipo, cantEspacios AS cantidad, cantDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspacios>0 AND deshabilitado = 0 FOR JSON PATH
			END
		END
		IF @objetivo = 2 BEGIN		-- administrador reserva para una visita
			SELECT estacionamientoId, nombre, telefono, 'Visitantes' AS tipo, cantEspaciosVisitantes AS cantidad, cantVisitantesDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspaciosVisitantes>0 AND tipoEstacionamiento = 2 AND deshabilitado = 0 FOR JSON PATH
		END
	END

	-- Usuario que esta reservando es un operador
	IF @esOperador = 1 BEGIN
		IF @objetivo = 2 BEGIN		-- operador va a registrar la entrada de un carro oficial
			SELECT estacionamientoId, nombre, telefono, 'Oficial' AS tipo, cantEspaciosOficiales AS cantidad, cantOficialesDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspaciosOficiales>0 AND deshabilitado = 0 FOR JSON PATH
		END
	END

	-- Usuario que esta reservando es un funcionario
	IF @esFuncionario = 1 BEGIN
		IF @objetivo = 1 BEGIN		-- funcionario va a reservar para si mismo
			IF @esDiscapacitado = 1 BEGIN		-- funcionario + discapacidad
				SELECT estacionamientoId, nombre, telefono, 'Discapacitado' AS tipo, cantEspaciosEspeciales AS cantidad, cantEspecialesDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 AND deshabilitado = 0 FOR JSON PATH
			END ELSE BEGIN					-- solo en los particulares
				SELECT estacionamientoId, nombre, telefono, 'Particular' AS tipo, cantEspacios AS cantidad, cantDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspacios>0 AND deshabilitado = 0 FOR JSON PATH
			END
		END
	END
GO


dbo.sp_estacionamientosUsuario 1, 1

/*
Objetivo (2nd parametro)
1	Propia
2	Visitante
3	Oficial


Tipo Espacios:
1	Particular
2	Oficial
3	Visitante
4	Jefatura
5	Discapacitado

CREATE TABLE #tmpEstacionamientosUsuario
(
	estacionamientoId INT,
	tipo NVARCHAR(60),
	cantEspacios INT
)


*/

/*
-- Al insertar un estacionamiento deberia hacer esto o bien mandar a actualizar

UPDATE dbo.Estacionamientos SET cantDisponibles = cantEspacios
UPDATE dbo.Estacionamientos SET cantEspecialesDisponibles = cantEspaciosEspeciales
UPDATE dbo.Estacionamientos SET cantJefaturasDisponibles = cantEspaciosJefaturas
UPDATE dbo.Estacionamientos SET cantVisitantesDisponibles = cantEspaciosVisitantes
UPDATE dbo.Estacionamientos SET cantOficialesDisponibles = cantEspaciosOficiales
*/

/*
	dbo.sp_calcularEspaciosDisponibles

	Segun reservas aun habilitadas
*/

DROP PROCEDURE IF EXISTS dbo.sp_calcularEspaciosDisponibles
GO

CREATE PROCEDURE dbo.sp_calcularEspaciosDisponibles
	@estacionamientoId INT,
	@tipoEspacioId TINYINT
AS
	DECLARE @totales INT, @ocupados INT

	IF @tipoEspacioId = 1 BEGIN
		SELECT @totales = cantEspacios FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 2 BEGIN
		SELECT @totales = cantEspaciosOficiales FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 3 BEGIN
		SELECT @totales = cantEspaciosVisitantes FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 4 BEGIN
		SELECT @totales = cantEspaciosJefaturas FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 5 BEGIN
		SELECT @totales = cantEspaciosEspeciales FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END

	SELECT @ocupados = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamientoId AND tipoEspacioId = @tipoEspacioId AND deshabilitado = 0

	RETURN @totales - @ocupados
GO

EXEC dbo.sp_calcularEspaciosDisponibles 2, 2


/*
	dbo.sp_actualizarEspaciosDisponibles
	
	Recibe:
		- estacionamientoId

	Actualiza los espacios de un parqueo, esto consultando las reservas asociadas a ester que aun se encuentren
	habilitadas
*/

DROP PROCEDURE IF EXISTS dbo.sp_actualizarEspaciosDisponibles
GO

CREATE PROCEDURE dbo.sp_actualizarEspaciosDisponibles
	@estacionamientoId INT
AS
	DECLARE @particular INT, @oficiales INT, @visitantes INT, @jefaturas INT, @especiales INT

	EXEC @particular = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 1
	EXEC @oficiales = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 2
	EXEC @visitantes = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 3
	EXEC @jefaturas = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 4
	EXEC @especiales = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 5

	UPDATE dbo.Estacionamientos SET cantDisponibles = @particular, cantOficialesDisponibles = @oficiales,
	cantVisitantesDisponibles = @visitantes, cantJefaturasDisponibles = @jefaturas, cantEspecialesDisponibles = @especiales
	WHERE estacionamientoId = @estacionamientoId

GO

EXEC dbo.sp_actualizarEspaciosDisponibles 4









-- =================================================
--			V Parte
-- =================================================


-- Recuerde que carros oficiales y visitantes salen de los estacionamientos por medio del operador de este,
-- sea un estacionamiento propio o subcontratado.

-- ---------------------------------------
--		dbo.sp_RegistrarOficial
--	Registra la entrada de un vehiculo Oficial
-- ---------------------------------------

-- Oficiales Entrada
DROP PROCEDURE IF EXISTS dbo.sp_RegistrarOficial
GO

CREATE PROCEDURE dbo.sp_RegistrarOficial
	@usuarioId INT,
	@estacionamientoId INT,
	@tipoEspacioId INT,
	@entrada DATETIME,
	@placa NVARCHAR(20),
	@conductor NVARCHAR(120),
	@sede NVARCHAR(60),
	@modelo NVARCHAR(60)
AS
	
	INSERT INTO dbo.Reservaciones(usuarioId, estacionamientoId, tipoEspacioId, horaInicio, horaFinal, [timestamp]) VALUES
	(@usuarioId, @estacionamientoId, @tipoEspacioId, @entrada, DATEADD(MINUTE, -1, CAST(DATEFROMPARTS(DATEPART(YEAR, @entrada), DATEPART(MONTH, @entrada), DATEPART(DAY, @entrada)+1) AS DATETIME)),GETDATE())
	
	DECLARE @laReserva BIGINT
	SELECT @laReserva = MAX(reservacionId) FROM dbo.Reservaciones

	INSERT INTO dbo.VisitasOficiales(conductor, sede, placa, modelo, reservacion) VALUES (@conductor, @sede, @placa, @modelo, @laReserva)
	RETURN 1
GO

/*
Ejemplo de ejecucion
EXEC dbo.sp_RegistrarOficial 3, 2, 2, '2022-06-19 07:30', '265-301', 'Rolando Figueroa', 'CAL', 'Buseta'
*/

-- ---------------------------------------
--		dbo.sp_SalidaOficial
--	Registra la salida de un vehiculo Oficial
-- ---------------------------------------

-- Oficiales Salida
DROP PROCEDURE IF EXISTS dbo.sp_SalidaOficial
GO

CREATE PROCEDURE dbo.sp_SalidaOficial
	@placa NVARCHAR(20),
	@conductor NVARCHAR(120),
	@salida DATETIME
AS
	
	DECLARE @laReserva INT
	SELECT @laReserva = reservacion FROM dbo.VisitasOficiales vo
	INNER JOIN dbo.Reservaciones r ON  vo.reservacion = r.reservacionId
	WHERE vo.conductor = @conductor AND vo.placa = @placa AND r.deshabilitado = 0
	
	UPDATE dbo.Reservaciones SET horaFinal = @salida, deshabilitado = 1 WHERE reservacionId = @laReserva

	RETURN 1
GO

/*
Ejemplo de ejecucion
EXEC dbo.sp_SalidaOficial '265-301', 'Rolando Figueroa', '2022-06-19 16:00'
*/




-- ---------------------------------------
--		dbo.sp_RegistrarVisita
--	Hace la reserva de una visita
-- ---------------------------------------

-- Visitas Entrada
DROP PROCEDURE IF EXISTS dbo.sp_RegistrarVisita
GO

CREATE PROCEDURE dbo.sp_RegistrarVisita
	@usuarioId INT,
	@estacionamientoId INT,
	@tipoEspacioId INT,
	@entrada DATETIME,
	@visitante NVARCHAR(120),
	@identificacion NVARCHAR(60),
	@vehiculo NVARCHAR(60),
	@motivo NVARCHAR(120),
	@destino NVARCHAR(120)
AS
	
	INSERT INTO dbo.Reservaciones(usuarioId, estacionamientoId, tipoEspacioId, horaInicio, horaFinal, [timestamp]) VALUES
	(@usuarioId, @estacionamientoId, @tipoEspacioId, @entrada, DATEADD(MINUTE, -1, CAST(DATEFROMPARTS(DATEPART(YEAR, @entrada), DATEPART(MONTH, @entrada), DATEPART(DAY, @entrada)+1) AS DATETIME)),GETDATE())
	
	DECLARE @laReserva BIGINT
	SELECT @laReserva = MAX(reservacionId) FROM dbo.Reservaciones

	INSERT INTO dbo.Visitas(visitante, identificacion, vehiculo, motivo, destino, reservacion) VALUES
	(@visitante, @identificacion, @vehiculo, @motivo, @destino, @laReserva)

	RETURN 1
GO

/*
Ejemplo de ejecucion
EXEC dbo.sp_RegistrarVisita 1, 1, 3, '2022-06-20 13:00', 'Presidente de la Cooperativa TEC', '000000001', 'CAR-001','Reunion Direccion', 'Casa Verde'
*/

-- ---------------------------------------
--		dbo.sp_SalidaVisita
--	Registra la salida de un visitante
-- ---------------------------------------

-- Visitas Salida
DROP PROCEDURE IF EXISTS dbo.sp_SalidaVisita
GO

CREATE PROCEDURE dbo.sp_SalidaVisita
	@vehiculo NVARCHAR(60),
	@identificacion NVARCHAR(60),
	@salida DATETIME
AS
	
	DECLARE @laReserva INT
	SELECT @laReserva = reservacion FROM dbo.Visitas v
	INNER JOIN dbo.Reservaciones r ON  v.reservacion = r.reservacionId
	WHERE v.identificacion = @identificacion AND v.vehiculo = @vehiculo AND r.deshabilitado = 0
	
	UPDATE dbo.Reservaciones SET horaFinal = @salida, deshabilitado = 1 WHERE reservacionId = @laReserva

	RETURN 1
GO

/*
Ejemplo de ejecucion
EXEC dbo.sp_SalidaVisita 'CAR-001', '000000001', '2022-06-20 15:00'
*/




-- ---------------------------------------
--		dbo.sp_ReservarFuncionario
--	Hace la reserva de un funcionario
-- ---------------------------------------

-- Visitas Entrada
DROP PROCEDURE IF EXISTS dbo.sp_ReservarFuncionario
GO

CREATE PROCEDURE dbo.sp_ReservarFuncionario
	@usuarioId INT,
	@estacionamientoId INT,
	@tipoEspacioId INT,
	@entrada DATETIME,
	@salida DATETIME
AS
	DECLARE @horasValidas BIT

	EXEC @horasValidas = sp_verificacionFranjas @usuarioId, @entrada, @salida
	
	IF @horasValidas = 1 BEGIN
		INSERT INTO dbo.Reservaciones(usuarioId, estacionamientoId, tipoEspacioId, horaInicio, horaFinal, [timestamp]) VALUES
		(@usuarioId, @estacionamientoId, @tipoEspacioId, @entrada, @salida, GETDATE())
	
		DECLARE @laReserva BIGINT
		SELECT @laReserva = MAX(reservacionId) FROM dbo.Reservaciones

		RETURN @laReserva
	END ELSE BEGIN
		RETURN 0
	END
	
GO



/*
Ejemplo de ejecucion
DECLARE @print INT
EXEC @print = dbo.sp_ReservarFuncionario 1, 1, 1, '2022-06-23 13:00', '2022-06-23 16:00'
SELECT @print
*/




-- --------------


/*
-- Obtiene el porcentaje por departamento, respecto a todos los espacios
SELECT e.nombre AS estacionamiento, CONVERT(numeric(3,0), (CAST(COUNT(r.reservacionId) AS FLOAT)/CAST(cantEspacios+cantEspaciosEspeciales+cantEspaciosJefaturas+cantEspaciosVisitantes+cantEspaciosOficiales AS FLOAT))*100)
AS ocupacion FROM dbo.Reservaciones r
INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
WHERE u.division = 1
GROUP BY e.nombre, cantEspacios,cantEspaciosEspeciales,cantEspaciosJefaturas,cantEspaciosVisitantes,cantEspaciosOficiales


-- Ocupacion (en numeros, no %) por departamento
SELECT e.nombre AS estacionamiento, count(r.reservacionId) AS ocupacion FROM dbo.Reservaciones r
INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
WHERE u.division = 1
GROUP BY e.nombre
*/



/*
-- Truncate, ejemplo de registro de reservas

TRUNCATE TABLE dbo.Reservaciones
GO

INSERT INTO dbo.Reservaciones(usuarioId, estacionamientoId, tipoEspacioId, horaInicio, horaFinal, [timestamp]) VALUES (2, 1, 1,'2022-06-18 08:00', '2022-06-18 22:00', DATEADD(HOUR, -12, GETDATE()))
INSERT INTO dbo.Reservaciones(usuarioId, estacionamientoId, tipoEspacioId, horaInicio, horaFinal, [timestamp]) VALUES (3, 1, 2,'2022-06-18 08:00', '2022-06-18 22:00', DATEADD(HOUR, -12, GETDATE()))

SELECT * FROM dbo.Reservaciones

*/

/*

	-- Realiza los calculos
	DECLARE @relacionParticulares INT = (CAST(@ocupadosParticulares AS FLOAT)/CAST(@totalParticulares AS FLOAT))*100
	DECLARE @relacionEspeciales INT = (CAST(@ocupadosEspeciales AS FLOAT)/CAST(@totalEspeciales AS FLOAT))*100
	DECLARE @relacionJefaturas INT = (CAST(@ocupadosJefaturas AS FLOAT)/CAST(@totalJefaturas AS FLOAT))*100
	DECLARE @relacionVisitantes INT = (CAST(@ocupadosVisitantes AS FLOAT)/CAST(@totalVisitantes AS FLOAT))*100
	DECLARE @relacionOficiales INT = (CAST(@ocupadosOficiales AS FLOAT)/CAST(@totalOficiales AS FLOAT))*100


	DECLARE @relacionParticulares INT = (3.0/9.0)*100
	DECLARE @relacionEspeciales INT = (1.0/1.0)*100
	DECLARE @relacionJefaturas INT = (12.0/14.0)*100
	DECLARE @relacionVisitantes INT = (2.0/4.0)*100
	DECLARE @relacionOficiales INT = (0.0/-1.0)*100

	DECLARE @relacionParticulares INT
	BEGIN TRY
		SELECT @relacionParticulares = (2.0/0.0)*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionParticulares = -1;
	END CATCH;

	SELECT @relacionParticulares


	SELECT @relacionParticulares AS Particulares, @relacionEspeciales AS Especiales, @relacionJefaturas AS Jefaturas, @relacionVisitantes AS Visitantes, @relacionOficiales AS Oficiales FOR JSON PATH

*/


-- Agregar:
-- esJefatura
-- esDiscapacitado
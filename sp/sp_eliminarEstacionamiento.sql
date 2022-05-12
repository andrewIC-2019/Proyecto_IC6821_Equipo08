DROP PROCEDURE IF EXISTS dbo.sp_eliminarEstacionamiento
GO
CREATE PROCEDURE [dbo].[sp_eliminarEstacionamiento]
(
    @identificacion NVARCHAR(60)
)
AS
	IF EXISTS (SELECT estacionamientoId FROM Estacionamientos WITH(NOLOCK)  WHERE identificacion = @identificacion) 
    BEGIN 
        UPDATE Estacionamientos 
        SET deshabilitado = 1
        WHERE identificacion = @identificacion
        RETURN 1
    END
    ELSE
    BEGIN
        RETURN 0
    END
GO

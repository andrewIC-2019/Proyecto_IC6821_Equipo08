DROP PROCEDURE IF EXISTS dbo.sp_eliminarUsuario
GO
CREATE PROCEDURE [dbo].[sp_eliminarUsuario]
(
    @identificacion NVARCHAR(60)
)
AS
	IF EXISTS (SELECT usuarioId FROM Usuarios WITH(NOLOCK)  WHERE identificacion = @identificacion) 
    BEGIN 
        UPDATE Usuarios 
        SET deshabilitado = 1
        WHERE identificacion = @identificacion
        RETURN 1
    END
    ELSE
    BEGIN
        RETURN 0
    END
GO

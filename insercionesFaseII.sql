-- Estos selects inicialmente deberian estar vacios
-- Al hacer las inserciones de abajo si devolverian los datos pertinentes

/*
SELECT * FROM dbo.Permisos_Por_Usuario

SELECT * FROM dbo.Vehiculos_Por_Usuario

SELECT * FROM dbo.Vehiculos

SELECT * FROM dbo.Horarios_Por_Usuario

SELECT * FROM dbo.Horarios_Por_Estacionamiento

SELECT * FROM dbo.Horarios

SELECT * FROM dbo.Usuarios

SELECT * FROM dbo.Estacionamientos

SELECT * FROM dbo.Ubicaciones
*/

-- ------------------------------------------------
-- Inserciones basicas mediante Stored Procedures
-- ------------------------------------------------

-- [] Administrador + Discapacidad

DECLARE @registroAdmin BIGINT
EXEC @registroAdmin = dbo.sp_registrarUsuarioTotalF2 'jsolis.67@itcr.ac.cr', '812547785', 'jsolis.67@email.cr', 'jsolis.67', '74120336', 'Jorge', 'Solis', 'Thames', 'DIR',
'RJST670', NULL, NULL, NULL,
0, 1, 0, 1, 0

-- Insertamos los horarios para este usuario 1
EXEC dbo.sp_registrarHorario 1, 1, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 1, 2, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 1, 3, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 1, 4, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 1, 5, '07:30', '16:30'
-- SABADO no trabaja
-- DOMINGO no trabaja

-- SELECT @registroAdmin

-- ....................................................

-- [] Jefatura IC

DECLARE @registroFuncionario1 BIGINT
EXEC @registroFuncionario1 = dbo.sp_registrarUsuarioTotalF2 'aarias.19@itcr.ac.cr', '818049752', 'aarias.19@email.cr', 'aarias.19', '42361203', 'Andres', 'Arias', 'Siles', 'IC',
'232056', 'GTR232', '2022', 'TRD232',
1, 0, 1, 0, 0

EXEC dbo.sp_registrarHorario 2, 1, '13:00', '19:00'
EXEC dbo.sp_registrarHorario 2, 2, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 2, 3, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 2, 4, '07:30', '12:00'
-- VIERNES no trabaja
-- SABADO no trabaja
-- DOMINGO no trabaja

-- SELECT @registroFuncionario1

-- ....................................................

-- [] Jefatura AE + Discapacidad

DECLARE @registroFuncionario2 BIGINT
EXEC @registroFuncionario2 = dbo.sp_registrarUsuarioTotalF2 'fperez.92@itcr.ac.cr', '741025896', NULL, 'fperez.92', '30258756', 'Fabiola', 'Perez', 'Martinez', 'AE',
'920430', 'FPM192', NULL, NULL,
0, 0, 1, 1, 0

-- LUNES no trabaja
EXEC dbo.sp_registrarHorario 3, 2, '17:00', '21:00'
EXEC dbo.sp_registrarHorario 3, 3, '17:00', '19:00'
EXEC dbo.sp_registrarHorario 3, 4, '13:00', '17:00'
EXEC dbo.sp_registrarHorario 3, 5, '17:00', '19:00'
EXEC dbo.sp_registrarHorario 3, 6, '07:30', '12:00'
-- DOMINGO no trabaja

-- SELECT @registroFuncionario2

-- ....................................................

-- [] Funcionario Comun

DECLARE @registroFuncionario3 BIGINT
EXEC @registroFuncionario3 = dbo.sp_registrarUsuarioTotalF2 'pgamboa.85@itcr.ac.cr', '9410367140', NULL, 'pgamboa.65', '965200031', 'Paola', 'Gamboa', 'Romero', 'AU',
'PGR123', 'RGP321', NULL, NULL,
0, 0, 0, 0, 0

EXEC dbo.sp_registrarHorario 4, 1, '07:30', '12:00'
EXEC dbo.sp_registrarHorario 4, 2, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 4, 3, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 4, 4, '07:30', '16:30'
EXEC dbo.sp_registrarHorario 4, 5, '07:30', '12:00'
-- SABADO no trabaja
-- DOMINGO no trabaja

-- SELECT @registroFuncionario3


-- ....................................................

-- [] Funcionario Comun

DECLARE @registroFuncionario4 BIGINT
EXEC @registroFuncionario4 = dbo.sp_registrarUsuarioTotalF2 'jrodriguez.67@itcr.ac.cr', '852014569', 'jrodriguez.67@mail.ac.cr', 'jrodriguez.67', '14700258', 'Jose', 'Rodriguez', 'Brenes', 'DIR',
'JRB001', NULL, NULL, NULL,
0, 0, 0, 0, 0

EXEC dbo.sp_registrarHorario 5, 1, '07:30', '22:00'
EXEC dbo.sp_registrarHorario 5, 2, '07:30', '22:00'
EXEC dbo.sp_registrarHorario 5, 3, '07:30', '22:00'
EXEC dbo.sp_registrarHorario 5, 4, '07:30', '22:00'
EXEC dbo.sp_registrarHorario 5, 5, '07:30', '22:00'
EXEC dbo.sp_registrarHorario 6, 5, '07:30', '12:00'
-- DOMINGO no trabaja

-- SELECT @registroFuncionario4

-- ....................................................
-- ....................................................


-- [] Estacionamiento Institucional 1
--	   4 Comunes
--     2 Oficiales
--     0 Visitantes
--     6 Jefaturas
--     2 Especiales

EXEC dbo.sp_registrarEstacionamientoTotal 'Parqueo Principal CTLSJ', 'ctlsanjose@itcr.ac.cr', '25500001', '1265001', 'Sobre calle 5, Costado sur del edificio principal', 'Sobre Avenida 7 o 9, tomar calle 5, entrada al costado sur del edificio principal', 'Cuenta con espacios exclusivos para las jefaturas y vehiculos oficiales',
2, 6, 0, 2, 4, 'https://uca3f1a5e5563ff61776d2eeb6dc.previews.dropboxusercontent.com/p/thumb/ABi8Wl2VMd6QwOCnzwHaD-SA5NsGoGUm8i_dM_EHY9HYN0KjHaSoNR8bUgdlfl4p01WxpgT-1DbTMDIYhXcECzevAoDoIws4d3WhOg2g3mybuyZzV44j7sEQRHgle3QLr3P0jrCyd-T-Cbn0YkKlYvQisOBMJXqxm4kAhv8wUonkl9wAx1czJOXpDleq6lG_IyflVGmBA24EYq4eT8CaPY6Cl4bQTArNT0qnFSrhN0JBJi2I0BXEr2sK2FtBYznDMyB68O4Y33gJXG0Hzo6X6mpNMCdbXCZlnG3dgynJcCg-F1cfoL6LDozvtYw5k7-nOksq3SQJ5cKpHYyddMBxs4WePal4_lpUZAQYBzVKj9CBNCUiHr-BWr5gKXuKuX08ZgI/p.jpeg',
'07:00', '22:00', '07:00', '22:00', '07:00', '22:00', '07:00', '22:00', '07:00', '22:00', '07:00', '13:00', NULL, NULL, 1


-- [] Estacionamiento Subcontratado 1
--	   7 Comunes
--     1 Oficiales
--     3 Visitantes
--     3 Jefaturas
--     1 Especiales

EXEC dbo.sp_registrarEstacionamientoTotal 'Parqueo Amon', 'parqueo.amon@email.cr', '22990001', '1900110', 'Diagonal a casa verde', 'Dar la vuelta por el edificio principal, sentido S-N', 'Parqueo cercano al campus con amplia capacidad',
1, 3, 3, 1, 7, 'https://uc905e507265cf72e311859374ed.previews.dropboxusercontent.com/p/thumb/ABhIgcjAJXv8k4siO1HiGTPNXePMIt8QbCiYXVl17E9zpJSLT9osxPUDlcr6gGHTJfx0rvGXQ4P0vfIHIrpoPQ5Y7yCmaBcLDPilYGYBZPgcrxzoUs2CGSStm1kdLwxekiQ7nYOR6fwGW-c0T5wtwRGb8ehEIK7pMohYhJl2qmaX1gPGlefKgnQ_usdMuY4tnAKyNXyE-N12y8y1786sRO1JpxiabYn72hNdqiGK8Jp13JcIEAeePQSliayjYjbj05EtTO88nFVCxaAUelH1xF8fRTGojcVLwoOSl1FBk-KJ0wb3wrwW3ZWfzZjnz7vvgwnEW4DbuLzK9r2LcH1iFV0JrOlSWjIOP57Iw0r67e5k9gXksr1cZS8H6sF4wlg-V2s/p.jpeg',
'06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '07:00', '17:00', NULL, NULL, 0


-- SPs utiles

-- para verificar estas inserciones:

-- SELECT * FROM dbo.Estacionamientos
-- SELECT * FROM dbo.Usuarios


-- para actualizar las fotos de los estacionamientos:
/* 
	UPDATE dbo.Estacionamientos SET imageUrl = 'https://uc4f4ccbd04077e42700b24734e6.previews.dropboxusercontent.com/p/thumb/ABgq-SEhaqpPgjZ3Q_9i14E0xi2w0BrIEnNa_TC4gc-TacjNEowu0UqLNIQnyYiyGCYdwwDnivo3DyR3m66AWIiykKQvNpElk0IWpi09bV3gguJ7_dafbe_CnzQ_T2BwRfN6sSWeuTVvGExMbAlYjIFOT4yNQVFgrqdf8ErewsQEtUvkD91Ogx1Gq5G_L7QpVWwsvozSBksrIQcAWMYXxxUsHSBZVx-CKkqhAaMT0aqSRyuFIzifinwYkUDsdc5_EN8Q9vVKmdglXb4UOXoa5GuWc9XYLmNJOvxIbZ60ine2ih-EwG_XEDI38_4nSwD99XUfBny4HD5r0IFBhXcVXv6mKst2Xohmlqa7Qv0cgVyC9KKPmBi_XFbZLCfpQ_qxvg0/p.jpeg'
	WHERE estacionamientoId = 1
*/


-- SELECT * FROM dbo.Reservaciones

-- SELECT * FROM dbo.Visitas

-- SELECT * FROM dbo.VisitasOficiales


-- Sirve para confrontar todos los espacios vs los disponibles
/*
	SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
	cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos
*/



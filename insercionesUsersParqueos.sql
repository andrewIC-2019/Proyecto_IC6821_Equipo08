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

-- [] Administrador

DECLARE @registroAdmin BIGINT
EXEC @registroAdmin = dbo.sp_registrarUsuarioTotal 'jsolis.67@itcr.ac.cr', '812547785', 'jsolis.67@email.cr', 'jsolis.67', '74120336', 'Jorge', 'Solis', 'Thames', 'DIR',
'RJST670', NULL, NULL, NULL,
'07:30', '16:30', '07:30', '16:30', '07:30', '16:30','07:30', '16:30', '07:30', '16:30', NULL, NULL, NULL, NULL, 0
-- SELECT @registroAdmin

--		a pie lo vuelve admin de la plataforma
UPDATE dbo.Usuarios SET esAdministrador = 1 WHERE correoInstitucional = 'jsolis.67@itcr.ac.cr'

-- [] Funcionario

DECLARE @registroFuncionario1 BIGINT
EXEC @registroFuncionario1 = dbo.sp_registrarUsuarioTotal 'aarias.19@itcr.ac.cr', '818049752', 'aarias.19@email.cr', 'aarias.19', '42361203', 'Andrés', 'Arias', 'Siles', 'IC',
'232056', 'GTR232', '2022', 'TRD232',
NULL, NULL, '07:30', '16:30', '13:00', '16:30', '07:30', '16:30',  '07:30', '12:00', NULL, NULL, NULL, NULL, 1
-- SELECT @registroFuncionario1

-- [] Otro Funcionario

DECLARE @registroFuncionario2 BIGINT
EXEC @registroFuncionario2 = dbo.sp_registrarUsuarioTotal 'fperez.92@itcr.ac.cr', '741025896', NULL, 'fperez.92', '30258756', 'Fabiola', 'Perez', 'Martinez', 'AE',
'920430', 'FPM192', NULL, NULL,
NULL, NULL, '07:30', '16:30', NULL, NULL, '17:00', '21:00',  '17:00', '21:00', '07:30', '12:00', NULL, NULL, 0
-- SELECT @registroFuncionario2


-- [] Estacionamiento Subcontratado 1

EXEC dbo.sp_registrarEstacionamientoTotal 'Parqueo Amón', 'parqueo.amon@email.cr', '22990001', '1900110', 'Diagonal a casa verde', 'Dar la vuelta por el edificio principal, sentido S-N', 'Parqueo cercano al campus con amplia capacidad',
1, 1, 1, 0, 10, 'https://uc905e507265cf72e311859374ed.previews.dropboxusercontent.com/p/thumb/ABhIgcjAJXv8k4siO1HiGTPNXePMIt8QbCiYXVl17E9zpJSLT9osxPUDlcr6gGHTJfx0rvGXQ4P0vfIHIrpoPQ5Y7yCmaBcLDPilYGYBZPgcrxzoUs2CGSStm1kdLwxekiQ7nYOR6fwGW-c0T5wtwRGb8ehEIK7pMohYhJl2qmaX1gPGlefKgnQ_usdMuY4tnAKyNXyE-N12y8y1786sRO1JpxiabYn72hNdqiGK8Jp13JcIEAeePQSliayjYjbj05EtTO88nFVCxaAUelH1xF8fRTGojcVLwoOSl1FBk-KJ0wb3wrwW3ZWfzZjnz7vvgwnEW4DbuLzK9r2LcH1iFV0JrOlSWjIOP57Iw0r67e5k9gXksr1cZS8H6sF4wlg-V2s/p.jpeg',
'06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '07:00', '17:00', NULL, NULL, 0

-- [] Estacionamiento Institucional 1

EXEC dbo.sp_registrarEstacionamientoTotal 'Parqueo Principal CTLSJ', 'ctlsanjose@itcr.ac.cr', '25500001', '1265001', 'Sobre calle 5, Costado sur del edificio principal', 'Sobre Avenida 7 o 9, tomar calle 5, entrada al costado sur del edificio principal', 'Cuenta con espacios exclusivos para las jefaturas y vehiculos oficiales',
2, 6, 0, 2, 0, 'https://uca3f1a5e5563ff61776d2eeb6dc.previews.dropboxusercontent.com/p/thumb/ABi8Wl2VMd6QwOCnzwHaD-SA5NsGoGUm8i_dM_EHY9HYN0KjHaSoNR8bUgdlfl4p01WxpgT-1DbTMDIYhXcECzevAoDoIws4d3WhOg2g3mybuyZzV44j7sEQRHgle3QLr3P0jrCyd-T-Cbn0YkKlYvQisOBMJXqxm4kAhv8wUonkl9wAx1czJOXpDleq6lG_IyflVGmBA24EYq4eT8CaPY6Cl4bQTArNT0qnFSrhN0JBJi2I0BXEr2sK2FtBYznDMyB68O4Y33gJXG0Hzo6X6mpNMCdbXCZlnG3dgynJcCg-F1cfoL6LDozvtYw5k7-nOksq3SQJ5cKpHYyddMBxs4WePal4_lpUZAQYBzVKj9CBNCUiHr-BWr5gKXuKuX08ZgI/p.jpeg',
'07:00', '22:00', '07:00', '22:00', '07:00', '22:00', '07:00', '22:00', '07:00', '22:00', '07:00', '13:00', NULL, NULL, 1


-- para verificar

-- SELECT * FROM dbo.Estacionamientos
-- SELECT * FROM dbo.Usuarios
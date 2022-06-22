




SELECT * FROM dbo.Estacionamientos

EXEC dbo.sp_guardarEditarEstacionamiento 1, '75643457', 'Parqueo Nuevo Amón', 'nuevoamon@email.cr','96213505', '200m norte del morazán', 'Sobre la calle del casino, sentido O - E, mano derecha', 'Parqueo bajo techo',
1, 1, 1, 1, 6, NULL, 2,
NULL, NULL, '07:30', '16:30', '07:30', '16:30', '07:30', '16:30', '07:30', '16:30', '07:30', '16:30', '07:30', '16:30'


EXEC dbo.sp_registrarEstacionamientoTotal 'Parqueo Amón2', 'parqueo.amon@email.cr', '75643462', NULL, 'Diagonal a casa verd2e', 'Dar la vuelta por el edificio principal, sentido S-N2', 'Parqueo cercano al campus2',
1, 1, 1, 0, 7, 'https://uc905e507265cf72e311859374ed.previews.dropboxusercontent.com/p/thumb/ABhIgcjAJXv8k4siO1HiGTPNXePMIt8QbCiYXVl17E9zpJSLT9osxPUDlcr6gGHTJfx0rvGXQ4P0vfIHIrpoPQ5Y7yCmaBcLDPilYGYBZPgcrxzoUs2CGSStm1kdLwxekiQ7nYOR6fwGW-c0T5wtwRGb8ehEIK7pMohYhJl2qmaX1gPGlefKgnQ_usdMuY4tnAKyNXyE-N12y8y1786sRO1JpxiabYn72hNdqiGK8Jp13JcIEAeePQSliayjYjbj05EtTO88nFVCxaAUelH1xF8fRTGojcVLwoOSl1FBk-KJ0wb3wrwW3ZWfzZjnz7vvgwnEW4DbuLzK9r2LcH1iFV0JrOlSWjIOP57Iw0r67e5k9gXksr1cZS8H6sF4wlg-V2s/p.jpeg',
'06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '06:30', '21:00', '08:00', '16:00', NULL, NULL, 0


EXEC dbo.sp_guardarEditarUsuarioF2  1, 'correito@email.cr', '54321', '15531105', 'AU', 'ABC123', 'NRC152', 'NVA156', NULL,
1, 1, 0, 1, 0


EXEC dbo.sp_registrarHorario 7, 1, '07:30', '16:30'

SELECT * FROM dbo.Usuarios

SELECT * FROM dbo.Horarios_Por_Usuario WHERE usuarioId = 7
UPDATE dbo.Horarios_Por_Usuario SET deshabilitado = 1 WHERE usuarioId = 1





DECLARE @otraSalida BIGINT
EXEC @otraSalida = dbo.sp_registrarUsuarioTotalF2 'jnicks.70@itcr.ac.cr', '911597335', 'jnicks.70@email.cr', 'jnicks.70', '30103286', 'Johana', 'Nicks', 'Thames', 'BIB',
'BBC020', NULL, NULL, NULL,
0, 0, 1, 0, 0
SELECT @otraSalida



-- RESERVA UN FUNCIONARIO

EXEC dbo.sp_ReservarFuncionario  1, 1, 5, '2022-06-21 08:00', '2022-06-21 12:00' 

SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos


-- RESERVA UNA JEFATURA

EXEC dbo.sp_ReservarJefatura 7, 1, 4, '2022-06-20'

SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos


-- ENTRA UN CARRO OFICIAL

EXEC dbo.sp_RegistrarOficial 2, 1, 2, '2022-06-21 11:00', '265-020', 'Frank Jimenez', 'CTCC', 'PickUp' 

SELECT * FROM dbo.VisitasOficiales
SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos

-- ENTRA UNA VISITA

EXEC dbo.sp_RegistrarVisita 2, 1, 3, '2022-06-21 09:00', 'Presidente Asocoope', '802229999', 'ACP029', 'Reunion en AE', 'Casa verde' 
SELECT * FROM dbo.Visitas
SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos

-- SE SIMULA EL PASO DEL TIEMPO

SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0

EXEC dbo.sp_actualizarSalidaReservaciones '2022-06-21 13:00:00'

SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos

-- SALE UN CARRO OFICIAL

EXEC dbo.sp_SalidaOficial '265-020', 'Frank Jimenez', '2022-06-21 14:00'

SELECT * FROM dbo.VisitasOficiales
SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos

-- SALE UNA VISITA

EXEC dbo.sp_SalidaVisita 'ACP029', '802229999', '2022-06-21 14:20'

SELECT * FROM dbo.Visitas
SELECT * FROM dbo.Reservaciones WHERE deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos


UPDATE dbo.Reservaciones SET deshabilitado = 0
SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos

EXEC dbo.sp_actualizarEstacionamientos

SELECT cantEspacios, cantDisponibles, cantEspaciosOficiales, cantOficialesDisponibles, cantEspaciosVisitantes, cantVisitantesDisponibles, cantEspaciosJefaturas, cantJefaturasDisponibles,
cantEspaciosEspeciales, cantEspecialesDisponibles FROM dbo.Estacionamientos


-- Reportes

EXEC dbo.sp_ocupacionXDepartamentoJefe 1, 1
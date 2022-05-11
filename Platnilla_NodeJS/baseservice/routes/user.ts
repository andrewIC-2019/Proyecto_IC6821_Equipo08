import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.post("/login", login);
app.post("/registrarVehiculo", registrarVehiculo);
app.post("/ubicaciones", ubicaciones);
app.post("/registrarFuncionario", registrarFuncionario);

async function registrarFuncionario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let tipoFuncionario: number = req.body.tipoFuncionario;
  let division: number = req.body.division;
  let identificacion: string = req.body.identificacion;
  let nombre: string = req.body.nombre;
  let apellido1: string = req.body.apellido1;
  let apellido2: string = req.body.apellido2;
  let telefono: string = req.body.telefono;
  let correoInstitucional: string = req.body.correoInstitucional;
  let correo: string = req.body.correo;
  let notificarCorreoAlterno: number = req.body.notificarCorreoAlterno;
  let password: string = req.body.password;

  await Control.getInstance()
    .$gestorUsuario.registrarFuncionario(
      tipoFuncionario,
      division,
      identificacion,
      nombre,
      apellido1,
      apellido2,
      telefono,
      correoInstitucional,
      correo,
      notificarCorreoAlterno,
      password
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function ubicaciones(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let provincia: number = req.body.provincia;
  let canton: number = req.body.canton;
  let distrito: number = req.body.distrito;
  let direccion: string = req.body.direccion;

  await Control.getInstance()
    .$gestorUsuario.ubicaciones(provincia, canton, distrito, direccion)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function registrarVehiculo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: number = req.body.usuarioId;
  let placa: string = req.body.placa;
  let tipoVehiculo: number = req.body.tipoVehiculo;

  await Control.getInstance()
    .$gestorUsuario.registrarVehiculo(usuarioId, placa, tipoVehiculo)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function login(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let username: string = req.body.username;
  let password: string = req.body.password;

  await Control.getInstance()
    .$gestorUsuario.login(username, password)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

export { app as user };

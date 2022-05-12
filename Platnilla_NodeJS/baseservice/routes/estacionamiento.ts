import * as express from "express";
import { Logger } from "../common";
import { Control } from "../controller";
//a traves de un controller, y que ya cuenta con un logger

const app = express();
const log = new Logger();

app.get("/inicio", inicio);
app.post("/registrarEstacionamiento", registrarEstacionamiento);
app.get("/estacionamientoInfo", estacionamientoInfo);
app.post("/eliminarEstacionamiento", eliminarEstacionamiento);

async function eliminarEstacionamiento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let identificacion: string = req.body.identificacion;

  await Control.getInstance()
    .$gestorEstacionamiento.eliminarEstacionamiento(identificacion)
    .then((data) => {
      if (!data) {
        data = '{"response": false}'
      } 
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}
async function estacionamientoInfo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let estacionamientoId : string = req.query.estacionamientoId  as string;
  await Control.getInstance()
    .$gestorEstacionamiento.estacionamientoInfo(estacionamientoId)
    .then((data) => {
      if (!data) {
        data = '{"response": false}'
      } 
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function registrarEstacionamiento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let tipoEstacionamiento: number = req.body.tipoEstacionamiento;
  let provincia: number = req.body.provincia;
  let canton: string = req.body.canton;
  let distrito: string = req.body.distrito;
  let direccion: string = req.body.direccion;
  let nombre: string = req.body.nombre;
  let formaAcceso: string = req.body.formaAcceso;
  let cantEspacios: string = req.body.cantEspacios;
  let cantEspaciosEspeciales: string = req.body.cantEspaciosEspeciales;
  let cantEspaciosJefaturas: number = req.body.cantEspaciosJefaturas;
  let cantEspaciosVisitantes: string = req.body.cantEspaciosVisitantes;
  let cantEspaciosOficiales: string = req.body.cantEspaciosOficiales;
  let correo: string = req.body.correo;
  let telefono: number = req.body.telefono;
  let identificacion: string = req.body.identificacion;
  let imageUrl: number = req.body.imageUrl;
  let descripcion: string = req.body.descripcion;

  await Control.getInstance()
    .$gestorEstacionamiento.registrarEstacionamiento(
        tipoEstacionamiento,
        provincia,
        canton,
        distrito,
        direccion,
        nombre,
        formaAcceso,
        cantEspacios,
        cantEspaciosEspeciales,
        cantEspaciosJefaturas,
        cantEspaciosVisitantes,
        cantEspaciosOficiales,
        correo,
        telefono,
        identificacion,
        imageUrl,
        descripcion,
    )
    .then((data) => {
      if (!data) {
        data = '{"response": false}'
      } 
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function inicio(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  await Control.getInstance()
    .$gestorEstacionamiento.inicio()
    .then((data) => {
      if (!data) {
        data = '{"response": false}'
      } 
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

export { app as estacionamiento };

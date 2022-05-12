import * as express from "express";
import { Logger } from "../common";
import { Control } from "../controller";
//a traves de un controller, y que ya cuenta con un logger

const app = express();
const log = new Logger();

app.get("/inicio", inicio);
app.post("/registrarEstacionamiento", registrarEstacionamiento);
app.post("/registrarEstacionamientoTotal", registrarEstacionamientoTotal);
app.get("/estacionamientoInfo", estacionamientoInfo);
app.post("/eliminarEstacionamiento", eliminarEstacionamiento);



async function registrarEstacionamientoTotal(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let nombre: string = req.body.nombre;
	let correo: string = req.body.correo;
	let telefono: string = req.body.telefono;
	let identificacion: string = req.body.identificacion;
	let direccionExacta: string = req.body.direccionExacta;
	let formaAcceso: string = req.body.formaAcceso;
	let descripcion: string = req.body.descripcion;
	let cantEspaciosEspeciales: string = req.body.cantEspaciosEspeciales;
	let cantEspaciosJefaturas: string = req.body.cantEspaciosJefaturas;
	let cantEspaciosVisitantes: string = req.body.cantEspaciosVisitantes;
	let cantEspaciosOficiales: string = req.body.cantEspaciosOficiales;
	let cantEspacios: string = req.body.cantEspacios;
	let imageUrl: string = req.body.imageUrl;
	let lunesA: string = req.body.lunesA;
	let lunesB: string = req.body.lunesB;
	let martesA: string = req.body.martesA;
	let martesB: string = req.body.martesB;
	let miercolesA: string = req.body.miercolesA;
	let miercolesB: string = req.body.miercolesB;
	let juevesA: string = req.body.juevesA;
	let juevesB: string = req.body.juevesB;
	let viernesA: string = req.body.viernesA;
	let viernesB: string = req.body.viernesB;
	let sabadoA: string = req.body.sabadoA;
	let sabadoB: string = req.body.sabadoB;
	let domingoA: string = req.body.domingoA;
	let domingoB: string = req.body.domingoB;
	let esInstitucional: string = req.body.esInstitucional;

  await Control.getInstance()
    .$gestorEstacionamiento.registrarEstacionamientoTotal(
      nombre,
      correo,
      telefono,
      identificacion,
      direccionExacta,
      formaAcceso,
      descripcion,
      cantEspaciosEspeciales,
      cantEspaciosJefaturas,
      cantEspaciosVisitantes,
      cantEspaciosOficiales,
      cantEspacios,
      imageUrl,
      lunesA,
      lunesB,
      martesA,
      martesB,
      miercolesA,
      miercolesB,
      juevesA,
      juevesB,
      viernesA,
      viernesB,
      sabadoA,
      sabadoB,
      domingoA,
      domingoB,
      esInstitucional,
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

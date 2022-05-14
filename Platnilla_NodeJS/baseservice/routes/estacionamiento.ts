import * as express from "express";
import { Logger } from "../common";
import { Control } from "../controller";
//a traves de un controller, y que ya cuenta con un logger

const app = express();
const log = new Logger();

app.get("/inicio", inicio); //listo x2
app.post("/registrarEstacionamientoTotal", registrarEstacionamientoTotal); //listo x2
app.get("/estacionamientoInfo", estacionamientoInfo); //listo x2
app.post("/deshabilitarEstacionamiento", deshabilitarEstacionamiento); //listo x2
app.get("/pintarEditarEstacionamiento", pintarEditarEstacionamiento); //listo x2
app.post("/guardarEditarEstacionamiento", guardarEditarEstacionamiento); //listo
app.get(
  "/estacionamientosTipoSubcontratados",
  estacionamientosTipoSubcontratados//listo
);

async function estacionamientosTipoSubcontratados(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let subcontratados: string = req.query.subcontratados as string;
  await Control.getInstance()
    .$gestorEstacionamiento.estacionamientosTipoSubcontratados(subcontratados)
    .then((data) => {
      if (!data) {
        data = '{"response": false}';
      }
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function guardarEditarEstacionamiento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let estacionamientoId: string = req.body.estacionamientoId;
  let identificacion: string = req.body.identificacion;
  let nombre: string = req.body.nombre;
  let correo: string = req.body.correo;
  let telefono: string = req.body.telefono;
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

  await Control.getInstance()
    .$gestorEstacionamiento.guardarEditarEstacionamiento(
      estacionamientoId,
      identificacion,
      nombre,
      correo,
      telefono,
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
      domingoB
    )
    .then((data) => {
      if (!data) {
        data = '0';
      }
      res.json({done: data == '1'});
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function pintarEditarEstacionamiento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let estacionamientoId: string = req.query.estacionamientoId as string;

  await Control.getInstance()
    .$gestorEstacionamiento.pintarEditarEstacionamiento(estacionamientoId)
    .then((data) => {
      if (!data) {
        data = '{"response": false}';
      }
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

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
      esInstitucional
    )
    .then((data) => {
      if (!data) {
        data = '-1';
      }
      res.json({estacionamientoId : data});
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function deshabilitarEstacionamiento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let estacionamientoId: string = req.body.estacionamientoId;

  await Control.getInstance()
    .$gestorEstacionamiento.eliminarEstacionamiento(estacionamientoId)
    .then((data) => {
      if (!data) {
        data = '0';
      }
      res.json({done: data== '1'});
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
  let estacionamientoId: string = req.query.estacionamientoId as string;
  await Control.getInstance()
    .$gestorEstacionamiento.estacionamientoInfo(estacionamientoId)
    .then((data) => {
      if (!data) {
        data = '{"response": false}';
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
        data = '{"response": false}';
      }
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

export { app as estacionamiento };

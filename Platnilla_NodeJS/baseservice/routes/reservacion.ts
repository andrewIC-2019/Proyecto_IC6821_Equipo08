import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.get("/verificacionFranjas", verificacionFranjas)
app.get("/verificacionDiaLaboral", verificacionDiaLaboral)
app.get("/getDisponiblesTipo", getDisponiblesTipo)
app.post("/actualizarSalidaReservaciones", actualizarSalidaReservaciones)
app.post("/reservarFuncionario", reservarFuncionario)
app.post("/reservarJefatura", reservarJefatura)

async function reservarJefatura(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("llega")
  let usuarioId: string = req.body.usuarioId;
  let estacionamientoId: string = req.body.estacionamientoId;
  let tipoEspacioId: string = req.body.tipoEspacioId;
  let dia: string = req.body.dia;

  await Control.getInstance()
    .$gestorReservacion.reservarJefatura(usuarioId, estacionamientoId, tipoEspacioId, dia)
    .then((data) => {
      if (!data) {
        data = '-1';
      }
      res.json({ response: data });
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function reservarFuncionario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: string = req.body.usuarioId;
  let estacionamientoId: string = req.body.estacionamientoId;
  let tipoEspacioId: string = req.body.tipoEspacioId;
  let entrada: string = req.body.entrada;
  let salida: string = req.body.salida;

  await Control.getInstance()
    .$gestorReservacion.reservarFuncionario(usuarioId, estacionamientoId, tipoEspacioId, entrada, salida)
    .then((data) => {
      if (!data) {
        data = '-1';
      }
      res.json({ response: data });
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function actualizarSalidaReservaciones(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let horaPivot: string = req.body.horaPivot;

  await Control.getInstance()
    .$gestorReservacion.actualizarSalidaReservaciones(horaPivot)
    .then((data) => {
      if (!data) {
        data = '0';
      }
      res.json({ done: data == '1' });
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function getDisponiblesTipo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let tipo: string = req.query.tipo as string;

  await Control.getInstance()
    .$gestorReservacion.getDisponiblesTipo(tipo)
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

async function verificacionDiaLaboral(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let jefe: string = req.query.jefe as string;
  let dia: string = req.query.dia as string;

  await Control.getInstance()
    .$gestorReservacion.verificacionDiaLaboral(jefe, dia)
    .then((data) => {
      if (!data) {
        data = '0';
      }
      res.json({done : data == "1"});
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function verificacionFranjas(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    let usuario: string = req.query.usuario as string;
    let entrada: string = req.query.entrada as string;
    let salida: string = req.query.salida as string;
  
    await Control.getInstance()
      .$gestorReservacion.verificacionFranjas(usuario, entrada, salida)
      .then((data) => {
        if (!data) {
          data = '{"response": false}';
        }
        res.json({done : data == "1"});
      })
      .catch((err) => {
        log.error(err);
        return "";
      });
  }

export { app as reservaciones };
import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.get("/verificacionFranjas", verificacionFranjas)
app.get("/verificacionDiaLaboral", verificacionDiaLaboral)
app.get("/getDisponiblesTipo", getDisponiblesTipo)

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
        data = '{"response": false}';
      }
      res.json(JSON.parse(data));
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
        res.json(JSON.parse(data));
      })
      .catch((err) => {
        log.error(err);
        return "";
      });
  }

export { app as reservaciones };
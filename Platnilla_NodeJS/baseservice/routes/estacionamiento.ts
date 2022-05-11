import * as express from 'express';
import { Logger } from '../common'
import { Control } from "../controller";
//a traves de un controller, y que ya cuenta con un logger


const app = express();
const log = new Logger();

app.post("/inicio", inicio);

async function inicio(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
  
    await Control.getInstance()
      .$gestorEstacionamiento.inicio()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        log.error(err);
        return "";
      });
  }
  

export { app as estacionamiento };
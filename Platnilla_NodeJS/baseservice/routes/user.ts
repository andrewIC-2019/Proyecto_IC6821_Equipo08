import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.post("/login", login);
app.post("/i", info);


async function info(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let username: string = req.body.username;

  await Control.getInstance()
    .$gestorUsuario.info(username)
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

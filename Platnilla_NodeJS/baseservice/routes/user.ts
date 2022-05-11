import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.post("/login", login);

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
      res.send(data);
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

export { app as user };

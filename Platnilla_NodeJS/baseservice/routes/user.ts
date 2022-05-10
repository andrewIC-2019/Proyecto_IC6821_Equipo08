import * as express from "express";
import { Control } from "../controller";
const router = express.Router();

const app = express();

app.post("/login", login);

function login(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let username: string = req.body.username;
  let password: string = req.body.password;
  let errMsg: string = "";
  if (!username || username === "") {
    errMsg = "error: username is empty";
  } else if (!password || password === "") {
    errMsg = "error: password is empty";
  }
  let result = ""
  console.log(errMsg)
  console.log(errMsg.length)
  console.log(errMsg.length==0)
  if (!errMsg && (errMsg.length == 0)){
    result = Control.getInstance().$gestorUsuario.login(username, password)
  }
  type struct = {
    errMsg: string;
    json: string
  }
  
  let respStruct: struct = {
    errMsg: errMsg,
    json: result

  }
  console.log(result)
  console.log(username, password);
  res.send(respStruct);
}

export { app as user };

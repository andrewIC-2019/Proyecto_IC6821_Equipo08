import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.get("/login", login); //listo
app.get("/informeFuncionarios", informeFuncionarios);//listo 
app.get("/informeEstacionamientos", informeEstacionamientos);//listo 
app.get("/franjasHorarias", franjasHorarias);//listo 
app.get("/consultaFuncionario", consultaFuncionario);//listo x2
app.get("/pintarEditarUsuario", pintarEditarUsuario); //listo
app.post("/guardarEditarUsuario", guardarEditarUsuario);//listo
app.post("/registrarUsuarioTotal", registrarUsuarioTotal); //listo
app.post("/deshabilitarUsuario", deshabilitarUsuario);//listo

async function deshabilitarUsuario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: number = req.body.usuarioId;

  await Control.getInstance()
    .$gestorUsuario.eliminarUsuario(usuarioId)
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

async function registrarUsuarioTotal(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let correoInstitucional: string = req.body.correoInstitucional;
  let identificacion: string = req.body.identificacion;
  let correo: string = req.body.correo;
  let password: string = req.body.password;
  let telefono: string = req.body.telefono;
  let nombre: string = req.body.nombre;
  let apellido1: string = req.body.apellido1;
  let apellido2: string = req.body.apellido2;
  let departamento: string = req.body.departamento;
  let placa1: string = req.body.placa1;
  let placa2: string = req.body.placa2;
  let placa3: string = req.body.placa3;
  let placa4: string = req.body.placa4;
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
  let notificarCorreoAlterno: string = req.body.notificarCorreoAlterno;

  await Control.getInstance()
    .$gestorUsuario.registrarUsuarioTotal(
      correoInstitucional,
      identificacion,
      correo,
      password,
      telefono,
      nombre,
      apellido1,
      apellido2,
      departamento,
      placa1,
      placa2,
      placa3,
      placa4,
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
      notificarCorreoAlterno
    )
    .then((data) => {
      if (!data) {
        data = '-1';
      } 
      res.json({usuarioId: data});
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}
async function guardarEditarUsuario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: string = req.body.usuarioId;
  let correo: string = req.body.correo;
  let password: string = req.body.password;
  let telefono: string = req.body.telefono;
  let departamento: string = req.body.departamento;
  let placa1: string = req.body.placa1;
  let placa2: string = req.body.placa2;
  let placa3: string = req.body.placa3;
  let placa4: string = req.body.placa4;
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
  let notificarCorreoAlterno: string = req.body.notificarCorreoAlterno;

  await Control.getInstance()
    .$gestorUsuario.guardarEditarUsuario(
      usuarioId,
      correo,
      password,
      telefono,
      departamento,
      placa1,
      placa2,
      placa3,
      placa4,
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
      notificarCorreoAlterno
    )
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

async function pintarEditarUsuario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: string = req.query.usuarioId as string;

  await Control.getInstance()
    .$gestorUsuario.pintarEditarUsuario(usuarioId)
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

async function consultaFuncionario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let identificacion: string = req.query.identificacion as string;

  await Control.getInstance()
    .$gestorUsuario.consultaFuncionario(identificacion)
    .then((data) => {
      if (!data) {
        data = '{"response": false}';
      }
      console.log(data)
      res.json(data);
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function franjasHorarias(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  await Control.getInstance()
    .$gestorUsuario.franjasHorarias()
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

async function informeEstacionamientos(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  await Control.getInstance()
    .$gestorUsuario.informeEstacionamientos()
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

async function informeFuncionarios(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  await Control.getInstance()
    .$gestorUsuario.informeFuncionarios()
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
  let username: string = req.query.username as string;
  let password: string = req.query.password as string;


  await Control.getInstance()
    .$gestorUsuario.login(username, password)
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

export { app as user };

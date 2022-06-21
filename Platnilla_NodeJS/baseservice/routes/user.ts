import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.get("/login", login);
app.get("/informeFuncionarios", informeFuncionarios);
app.get("/informeEstacionamientos", informeEstacionamientos);
app.get("/franjasHorarias", franjasHorarias);
app.get("/consultaFuncionario", consultaFuncionario);//si no hay datos manda string????
app.get("/pintarEditarUsuario", pintarEditarUsuario);
app.post("/guardarEditarUsuario", guardarEditarUsuario);
app.post("/registrarUsuarioTotal", registrarUsuarioTotal);
app.post("/deshabilitarUsuario", deshabilitarUsuario);
app.get("/diasSemana", diasSemana);
app.get("/ocupacionXTipo", ocupacionXTipo);
app.get("/ocupacionXDepartamento", ocupacionXDepartamento);
app.get("/ocupacionTotalXDepartamento", ocupacionTotalXDepartamento);
app.get("/verMisReservas", verMisReservas);
app.get("/verReservasEstacionamiento", verReservasEstacionamiento);
app.post("/registrarOficial", registrarOficial);
app.post("/salidaOficial", salidaOficial);
app.get("/estacionamientosUsuario", estacionamientosUsuario);
//app.post("/guardarEditarUsuarioF2", guardarEditarUsuarioF2);
app.post("/registrarUsuarioTotalF2", registrarUsuarioTotalF2);





async function registrarUsuarioTotalF2(
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
  let notificarCorreoAlterno: string = req.body.notificarCorreoAlterno;
  let esAdministrador: boolean = req.body.esAdministrador;
  let esJefatura: boolean = req.body.esJefatura;
  let esDiscapacitado: boolean = req.body.esDiscapacitado;
  let esOperador: boolean = req.body.esOperador;
  let horarios: JSON[] = req.body.horarios;

  await Control.getInstance()
    .$gestorUsuario.registrarUsuarioTotalF2(
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
      notificarCorreoAlterno,
      esAdministrador,
      esJefatura,
      esDiscapacitado,
      esOperador,
      horarios
    )
    .then((data) => {
      if (!data) {
        data = '-1';
      }
      res.json({ usuarioId: data });
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function estacionamientosUsuario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let objetivo: string = req.query.objetivo as string;
  let usuario: string = req.query.usuario as string;

  await Control.getInstance()
    .$gestorUsuario.estacionamientosUsuario(objetivo, usuario)
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

async function salidaOficial(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let estacionamientoId: string = req.body.estacionamientoId;
  let placa: string = req.body.placa;
  let conductor: string = req.body.conductor;
  let salida: string = req.body.salida;

  await Control.getInstance()
    .$gestorUsuario.salidaOficial(estacionamientoId, placa, conductor, salida)
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

async function registrarOficial(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let estacionamientoId: string = req.body.estacionamientoId;
  let placa: string = req.body.placa;
  let conductor: string = req.body.conductor;
  let entrada: string = req.body.entrada;

  await Control.getInstance()
    .$gestorUsuario.registrarOficial(estacionamientoId, placa, conductor, entrada)
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

async function verReservasEstacionamiento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let estacionamiento: string = req.query.estacionamiento as string;

  await Control.getInstance()
    .$gestorUsuario.verReservasEstacionamiento(estacionamiento)
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

async function verMisReservas(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let usuario: string = req.query.usuario as string;
  let limiteA: string = req.query.limiteA as string;
  let limiteB: string = req.query.limiteB as string;

  await Control.getInstance()
    .$gestorUsuario.verMisReservas(usuario, limiteA, limiteB)
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

async function ocupacionTotalXDepartamento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let departamento: string = req.query.departamento as string;

  await Control.getInstance()
    .$gestorUsuario.ocupacionTotalXDepartamento(departamento)
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

async function ocupacionXDepartamento(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let estacionamiento: string = req.query.estacionamiento as string;

  await Control.getInstance()
    .$gestorUsuario.ocupacionXDepartamento(estacionamiento)
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

async function ocupacionXTipo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  let estacionamiento: string = req.query.estacionamiento as string;

  await Control.getInstance()
    .$gestorUsuario.ocupacionXTipo(estacionamiento)
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

async function diasSemana(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {

  await Control.getInstance()
    .$gestorUsuario.diasSemana()
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
      res.json({ done: data == '1' });
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
      res.json({ usuarioId: data });
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

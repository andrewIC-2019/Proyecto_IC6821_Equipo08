import * as express from "express";
import { Control } from "../controller";
import { Logger } from "../common";

const router = express.Router();

const app = express();
const log = new Logger();

app.get("/login", login);
app.post("/registrarVehiculo", registrarVehiculo);
app.post("/ubicaciones", ubicaciones);
app.post("/registrarFuncionario", registrarFuncionario);
app.post("/permisosUsuario", permisosUsuario);
app.post("/insertarVehiculo", insertarVehiculo);
app.post("/insertarHorario", insertarHorario);
app.get("/informeFuncionarios", informeFuncionarios);
app.get("/informeEstacionamientos", informeEstacionamientos);
app.get("/franjasHorarias", franjasHorarias);
app.get("/consultaFuncionario", consultaFuncionario);
app.post("/registrarHorario", registrarHorario);
app.get("/pintarEditarUsuario", pintarEditarUsuario);
app.post("/guardarEditarUsuario", guardarEditarUsuario);
app.post("/registrarUsuarioTotal", registrarUsuarioTotal);
app.post("/eliminarUsuario", eliminarUsuario);

async function eliminarUsuario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let identificacion: string = req.body.identificacion;

  await Control.getInstance()
    .$gestorUsuario.eliminarUsuario(identificacion)
    .then((data) => {
      res.json(JSON.parse(data));
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
      res.json(JSON.parse(data));
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
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function registrarHorario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: number = req.body.usuarioId;
  let diaSemana: number = req.body.diaSemana;
  let horaInicio: string = req.body.horaInicio;
  let horaFinal: string = req.body.horaFinal;

  await Control.getInstance()
    .$gestorUsuario.registrarHorario(
      usuarioId,
      diaSemana,
      horaInicio,
      horaFinal
    )
    .then((data) => {
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
      res.json(JSON.parse(data));
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
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function insertarHorario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let diaSemana: number = req.body.diaSemana;
  let horaInicio: string = req.body.horaInicio;
  let horaFinal: string = req.body.horaFinal;

  await Control.getInstance()
    .$gestorUsuario.insertarHorario(diaSemana, horaInicio, horaFinal)
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function insertarVehiculo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let placa: string = req.body.placa;
  let tipoVehiculo: number = req.body.tipoVehiculo;

  await Control.getInstance()
    .$gestorUsuario.insertarVehiculo(placa, tipoVehiculo)
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function permisosUsuario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: number = req.body.usuarioId;
  let permisoUsuarioId: number = req.body.permisoUsuarioId;

  await Control.getInstance()
    .$gestorUsuario.permisosUsuario(usuarioId, permisoUsuarioId)
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function registrarFuncionario(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let tipoFuncionario: number = req.body.tipoFuncionario;
  let division: number = req.body.division;
  let identificacion: string = req.body.identificacion;
  let nombre: string = req.body.nombre;
  let apellido1: string = req.body.apellido1;
  let apellido2: string = req.body.apellido2;
  let telefono: string = req.body.telefono;
  let correoInstitucional: string = req.body.correoInstitucional;
  let correo: string = req.body.correo;
  let notificarCorreoAlterno: number = req.body.notificarCorreoAlterno;
  let password: string = req.body.password;

  await Control.getInstance()
    .$gestorUsuario.registrarFuncionario(
      tipoFuncionario,
      division,
      identificacion,
      nombre,
      apellido1,
      apellido2,
      telefono,
      correoInstitucional,
      correo,
      notificarCorreoAlterno,
      password
    )
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function ubicaciones(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let provincia: number = req.body.provincia;
  let canton: number = req.body.canton;
  let distrito: number = req.body.distrito;
  let direccion: string = req.body.direccion;

  await Control.getInstance()
    .$gestorUsuario.ubicaciones(provincia, canton, distrito, direccion)
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

async function registrarVehiculo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  let usuarioId: number = req.body.usuarioId;
  let placa: string = req.body.placa;
  let tipoVehiculo: number = req.body.tipoVehiculo;

  await Control.getInstance()
    .$gestorUsuario.registrarVehiculo(usuarioId, placa, tipoVehiculo)
    .then((data) => {
      res.json(JSON.parse(data));
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
  console.log("login req");
  console.log(username);

  console.log(password);

  await Control.getInstance()
    .$gestorUsuario.login(username, password)
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      log.error(err);
      return "";
    });
}

export { app as user };

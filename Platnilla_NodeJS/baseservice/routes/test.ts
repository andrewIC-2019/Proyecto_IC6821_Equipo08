import * as express from 'express';
import { Logger } from '../common'
import { ArticleController } from '../controllers'
import { TVehiculo, Vehiculo } from '../model'
//a traves de un controller, y que ya cuenta con un logger


const app = express();
const log = new Logger();

//puedo crear un logger, que contiene la logica
//cuando llamo al metodo, llamo al controller mediante
//promises (asincrona)
//el controller (ex. articles controller...)
app.get("/", (req, res,next) => {

    var v = new Vehiculo("dbo_666", TVehiculo.OFICIAL, false)
    console.log(v.placa)
    //v.placa = "otra"
    v.placa
    console.log(v.placa)
    res.send(v)
});

export { app as test };
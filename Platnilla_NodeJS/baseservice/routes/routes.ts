import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Logger } from '../common';
import {weatherouter} from './weather';
import {articlesrouter} from './articlesrouter';
import {user} from './user';
import {estacionamiento} from './estacionamiento';
import {reservaciones} from './reservacion';
/*
LUEGO DE LA APLICACION, CAE AL ENRUTADOR, ME LLEVA A LOS
CONTROLADORES
*/

//estructura basica a seguir
//este monta todos los routes
class Routes {

    public express: express.Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.logger = new Logger();

        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.use('/weather', weatherouter);
        this.express.use('/articles', articlesrouter);
        this.express.use('/user', user);
        this.express.use('/estacionamiento', estacionamiento);
        this.express.use('/reservaciones', reservaciones);
        this.logger.info("Routes loaded");
    }
}

export default new Routes().express;


import * as express from 'express';
import { Logger } from '../common'
import { ArticleController } from '../controllers'
//a traves de un controller, y que ya cuenta con un logger


const app = express();
const log = new Logger();

//puedo crear un logger, que contiene la logica
//cuando llamo al metodo, llamo al controller mediante
//promises (asincrona)
//el controller (ex. articles controller...)
app.get("/list", (req, res,next) => {
    ArticleController.getInstance().listArticles()
    .then((data)=>{
        if (!data) {
        data = '{"response": false}'
      } 
      res.json(JSON.parse(data));
    })
    .catch((err)=>{
        log.error(err);
        return "";
    });

});

export { app as articlesrouter };
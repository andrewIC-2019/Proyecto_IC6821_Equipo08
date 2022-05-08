import * as express from 'express';
const app = express();

//esto se esta resolviendo in-memory
const climas = ["Soleado", "Nublado", "Lluvioso", "Ventoso", "Nublado", "Temporal"];

app.get("/conocer", (req, res,next) => {
    res.json({ message: climas[Math.trunc(Math.random()*climas.length)]});
});

app.post("/conocerPara", (req, res,next) => {
    res.json({ message: req.body.cuando + " " + climas[Math.trunc(Math.random()*climas.length)]});
});

//Asi es como los exporto, entonces asi lo debo llamar
export { app as weatherouter };
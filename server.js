const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect ("mongodb://localhost:27017/tienda", { useNewUrlParser: true })
    .then( db => console.log("Conexión a BD correcta") )
    .catch( err => console.log("Error al conectarse a la BD " + err));

app.get("/", (req, res) => {res.send("<h1>Hola</h1>")} );

app.get("/hola", (req, res) => 
    res.send("Hola Hola")
);

app.listen(3000, () => console.log("Servidor iniciado..."));

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js');

const app = express();

mongoose.connect ("mongodb+srv://adalid:adalid@cluster0-asp6z.mongodb.net/tienda?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then( db => console.log("Conexión a BD correcta") )
    .catch( err => console.log("Error al conectarse a la BD " + err));

app.get("/", (req, res) => {res.send("<h1>Hola</h1>")} );

app.get("/hola", (req, res) => 
    res.send("Hola Hola")
);

app.use(express.json());
app.use('/api/', apiRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado..."));

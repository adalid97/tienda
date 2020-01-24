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

<<<<<<< HEAD
app.use(express.json());
app.use('/api/', apiRoutes);
=======
app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);

>>>>>>> 972b31f5fb1c0b8d5ac6d700b5e7148f6d0bec68

app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado..."));

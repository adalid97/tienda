const express = require("express");
const controller = require("./controllers.js");

const router = express.Router();

//------------ API REST CRUD

// Read All
router.get('/clientes', controller.listClientes);

// Read
router.get('/clientes/:id', controller.readCliente);

// DELETE
router.delete('/clientes/:id', controller.deleteCliente);

// UPDATE
router.put('/clientes/:id', controller.updateCliente);

// CREATE
router.post('/clientes/', controller.createCliente);


module.exports = router;
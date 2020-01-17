const { Cliente, Articulo } = require('./models.js');

const express = require('express');

const router = express.Router();

//------------ API REST CRUD

// Read All
router.get('/clientes', (req, res) => {
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err })
        else res.json(data);
    });
});

// Read
router.get('/clientes/:id', (req, res) => {
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err })
        else res.json(data);
    });
});

// DELETE
router.delete('/clientes/:id', (req, res) => {
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err })
        else res.json(data);
    });
});

// UPDATE
router.put('/clientes/:id', (req, res) => {
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        {$set: { nombre: req.body.nombre, apellidos: req.body.apellidos}},
        (err, data) => {
            if (err) res.json({ error: err })
            else res.json(data);
        });
});

// CREATE
router.post('/clientes/:id', (req, res) => {
    const cliente = new Cliente({nombre: req.body.nombre, apellidos: req.body.apellidos});

    cliente.save((err, data) =>{
        if (err) res.json({ error: err })
        else res.json(data);
    });
});


module.exports = router;
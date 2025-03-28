// importare express
const express = require('express');

// funzione router 
const router = express.Router();

// Creare rotte per le operazioni CRUD

// index 
router.get('/', (req, res) => {
    res.send('Lista dei post')
})

//show 
router.get('/:id', (req,res) => {
    const {id} = req.params;
    res.send(`Dettagli del post con id ${id}`);
})

// store 
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
})

// update 
router.put('/:id', (req,res) => {
    const {id} = req.params;
    res.send(`Modifica integrale del post con id ${id}`);
})

// modify 
router.patch('/:id', (req,res) => {
    const {id} = req.params;
    res.send(`Modifica parziale del post con id ${id}`);
})

// destroy 
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.send(`Eliminazione del post con id ${id}`);
})

module.exports = router;
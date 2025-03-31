// importare express
const express = require('express');

// funzione router 
const router = express.Router();

// importare controller 
const postsController = require('../controllers/posts-controller.js');

// registrare il body-parser => decodificare il body per far sì che venga letto
router.use(express.json()); // in formato json

// Creare rotte per le operazioni CRUD

// index 
router.get('/', postsController.index);

//show 
router.get('/:id', postsController.show);

// store 
router.post('/', postsController.store);

// update 
router.put('/:id', postsController.update);

// modify 
router.patch('/:id', postsController.modify);

// destroy 
router.delete('/:id', postsController.destroy);

// esportare router
module.exports = router;
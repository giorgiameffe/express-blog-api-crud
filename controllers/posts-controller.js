// importare posts
const posts = require('../data/posts.js');

// funzioni operazioni CRUD

function index (req, res) {
    // console.log(req.query);
    const tag = req.query.tag;
    let filteredPosts = posts;

    // se la richiesta contiene un filtro, filtrare i post
    if(tag) {
        filteredPosts = posts.filter(post => post.tags.includes(tag));
    }
    
    // restituire i post filtrati o i post originari
    res.json(filteredPosts);    
}

function show (req, res) {

    const id = parseInt(req.params.id);
    // cercare il post tramite l'id
    const post = posts.find(post => post.id === id);

    // controllare che esista il post con l'id inserito
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }
    // restituire il post in formato JSON
    res.json(post);
}

function store (req,res) {
    console.log(req.body);
    res.send('Creazione di un nuovo post');
}

function update (req,res) {
    const id = req.params.id;
    res.send(`Modifica integrale del post con id ${id}`);
}

function modify (req, res) {
    const id = req.params.id;
    res.send(`Modifica parziale del post con id ${id}`);
    
}

function destroy (req, res) {

    const id = parseInt(req.params.id);
    // cercare indice del post
    const post = posts.findIndex(post => post.id === id);

    // controllare che esista il post in base all'indice
    if(post < 0) {
        res.status(404);
        
        return res.json({
            status: 404,
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }

    posts.splice(post, 1);
    console.log(posts);
    // informare il client che la cancellazione è andata a buon fine
    res.sendStatus(204);
}

// esportazione 
module.exports = {index, show, store, update, modify, destroy};

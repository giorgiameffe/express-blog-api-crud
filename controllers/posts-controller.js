// funzioni operazioni CRUD

function index (req, res) {
    res.send('Lista dei post')
}

function show (req, res) {
    const {id} = req.params;
    res.send(`Dettagli del post con id ${id}`);
}

function store (req,res) {
    res.send('Creazione di un nuovo post');
}

function update (req,res) {
    const {id} = req.params;
    res.send(`Modifica integrale del post con id ${id}`);
}

function modify (req, res) {
    const {id} = req.params;
    res.send(`Modifica parziale del post con id ${id}`);
    
}

function destroy (req, res) {
    const {id} = req.params;
    res.send(`Eliminazione del post con id ${id}`);
}

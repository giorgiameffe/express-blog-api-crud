// importare express
const express = require('express');

// funzione express
const app = express();

// importare router 
const postsRouter = require('./routers/posts-router.js');
app.use('/posts', postsRouter);

// identificare porta 
const port = 4000;

app.listen(port, () => {
    console.log(`Server attivo sulla porta ${port}`);
})

// homepage
app.get('/', (req, res) => {
    res.send('Homepage');
})


const express = require('express');
const app = express();
const port = 8080;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/api', (req, res) => {
    res.json({mensaje: 'Hola a Todos, como estan??!!!'});
});

require('./routes/Books.Routes')(app);

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});

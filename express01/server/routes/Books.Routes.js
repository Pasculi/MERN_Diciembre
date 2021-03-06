const { listar, obtener, crear, actualizar, eliminar} = require('../controllers/Book.Controllers');

module.exports = (app) => {
    
    app.get('/api/books', listar);
    app.get('/api/books/:id', obtener);
    app.post('/api/books', crear);
    app.put('/api/books/:id', actualizar);
    app.delete('/api/books/:id', eliminar);
}
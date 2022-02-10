const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/product_manager_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conexión realizada a la base de datos"))
    .catch(err => console.log("Ocuurió un problema al conectarse a la base de datos", err));
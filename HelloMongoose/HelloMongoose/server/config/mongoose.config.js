const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BD_Pruebas", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conexión con Base de datos realizada"))
	.catch(err => console.log("Ocurrió un error al conectar la base de datos", err));
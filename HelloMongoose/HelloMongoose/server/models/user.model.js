const mongoose = require("mongoose");
const uniqueValidator = require ("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
	name: {
		type: "string",
		required: [true, "El nombre es requerido"],
		minlength: [3, "Debe tener mínimo 3 caracteres"],
		maxlength: [50, "Debe tener máximo 50 caracteres"]
	},
	age: {
		type: "number", required: [true, "La edad es requerida"]
	},
	email: {
		type: "string",
		required: [true, "El email es requerido"],
		unique: true,
	},
	timestamps: {
		type: "date",
		default: Date.now
	}
});


UserSchema.plugin(uniqueValidator, { message: "El {PATH} debe ser único" });
const User = mongoose.model("User", UserSchema);
module.exports = User;
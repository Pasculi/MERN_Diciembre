const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "El titulo es requerido"],
        },
        price: {
            type: Number,
            required: [true, "El precio es requerido"]
        },
        description: {
            type: String,
            required: [true, "Debe ingresar una descripción"]
        }
    }, { timestamp: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
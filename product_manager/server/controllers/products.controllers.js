const Product = require('../models/products.models');

module.exports = {
    getAll(req, res) {
        console.log("Aqui estoy");
        Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    create(req, res) {
        Product.create(req.body)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    getOne(req, res) {
        Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    update(req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    },

    delete(req, res) {
        Product.findByIdAndDelete(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}
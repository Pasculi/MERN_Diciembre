const productController = require("../controllers/products.controllers");

module.exports = (app) => {
    app.get("/api/products", productController.getAll);
    app.post("/api/products/create", productController.create);
    app.get("/api/products/:id", productController.getOne);
    app.put("/api/products/:id", productController.update);
    app.delete("/api/products/:id", productController.delete);
}
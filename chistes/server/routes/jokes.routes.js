const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/:id", JokesController.findOneSingleJokes);
    //app.get("/api/jokes/random", JokesController.findRandomJokes);
    app.post("/api/jokes/new", JokesController.createNewJokes);
    app.put("/api/jokes/update/:id", JokesController.updateExistingJokes);
    app.delete("/api/jokes/delete/:id", JokesController.deleteAnExistingJokes);
};
const Jokes = require("../models/jokes.model");

const findAllJokes = (req, res) => {
    Jokes.find()
        .then(allDaJokes => res.json({ users: allDaJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const findOneSingleJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJokes => res.json({ user: oneSingleJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const createNewJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJokes => res.json({ user: newlyCreatedJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const updateExistingJokes = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJokes => res.json({ user: updatedJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
const deleteAnExistingJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports = {
    findAllJokes,
    createNewJokes,
    findOneSingleJokes,
    updateExistingJokes,
    deleteAnExistingJokes
}
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const JokesSchema = new mongoose.Schema(
    {
        setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters"],
        unique: [true, "Setup must be unique"]
        },
        punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters"],
        unique: [true, "Punchline must be unique"],
        },
    },
    {timestamps: true}
);
JokesSchema.plugin(uniqueValidator, {message: '{PATH} must be unique'});
const Jokes = mongoose.model('Jokes', JokesSchema);
module.exports = Jokes;
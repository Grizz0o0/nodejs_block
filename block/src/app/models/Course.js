const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLenght: 255, default: "" },
    description: { type: String, maxLenght: 1000, default: "" },
    image: { type: String, maxLenght: 255 },
    createdAT: { type: Date, default: Date.now },
    updatedAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);

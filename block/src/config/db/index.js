const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
        console.log("Connected successfully!!!");
    } catch (err) {
        console.log("Connected failed!!!: " + err);
    }
}

module.exports = { connect };

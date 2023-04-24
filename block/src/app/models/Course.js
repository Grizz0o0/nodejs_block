const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLenght: 255, default: "" },
        description: { type: String, maxLenght: 1000, default: "" },
        image: { type: String, maxLenght: 255 },
        videoID: { type: String, maxLenght: 255, require: true },
        level: { type: String, maxLenght: 255 },
        slug: { type: String, slug: "name", unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", Course);

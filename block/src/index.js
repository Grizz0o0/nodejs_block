const morgan = require("morgan");
const express = require("express");
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const sassMiddleware = require("node-sass-middleware");
const todoRoute = require("./routes/todoRoute");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public")
}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(todoRoute);

app.get("*", (req, res) => res.send("404"));

const port = process.env.PORT || 8000;
mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(port, () => console.log(`Connection succeded on port: ${port}`)));
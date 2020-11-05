const express = require("express");
const routes = require("./routes/routes.js")
const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.listen(PORT, function() {
    console.log(`App is listening on PORT ${PORT}`);
});
const express = require("express");
const app = express();
const router = require("express").Router();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


require("./routes/htmlRoutes")(app);
require("./routes/routes")(router);


app.listen(PORT, function() {
    console.log(`App is listening on PORT ${PORT}`);
});
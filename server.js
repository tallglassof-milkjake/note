const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// api routes
require("./routes/routes")(app);
// html routes
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log(`App is listening on PORT ${PORT}`);
});
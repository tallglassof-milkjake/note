const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");
const fs = require("fs");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Send HTML to browser
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Send data to browser
const tastyNotes = fs.readFile("db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

    console.log(data);
});


// Recieve data from browser
app.post("/api/notes", function(req, res) {
    tastyNotes.push(req.body);
    res.json(true);
});


app.listen(PORT, function() {
    console.log(`App is listening on PORT ${PORT}`);
});
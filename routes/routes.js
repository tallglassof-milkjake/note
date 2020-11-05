const router = require("express").Router();
// const { route } = require("express/lib/router");
const path = require("path");
const Store = require("../db/store");

router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/api/notes", (req, res) => {
    Store.getNotes()
        .then((notes) = res.json(notes));
})
router.post("/api/notes", (req, res) => {
    Store.addNote(req.body)
        .then((notes) => res.json(notes));
});

module.exports = router;

console.log("Routes work");
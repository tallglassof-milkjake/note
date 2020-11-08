const Store = require("../db/store.js");

module.exports = function(router) {
    
    router.get("/api/notes", (req, res) => {
        Store.getNotes()
            .then((notes) = res.json(notes));
    })
    
    router.post("/api/notes", (req, res) => {
        Store.addNote(req.body)
            .then((notes) => res.json(notes));
    });
    
};



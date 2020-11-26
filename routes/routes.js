const database = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuidv1");
const path = require("path");

module.exports = function(app) {
    app.post("/api/notes", function(req, res) {
        // fs.readFile("../db/db.json", function(err, data) {
        //     if (err) throw err;

        //     let json = JSON.parse(data);
        //     let note = {
        //         title: req.body.title,
        //         text: req.bosy.text,
        //         id: uuid()
        //     }

        //     json.push(note);

        //     fs.writeFile("../db/db.json", JSON.stringify(json, null, 2), function(err) {
        //         if (err) throw err;
        //         res.send("200");
        //     });
        // });


        // let noteID = uuid();
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid()
        };

        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) throw err;

            const allNotes = JSON.parse(data);

            allNotes.push(newNote);

            fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
                if (err) throw err;
                res.send(database);
                console.log("Created Note");
            });
        });
    });

    app.get("/api/notes", function(req, res) {

        const notesRead = fs.readFileSync(path.join(__dirname, "../db/db.json"), {encoding: "utf-8"});
    
        res.json(JSON.parse(notesRead));

    });

    app.delete("/api/notes/:id", (req, res) => {
        const noteid = req.params.id;
        deleteNote(noteid);
        res.end();

    });

    function deleteNote(id){
        fs.readFile(path.join(__dirname, "../db/db.json"), function(err, data){
          var json = JSON.parse(data);
          for (let i = 0; i < json.length; i++){
            if (json[i].id === id){
              json.splice(i, 1);
            }
          };
      
          fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(json), function(err){
            if (err){
              console.error(err);
            }
          });
      })
      
    };
};





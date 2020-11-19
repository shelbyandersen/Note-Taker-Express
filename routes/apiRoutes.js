// Require
const fs = require("fs");
const path = require("path");
const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));

// Create function
module.exports = (app) => {
    // GET route
    app.get("api/notes", (req, res) => {
        res.json(notes)
    });
    app.get("/api/notes:id", (req, res) => {
        res.json(notes[Number(req.params.id)])
    })
    // POST: Read JSON file and Add it
    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        let uniqueId = (data.length).toString();
        newNote.id = uniqueId;
        notes.push(newNote);

    // POST: Rewrite JSON file
    fs.writeFileSync(path.join(__dirname, "../db/db.json", JSON.stringify(notes), function(err) {
        if (err) throw (err);
        res.json(data)}))
});

    // // Delete route
    //     app.delete("/api/notes/:id", (req, res) => {

    //     let id = req.params.id;
    //     let deleteNote = notes.filter((item) => item.id != id);
    //     const notesToDelete = JSON.parse(fs.readFileSync(path.join(__dirname, "./db/db.json")));
    //     fs.writeFileSync("./db.db.json", JSON.stringify(deleteNote));
    //     return res.json(notesToDelete);
    //     });

}
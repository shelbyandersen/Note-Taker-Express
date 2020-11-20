// Require
const fs = require("fs");
const path = require("path");
// const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));

// Create function
module.exports = (app) => {
    // GET route
    app.get("/api/notes", (req, res) => {
        const data = (fs.readFileSync(path.join(__dirname, "../db/db.json")));
        res.json(JSON.parse(data))
    });
    app.get("/api/notes:id", (req, res) => {
        res.json(data[Number(req.params.id)])
    })
    // POST: Read JSON file and Add it
    app.post("/api/notes", (req, res) => {
        const data = (fs.readFileSync(path.join(__dirname, "../db/db.json")));
        const notesArray = JSON.parse(data)
        console.log(notesArray)
        let newNote = req.body;
        let uniqueId = (notesArray.length).toString();
        newNote.id = uniqueId;
        notesArray.push(newNote);

    // POST: Rewrite JSON file
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesArray), function(err) {
        if (err) throw (err);
        res.json(JSON.parse(data))
    });
});

    // // Delete route [WIP]
        // app.delete("/api/notes/:id", (req, res) => {

        // });
        

}
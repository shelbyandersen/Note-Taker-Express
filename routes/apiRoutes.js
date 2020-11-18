// Require
const fs = require("fs");

// Create function
module.exports = (app) => {
    const notes = [
        {
            "title": "Test Title",
            "text": "Test text",
            "id": "001"
        }
    ];

    app.get("api/notes", (req, res) => {
        res.json(data)
    });

    app.get("/api/notes:id", (req, res) => {
        res.json(data[Number(req.params.id)])
    })
};

    // POST: Read JSON file and Add it
    // POST: Rewrite JSON file
//     app.post("/api/notes", (req, res) => {
//         notes.push(req.body);
//         res.json(notes)
//     })

//     app.delete("api/notes", (req, res) => {
//         notes.push(req.body);
//         res.json(notes)
//     })
// }
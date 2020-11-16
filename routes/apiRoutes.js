// Create function
module.exports = (app) => {
    const notes = [];

    app.get("api/notes", (req, res) => {
        res.json.notes
    })

    app.post("/api/notes", (req, res) => {
        notes.push(req.body);
        res.json(notes)
    })

    app.delete("api/notes", (req, res) => {
        notes.push(req.body);
        res.json(notes)
    })
}
// Require file path
const path = require("path");

// Create function
module.exports = (app) => {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}
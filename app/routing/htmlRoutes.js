// Dependency
var path = require("path")

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });

    app.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
      })
}


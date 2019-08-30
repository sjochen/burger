var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function (req,res) {
    res.render("index");
})
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});
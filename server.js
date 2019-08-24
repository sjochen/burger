var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function (req,res) {
    res.render("index");
})

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post("/api/burgers", function(req, res) {
//   burger.create([
//     "burgers_name", "devoured"
//   ], [
//     req.body.name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });
router.post("/api/burgers", function (req, res) {
  burger.create(
      "burger_name",
      req.body.burger_name,
      function (result) {
          // Send back the ID of the new quote
          res.json({result});
      });
});

router.put("/api/burgers/:id", function(req, res) {


  burger.update("devoured", req.body.devoured, "id", req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;

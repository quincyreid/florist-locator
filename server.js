const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(request, response) {
  response.render(__dirname + "/views/index.ejs");
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

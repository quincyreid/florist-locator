const express = require('express');
const app = express();
const florist = require('./routes/florist');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render(__dirname + "/views/index.ejs");
});

app.use(florist);

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

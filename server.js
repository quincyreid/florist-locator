const express = require("express");
const app = express();
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.APIKEY);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function(request, response) {
  response.render(__dirname + "/views/index.ejs");
});

app.post("/florists", (request, response) => {
  client.search({
    term: 'florists',
    location: request.body.florists,
  })
  .then(res => {
    let data = sortFloristsDistance(res.jsonBody.businesses);
    response.render(__dirname + "/views/florist.ejs", {data: data});
  })
  .catch(e => {
    console.log(e);
  });
})

// sort florists results by distance
function sortFloristsDistance(florists) {
  florists.sort((a, b) => {
    return a.distance - b.distance;
  });
  return florists;
}

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.APIKEY);

router.post('/florists', (request, response) => {
  client.search({
    term: 'florists',
    location: request.body.florists,
    sort_by: 'distance'
  })
  .then(res => {
    res.json(res.jsonBody.businesses);
  })
  .catch(e => {
    console.log(e);
  });
});

module.exports = router;
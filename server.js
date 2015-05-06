var express = require('express'),
  app = express(),
  advertisers = require('./data/advertisers.js');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

app.get('/advertisers', function (req, res) {
  res.json(advertisers);
});

app.get('/advertisers/:id', function (req, res) {
  var advertiser = advertisers.find(function (advertiser) {
    return advertiser.id == req.params.id;
  });

  if (advertiser) {
    res.json(advertiser);
  } else {
    res.status(404).send('Advertiser not found');
  }
});

var server = app.listen(8080, function () {
  var address = server.address();
  console.log('Advertisers API app listening at http://%s:%s',
    address.address, address.port);
});

var assert = new require("assert");

var PlaceSearch = require("../lib/PlaceSearch.js");
var config = require("./config.js");

var placeSearch = new PlaceSearch(config.apiKey, config.outputFormat);

var parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};

placeSearch(parameters, function (response) {
//  console.log(response);
  assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
});
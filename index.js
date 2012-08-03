var PlaceSearch = require("./lib/PlaceSearch.js");
var TextSearch = require("./lib/TextSearch.js");
var PlaceDetailsRequest = require("./lib/PlaceDetailsRequest.js");

module.exports = function (apiKey, outputFormat) {
  return {
    placeSearch:new PlaceSearch(apiKey, outputFormat),
    textSearch:new TextSearch(apiKey, outputFormat),
    placeDetailsRequest:new PlaceDetailsRequest(apiKey, outputFormat)
  };
};
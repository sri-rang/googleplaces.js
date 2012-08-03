var assert = new require("assert");

var TextSearch = require("../lib/TextSearch.js");
var config = require("./config.js");

var textSearch = new TextSearch(config.apiKey, config.outputFormat);

var parameters = {
  query:"restaurants in dublin"
};

textSearch(parameters, function (response) {
//  console.log(response);
  assert.notEqual(response.results.length, 0, "Text search must not return 0 results");
});
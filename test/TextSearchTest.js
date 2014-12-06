(function () {
    "use strict";

    var assert = require("assert");

    var TextSearch = require("../lib/TextSearch.js");
    var config = require("./config.js");

    var textSearch = new TextSearch(config.apiKey, config.outputFormat);

    var parameters = {
        query: "restaurants in dublin"
    };

    textSearch(parameters, function (error, response) {
        if (error) throw error;
        assert.notEqual(response.results.length, 0, "Text search must not return 0 results");
    });

})();


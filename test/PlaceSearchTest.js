(function () {
    "use strict";

    var assert = require("assert");

    var PlaceSearch = require("../lib/PlaceSearch.js");
    var config = require("./config.js");

    var placeSearch = new PlaceSearch(config.apiKey, config.outputFormat);

    var parameters = {
        location: [40.7127, -74.0059],
        types: "doctor"
    };

    placeSearch(parameters, function (error, response) {
        if (error) throw error;
        assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
    });

})();

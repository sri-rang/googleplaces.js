(function () {
    "use strict";

    var assert = require("assert");

    var RadarSearch = require("../lib/RadarSearch");
    var config = require("./config.js");

    var radarSearch = new RadarSearch(config.apiKey, config.outputFormat);

    var parameters = {
        location: [40.7127, -74.0059],
        types: "doctor"
    };

    RadarSearch(parameters, function (error, response) {
        if (error) throw error;
        assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
    });

})();

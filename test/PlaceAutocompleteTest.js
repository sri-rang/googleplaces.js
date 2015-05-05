(function () {
    "use strict";

    var assert = require("assert");

    var PlaceAutocomplete = require("../lib/PlaceAutocomplete.js");
    var config = require("./config.js");

    var placeAutocomplete = new PlaceAutocomplete(config.apiKey, config.outputFormat);

    var parameters = {
        input: 'sydney lyr'
    };
    placeAutocomplete(parameters, function (error, response) {
        if (error) throw error;
            assert.equal(response.status, "OK", "Place autocomplete request response status is OK");
    });

})();

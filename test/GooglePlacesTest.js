(function () {
    "use strict";

    var assert = require("assert");

    var config = require("./config.js");

    var GooglePlaces = require("../index.js");
    var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
    var parameters;

    /**
     * Place search - https://developers.google.com/places/documentation/#PlaceSearchRequests
     */
    parameters = {
        location: [-33.8670522, 151.1957362],
        types: "doctor"
    };
    googlePlaces.placeSearch(parameters, function (error, response) {
        if (error) throw error;
        assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
    });

    /**
     * Text search - https://developers.google.com/places/documentation/#TextSearchRequests
     */
    parameters = {
        query: "restaurants in dublin"
    };
    googlePlaces.textSearch(parameters, function (error, response) {
        if (error) throw error;
        assert.notEqual(response.results.length, 0, "Text search must not return 0 results");
    });

    /**
     * Place details requests - https://developers.google.com/places/documentation/#PlaceDetails
     */
    parameters = {
        location: [-33.8670522, 151.1957362],
        types: "doctor"
    };
    googlePlaces.placeSearch(parameters, function (error, response) {
        if (error) throw error;
        googlePlaces.placeDetailsRequest({reference: response.results[0].reference}, function (error, response) {
            if (error) throw error;
            assert.equal(response.status, "OK", "Place details request response status is OK");
        });
    });

})();

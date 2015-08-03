(function () {
    "use strict";

    var PlaceSearch = require("./lib/PlaceSearch.js");
    var RadarSearch = require("./lib/RadarSearch.js");
    var TextSearch = require("./lib/TextSearch.js");
    var PlaceDetailsRequest = require("./lib/PlaceDetailsRequest.js");
    var PlaceAutocomplete = require("./lib/PlaceAutocomplete.js");
    var AddEvent = require("./lib/AddEvent.js");
    var DeleteEvent = require("./lib/DeleteEvent.js");
    var EventDetails = require("./lib/EventDetails.js");
    var ImageFetch = require("./lib/ImageFetch.js");
    var NearBySearch = require('./lib/NearBySearch.js');

    module.exports = function (apiKey, outputFormat) {
        return {
            placeSearch: new PlaceSearch(apiKey, outputFormat),
            radarSearch: new RadarSearch(apiKey, outputFormat),
            textSearch: new TextSearch(apiKey, outputFormat),
            placeDetailsRequest: new PlaceDetailsRequest(apiKey, outputFormat),
            placeAutocomplete: new PlaceAutocomplete(apiKey, outputFormat),
            addEvent: new AddEvent(apiKey, outputFormat),
            deleteEvent: new DeleteEvent(apiKey, outputFormat),
            eventDetails: new EventDetails(apiKey, outputFormat),
            imageFetch: new ImageFetch(apiKey),
            nearBySearch: new NearBySearch(apiKey, outputFormat)

        };
    };

})();


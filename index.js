(function () {
    "use strict";

    const PlaceSearch = require("./lib/PlaceSearch.js");
    const RadarSearch = require("./lib/RadarSearch.js");
    const TextSearch = require("./lib/TextSearch.js");
    const PlaceDetailsRequest = require("./lib/PlaceDetailsRequest.js");
    const PlaceAutocomplete = require("./lib/PlaceAutocomplete.js");
    const AddEvent = require("./lib/AddEvent.js");
    const DeleteEvent = require("./lib/DeleteEvent.js");
    const EventDetails = require("./lib/EventDetails.js");
    const ImageFetch = require("./lib/ImageFetch.js");
    const NearBySearch = require('./lib/NearBySearch.js');

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


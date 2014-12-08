(function () {
    "use strict";

    var PlaceSearch = require("./lib/PlaceSearch.js");
    var TextSearch = require("./lib/TextSearch.js");
    var PlaceDetailsRequest = require("./lib/PlaceDetailsRequest.js");
    var AddEvent = require("./lib/AddEvent.js");
    var DeleteEvent = require("./lib/DeleteEvent.js");
    var EventDetails = require("./lib/EventDetails.js");
    var ImageFetch = require("./lib/ImageFetch.js");

    module.exports = function (apiKey, outputFormat) {
        return {
            placeSearch: new PlaceSearch(apiKey, outputFormat),
            textSearch: new TextSearch(apiKey, outputFormat),
            placeDetailsRequest: new PlaceDetailsRequest(apiKey, outputFormat),
            addEvent: new AddEvent(apiKey, outputFormat),
            deleteEvent: new DeleteEvent(apiKey, outputFormat),
            eventDetails: new EventDetails(apiKey, outputFormat),
            imageFetch: new ImageFetch(apiKey)
        };
    };

})();

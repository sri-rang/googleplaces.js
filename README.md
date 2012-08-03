googleplaces.js
===

A node.js library for the Google Places API

ugh?
---

googleplaces.js makes it easy to talk to the Google Places API from your server side Node.js application

can i use in the browser?
---

Google already maintains a dedicated client side JavaScript [library](https://developers.google.com/maps/documentation/javascript/places)

what's supported?
---

* [Places search](https://developers.google.com/places/documentation/#PlaceSearchRequests)
* [Text search](https://developers.google.com/places/documentation/#TextSearchRequests)
* [Place details request](https://developers.google.com/places/documentation/#PlaceDetails)

what's coming soon?
---

* [Events](https://developers.google.com/places/documentation/events)
* [Check-ins](https://developers.google.com/places/documentation/#PlaceCheckins)

can i contribute?
---

Yes, fork and hack away

get started
===

google
---

* Enable Google Places API on [Google API Console](https://code.google.com/apis/console)
* Create a server side API on [Google API Console](https://code.google.com/apis/console)
* Enable billing for more requests per day

code
---

    $ npm install googleplaces

config.js
---

    exports.apiKey = "..your api key here..";
    exports.outputFormat = "json";

place-search.js
---

    var config = require("./config.js");

    var GooglePlaces = require("googleplaces");
    var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
    var parameters;

    /**
     * Place search - https://developers.google.com/places/documentation/#PlaceSearchRequests
     */
    parameters = {
      location:[-33.8670522, 151.1957362],
      types:"doctor"
    };
    googlePlaces.placeSearch(parameters, function (response) {
      console.log(response.results);
    });

text-search.js
---

    var config = require("./config.js");

    var GooglePlaces = require("googleplaces");
    var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
    var parameters;

    /**
     * Text search - https://developers.google.com/places/documentation/#TextSearchRequests
     */
    parameters = {
      query:"restaurants in dublin"
    };
    googlePlaces.textSearch(parameters, function (response) {
      console.log(response.results);
    });

place-details-request.js
---

    var config = require("./config.js");

    var GooglePlaces = require("googleplaces");
    var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
    var parameters;

    /**
     * Place details requests - https://developers.google.com/places/documentation/#PlaceDetails
     */
    parameters = {
      location:[-33.8670522, 151.1957362],
      types:"doctor"
    };
    googlePlaces.placeSearch(parameters, function (response) {
      googlePlaces.placeDetailsRequest({reference:response.results[0].reference}, function (response) {
        console.log(response.result);
      });
    });

examples repo
---

[https://github.com/Srirangan/googleplaces.js-examples](https://github.com/Srirangan/googleplaces.js-examples)
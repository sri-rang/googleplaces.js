# googleplaces.js

A node.js library for the Google Places API

### ugh?

googleplaces.js makes it easy to talk to the Google Places API from your server side Node.js application

### can i use in the browser?

Google already maintains a dedicated client side JavaScript [library](https://developers.google.com/maps/documentation/javascript/places)

### what's supported in 0.3.0?

- [Places search](https://developers.google.com/places/documentation/#PlaceSearchRequests)
- [Place details request](https://developers.google.com/places/documentation/#PlaceDetails)
- [Text search](https://developers.google.com/places/documentation/#TextSearchRequests)
- [Events](https://developers.google.com/places/documentation/events)

### what's coming up next?

- [Place Actions](https://developers.google.com/places/documentation/actions)
- [Place Photos](https://developers.google.com/places/documentation/photos)
- [Check-ins](https://developers.google.com/places/documentation/#PlaceCheckins)
- [Query Autocomplete](https://developers.google.com/places/documentation/query)

### can i contribute?

Yes, fork, hack and send me a PR

# get started

### 1. google

- Enable Google Places API on [Google API Console](https://code.google.com/apis/console)
- Create a server side API on [Google API Console](https://code.google.com/apis/console)
- Enable billing for more requests per day

### 2. npm

    $ npm install googleplaces

### 3. configure

    # set environment variables
    export GOOGLE_PLACES_API_KEY = "your key here"
    export GOOGLE_PLACES_OUTPUT_FORMAT = "json"

# examples

### places search

    var GooglePlaces = require("googleplaces");
    var googlePlaces = new GooglePlaces(process.env.GOOGLE_PLACES_API_KEY, process.env.GOOGLE_PLACES_OUTPUT_FORMAT);
    var parameters;

    /**
     * Place search - https://developers.google.com/places/documentation/#PlaceSearchRequests
     */
    parameters = {
      location:[-33.8670522, 151.1957362],
      types:"doctor"
    };
    googlePlaces.placeSearch(parameters, function (error, response) {
      if (error) throw error;
      console.log(response.results);
    });

### places details

    var GooglePlaces = require("googleplaces");
    var googlePlaces = new GooglePlaces(process.env.GOOGLE_PLACES_API_KEY, process.env.GOOGLE_PLACES_OUTPUT_FORMAT);
    var parameters;

    /**
     * Place details requests - https://developers.google.com/places/documentation/#PlaceDetails
     */
    parameters = {
      location:[-33.8670522, 151.1957362],
      types:"doctor"
    };
    googlePlaces.placeSearch(parameters, function (error, response) {
      if (error) throw error;
      googlePlaces.placeDetailsRequest({reference:response.results[0].reference}, function (error, response) {
        if (error) throw error;
        console.log(response.result);
      });
    });

### text search

    var GooglePlaces = require("googleplaces");
    var googlePlaces = new GooglePlaces(process.env.GOOGLE_PLACES_API_KEY, process.env.GOOGLE_PLACES_OUTPUT_FORMAT);
    var parameters;

    /**
     * Text search - https://developers.google.com/places/documentation/#TextSearchRequests
     */
    parameters = {
      query:"restaurants in dublin"
    };
    googlePlaces.textSearch(parameters, function (error, response) {
      if (error) throw error;
      console.log(response.results);
    });

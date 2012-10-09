var assert = new require("assert");

var config = require("./config.js");

var GooglePlaces = require("../index.js");
var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
var parameters;

/**
 * Add Event - https://developers.google.com/places/documentation/actions#event_add
 */
parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};
googlePlaces.placeSearch(parameters, function (response) {
  parameters = {
    duration:60,
    summary:"I fell and can't get up!",
    reference:response.results[0].reference
  };
  googlePlaces.addEvent(parameters, function (response) {
    assert.equal(response.status, "OK", "Add Event request response status is OK");
  });
});

/**
 * Delete Event - https://developers.google.com/places/documentation/actions#event_delete
 */
parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};
googlePlaces.placeSearch(parameters, function (response) {
  parameters = {
    duration:60,
    summary:"I fell and can't get up!",
    reference:response.results[0].reference
  };
  googlePlaces.addEvent(parameters, function (response) {
    assert.equal(response.status, "OK", "Add Event request response status is OK");
    parameters = {
      event_id:response.event_id,
      reference:parameters.reference
    };

    googlePlaces.deleteEvent(parameters, function (response) {
      assert.equal(response.status, "OK", "Delete Event request response status is OK");
    });
  });
});

/**
 * Event Details - https://developers.google.com/places/documentation/actions#event_details
 */
parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};
googlePlaces.placeSearch(parameters, function (response) {
  parameters = {
    duration:60,
    summary:"I fell and can't get up!",
    reference:response.results[0].reference
  };
  googlePlaces.addEvent(parameters, function (response) {
    assert.equal(response.status, "OK", "Add Event request response status is OK");
    parameters2 = {
      event_id:response.event_id,
      reference:parameters.reference
    };

    googlePlaces.eventDetails(parameters2, function (response) {
      assert.equal(response.status, "OK", "Delete Event request response status is OK");
    });
  });
});

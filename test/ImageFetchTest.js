(function() {
  "use strict";
  var assert = new require("assert");

  var ImageFetch = require("../lib/ImageFetch.js");
  var config = require("./config.js");

  var imageFetch = new ImageFetch(config.apiKey);

  var parameters = {
    photoreference: "CnRnAAAAlga56tIplMiVPn9G-jTnsAi-ksp1grWXkb9n4K4AJe2jXnLEL-LmvXEc7fk-iM2H4SwMLdTnOgEjJxnqaiirh7Otci2vjt_81Ei4n0utbloIojJFsGfr2Hu7q969IzeJNqUvkgPf1SdTCP6ha8psMhIQN5CXx0ef7P2pkBnNlrdosBoUPyYsl-0caJPFu2DLwjkogoYtpYY",
    sensor: false
  };

  imageFetch(parameters, function (error, response) {
    if (error) throw error;
    assert.equal(response, "https://lh4.googleusercontent.com/-5QGMNRIGYO8/UBUFBc1V3yI/AAAAAAAABm4/-CLL9WLEGA0/s1600-w400/DSCN1836.JPG", "the response should be https://lh4.googleusercontent.com/-5QGMNRIGYO8/UBUFBc1V3yI/AAAAAAAABm4/-CLL9WLEGA0/s1600-w400/DSCN1836.JPG");
  });
})();

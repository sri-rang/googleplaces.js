(function() {
  "use strict";
  var querystring = require("querystring");
  var https = require("https");

  var GoogleImageResponseProcessor = require("./GoogleImageResponseProcessor.js");
  var validate = require("./validate.js");
  module.exports = function (apiKey) {
    return function (parameters, callback) {
      validate.apiKey(apiKey);
      parameters.maxwidth = parameters.maxwidth || 400;
      parameters.photoreference = parameters.photoreference || "";
      parameters.sensor = parameters.sensor || false;
      parameters.key = apiKey;
      
      var options = {
        hostname:"maps.googleapis.com",
        path:"/maps/api/place/photo" + "?" + querystring.stringify(parameters),
        method: "GET"
      };
      var request = https.request(options, new GoogleImageResponseProcessor(callback));
      request.on("error", function (error) {
       callback(new Error(error));
      });
      request.end();
    };
  };

})();
//https://maps.googleapis.com/maps/api/place/photo/?photoreference=CnRnAAAAlga56tIplMiVPn9G-jTnsAi-ksp1grWXkb9n4K4AJe2jXnLEL-LmvXEc7fk-iM2H4SwMLdTnOgEjJxnqaiirh7Otci2vjt_81Ei4n0utbloIojJFsGfr2Hu7q969IzeJNqUvkgPf1SdTCP6ha8psMhIQN5CXx0ef7P2pkBnNlrdosBoUPyYsl-0caJPFu2DLwjkogoYtpYY&sensor=false&maxwidth=400&key=AIzaSyAICo5JmmmHgF9AtH6mTz0hdImT2PG2jXQ

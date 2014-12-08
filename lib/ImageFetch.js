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

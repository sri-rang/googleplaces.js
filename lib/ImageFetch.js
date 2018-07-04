(function() {
  "use strict";
  const querystring = require("querystring");
  const https = require("https");

  const GoogleImageResponseProcessor = require("./GoogleImageResponseProcessor.js");
  const validate = require("./validate.js");
  module.exports = function (apiKey) {
    return function (parameters, callback) {
      validate.apiKey(apiKey);
      parameters.maxwidth = parameters.maxwidth || 400;
      parameters.photoreference = parameters.photoreference || "";
      parameters.sensor = parameters.sensor || false;
      parameters.key = apiKey;

      const options = {
        hostname:"maps.googleapis.com",
        path:"/maps/api/place/photo" + "?" + querystring.stringify(parameters),
        method: "GET"
      };
      const request = https.request(options, new GoogleImageResponseProcessor(callback));
      request.on("error", function (error) {
       callback(new Error(error));
      });
      request.end();
    };
  };

})();

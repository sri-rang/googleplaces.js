(function () {
    "use strict";

    var querystring = require("querystring");
    var https = require("https");

    var HttpResponseProcessor = require("./HttpResponseProcessor.js");
    var validate = require("./validate.js");

    module.exports = function (apiKey, outputFormat) {
        return function (parameters, callback) {
            validate.apiKey(apiKey);
            validate.outputFormat(outputFormat);
            parameters.key = apiKey;
            parameters.location = parameters.location || "-33.8670522,151.1957362";
            if (typeof parameters.location === "object") parameters.location = parameters.location.toString();
            if (parameters.rankby) parameters.radius = parameters.radius || 500;
            parameters.sensor = parameters.sensor || false;


            var options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/nearbysearch/" + outputFormat + "?" + querystring.stringify(parameters)
            };
            var request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();

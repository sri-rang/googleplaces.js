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
            //Required parameters
            parameters.key = apiKey;
            parameters.input = parameters.input || 'sydney lyr';

            if (typeof parameters.location === "object") parameters.location = parameters.location.toString();

            var options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/autocomplete/" + outputFormat + "?" + querystring.stringify(parameters)
            };
            var request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();

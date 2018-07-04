(function () {
    "use strict";

    const querystring = require("querystring");
    const https = require("https");

    const HttpResponseProcessor = require("./HttpResponseProcessor.js");
    const validate = require("./validate.js");

    module.exports = function (apiKey, outputFormat) {
        return function (parameters, callback) {
            validate.apiKey(apiKey);
            validate.outputFormat(outputFormat);
            //Required parameters
            parameters.key = apiKey;
            parameters.input = parameters.input || 'sydney lyr';

            if (typeof parameters.location === "object") parameters.location = parameters.location.toString();

            const options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/autocomplete/" + outputFormat + "?" + querystring.stringify(parameters)
            };
            const request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();

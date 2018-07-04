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
            parameters.key = apiKey;
            parameters.location = parameters.location || "-33.8670522,151.1957362";
            if (typeof parameters.location === "object") parameters.location = parameters.location.toString();
            if (!parameters.rankby) parameters.radius = parameters.radius || 500;

            const options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/nearbysearch/" + outputFormat + "?" + querystring.stringify(parameters)
            };
            const request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();

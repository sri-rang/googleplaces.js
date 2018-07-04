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
            parameters.sensor = parameters.sensor || false;
            if (!parameters.reference && !parameters.placeid) callback(new Error("Place reference or placeid is required"));
            const options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/details/" + outputFormat + "?" + querystring.stringify(parameters)
            };
            const request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();

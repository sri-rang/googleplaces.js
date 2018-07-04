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
            parameters.query = parameters.query || "restaurant";
            parameters.sensor = parameters.sensor || false;
            parameters.pagetoken = parameters.pagetoken || '';
            parameters._ = (new Date()).getTime().toString(36);
            if (typeof parameters.location === "object") parameters.location = parameters.location.toString();
            const options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/textsearch/" + outputFormat + "?" + querystring.stringify(parameters)
            };
            const request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();

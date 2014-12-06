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
            parameters.sensor = parameters.sensor || false;
            if (!parameters.reference && !parameters.placeid) callback(new Error("Place reference or placeid is required"));
            var options = {
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/details/" + outputFormat + "?" + querystring.stringify(parameters)
            };
            var request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });
            request.end();
        };
    };

})();

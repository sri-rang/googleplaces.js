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

            const url_params = {
                key: apiKey,
                sensor: parameters.sensor || false
            };

            delete parameters.sensor;

            if (!parameters.duration) callback(new Error("Event duration is required"));
            if (parseInt(parameters.duration) !== parameters.duration) callback(new Error("Event duration must be an integer"));
            if (!parameters.summary) callback(new Error("Event summary is required"));
            if (!parameters.reference) callback(new Error("Place reference is required"));
            const options = {
                method: "POST",
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/event/add/" + outputFormat + "?" + querystring.stringify(url_params)
            };

            const request = https.request(options, new HttpResponseProcessor(outputFormat === "json", callback));
            request.on("error", function (error) {
                callback(new Error(error));
            });

            request.write(JSON.stringify(parameters));
            request.end();
        };
    };

})();

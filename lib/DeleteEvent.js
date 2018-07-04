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

            if (!parameters.event_id) callback(new Error("event_id is required"));
            if (!parameters.reference) callback(new Error("Place reference is required"));
            const options = {
                method: "POST",
                hostname: "maps.googleapis.com",
                path: "/maps/api/place/event/delete/" + outputFormat + "?" + querystring.stringify(url_params)
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

(function () {
    "use strict";

    exports.apiKey = function (apiKey) {
        if (!apiKey) callback(new Error("apiKey must not be null"));
    };

    exports.outputFormat = function (outputFormat) {
        var validFormats = ["json", "xml"];
        if (validFormats.indexOf(outputFormat) === -1)  callback(new Error("outputFormat must be 'json' or 'xml'"));
    };

})();

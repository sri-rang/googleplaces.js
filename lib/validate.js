(function () {
    'use strict';

    exports.apiKey = function (apiKey) {
        if (!apiKey) {
            throw new Error('apiKey must not be null');
        }
    };

    exports.outputFormat = function (outputFormat) {
        if (!['json', 'xml'].includes(outputFormat)) {
            throw new Error("outputFormat must be 'json' or 'xml'");
        }
    };

})();

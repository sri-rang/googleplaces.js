(function () {
    "use strict";

    /**
     * Merge the data chunks of response and pass to callback
     *
     * @param parseJson
     * @param callback
     * @return {Function}
     */
    module.exports = function (parseJson, callback) {
        return function (response) {
            var responseData = "";
            response.setEncoding("utf8");
            response.on("data", function (chunk) {
                responseData += chunk;
            });
            response.on("end", function () {
                if (parseJson) responseData = JSON.parse(responseData);
                callback(null, responseData);
            });
        };
    };

})();

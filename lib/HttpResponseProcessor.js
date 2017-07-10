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
                if (parseJson) {
                    //Google sometimes returns responses in HTML format (which is weird), so we need to guard from crashes
                    try {
                        responseData = JSON.parse(responseData);
                        if(responseData.status !== 'OK') {
                            var error = new Error(responseData.error_message || responseData.status);
                            error.name = responseData.status;
                            throw error;
                        }
                    }
                    catch (e) {
                        callback(e, {});
                        return;
                    }
                }
                callback(null, responseData);
            });
        };
    };

})();

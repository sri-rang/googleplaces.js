(function() {
  "use strict";
  module.exports = function (callback) {
    return function (response) {
      var responseData = "";
      response.on("data", function (chunk) {
        if (response.headers['location']) {
          responseData = response.headers['location'];
          callback(null, responseData);
        }
      });
    };
  };
})();

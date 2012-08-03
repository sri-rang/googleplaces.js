exports.apiKey = function (apiKey) {
  if (!apiKey) throw new Error("apiKey must not be null");
};
exports.outputFormat = function (outputFormat) {
  var validFormats = ["json", "xml"];
  if (validFormats.indexOf(outputFormat) === -1)  throw new Error("outputFormat must be 'json' or 'xml'");
};
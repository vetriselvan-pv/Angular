let JavaScriptObfuscator = require("webpack-obfuscator");

module.exports = {
  module: {},
  plugins: [
    new JavaScriptObfuscator(
      {
        debugProtection: true,
        disableConsoleOutput: true,
        renameGlobals : true,
        transformObjectKeys : false
      },
      ["vendor.js"]
    ),
  ],
};
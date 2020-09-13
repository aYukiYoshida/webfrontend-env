const { ModuleKind } = require("typescript");

module.exports = {
  plugins: ["@babel/plugin-transform-arrow-functions"],
  "presets": [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ]
};

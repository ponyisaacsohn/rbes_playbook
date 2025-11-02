const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Use markdown-it with relaxed line break handling
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,   // <-- THIS is the key: disables <br> for single newlines
    linkify: true
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "docs"
    }
  };
};

module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/", // ensures CSS and links work both locally and on GitHub Pages
    dir: {
      input: "src",
      output: "docs"
    }
  };
};

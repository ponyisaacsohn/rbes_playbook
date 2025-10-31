module.exports = function (eleventyConfig) {
  // Force Eleventy to copy your assets folder properly
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes"
    },
    markdownTemplateEngine: "njk"
  };
};

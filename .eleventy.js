module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addFilter("date", (value, format) => { const date = new Date(); return date.getFullYear(); });
  return {
    dir: { input: "src", output: "docs", includes: "_includes" },
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

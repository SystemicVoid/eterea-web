module.exports = function(eleventyConfig) {
  // Copy the `css` directory to the output folder
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/assets/css/");
  
  // Add support for blog posts collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/blog/**/*.md");
  });
  
  // Add support for disciplines collection
  eleventyConfig.addCollection("disciplinas", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/disciplinas/**/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
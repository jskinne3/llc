
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("test.json");
  eleventyConfig.addPassthroughCopy(".well-known/webcat/bundle.json");
  eleventyConfig.addPassthroughCopy(".well-known/webcat/enrollment.json");
  eleventyConfig.addPassthroughCopy(".well-known/webcat/manifest.json");

  return {};
};

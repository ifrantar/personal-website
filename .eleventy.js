module.exports = function(eleventyConfig) {

  // Include static assets
  eleventyConfig.addWatchTarget('./src/scss');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/images');
    
  return {
        dir: {
            input: "src",
            output: "dist"
        }
  };

};
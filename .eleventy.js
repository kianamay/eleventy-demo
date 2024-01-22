module.exports = function(eleventyConfig) {
    // Set custom directories for input, output, includes, and data
    // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/style.css");
   // Find and copy any `png` files in any folder to _site/img
  // Does not keep the same directory structure.
  eleventyConfig.addPassthroughCopy({"**/*.png": "img"});

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("css/fonts");
    return {
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  };

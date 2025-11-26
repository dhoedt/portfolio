const less = require('less');
const path = require('path');
const fs = require('fs').promises;

module.exports = function(eleventyConfig) {

  // -------------------
  // Passthrough Copies
  // -------------------

  // Copy public folder as-is (compiled CSS, JS)
  eleventyConfig.addPassthroughCopy('public');

  // Copy source images to output
  eleventyConfig.addPassthroughCopy('src/assets/images');

  // -------------------
  // Filters
  // -------------------

  // Format dates
  eleventyConfig.addFilter('readableDate', dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // -------------------
  // Less Compilation
  // -------------------

  // Compile Less on build
  eleventyConfig.on('eleventy.before', async () => {
    const lessInput = await fs.readFile('styles/main.less', 'utf8');

    try {
      const result = await less.render(lessInput, {
        paths: [path.resolve(__dirname, 'styles')],
        compress: process.env.NODE_ENV === 'production',
        sourceMap: process.env.NODE_ENV !== 'production' ? {
          sourceMapFileInline: true
        } : false
      });

      await fs.mkdir('public/css', { recursive: true });
      await fs.writeFile('public/css/main.css', result.css);

      if (result.map) {
        await fs.writeFile('public/css/main.css.map', result.map);
      }

      console.log('✓ Less compiled successfully');
    } catch (error) {
      console.error('✗ Less compilation error:', error);
    }
  });

  // -------------------
  // Dev Server
  // -------------------

  // Watch Less files for changes
  eleventyConfig.addWatchTarget('styles/**/*.less');

  // Browser sync options
  eleventyConfig.setBrowserSyncConfig({
    files: ['_site/**/*'],
    open: true
  });

  // -------------------
  // Configuration
  // -------------------

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
      layouts: '_includes/layouts'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};

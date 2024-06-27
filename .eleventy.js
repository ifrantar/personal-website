const rssPlugin = require('@11ty/eleventy-plugin-rss');
// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = eleventyConfig => {

    // Add filters
    eleventyConfig.addFilter('dateFilter', dateFilter);
    eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

    // Plugins
    eleventyConfig.addPlugin(rssPlugin);

    // Include static assets
    eleventyConfig.addWatchTarget('./src/scss');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/cv');

    // Returns work items, sorted by display order
    // eleventyConfig.addCollection('products', collection => {
    //     return collection
    //     .getFilteredByGlob('./src/products/*.md')
    //     .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    // });

    // eleventyConfig.addCollection('products', collection => {
    //     return collection
    //       .getFilteredByGlob('./src/products/*.md')
    //       .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1))
    //       .filter(x => x.data.featured);
    // });

    // Returns a collection of blog posts in reverse date order
    eleventyConfig.addCollection('notes', collection => {
        return [...collection.getFilteredByGlob('./src/notes/*.md')].reverse();
    });

    // Generate folders based on note titles - I'LL WORK AROUND THIS LATER.
    // eleventyConfig.on('afterBuild', () => {
    //     const notes = eleventyConfig.collections.notes;

    //     if (Array.isArray(notes)) {
    //     notes.forEach(note => {
    //         const noteTitle = post.data.title;
    //         const folderName = noteTitle.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes and convert to lowercase
    //         const folderPath = path.join('/src/notes', folderName);

    //         if (!fs.existsSync(folderPath)) {
    //         fs.mkdirSync(folderPath, { recursive: true }); // Ensure parent directories are created if they don't exist
    //         console.log(`Created folder: ${folderPath}`);
    //         }
    //     });
    //     } else {
    //     console.error("Notes collection is not an array");
    //     }
    // });

    // Returns a list of people ordered by filename
    // eleventyConfig.addCollection('people', collection => {
    //     return collection.getFilteredByGlob('./src/team/*.md').sort((a, b) => {
    //     return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
    //     });
    // });

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    eleventyConfig.setUseGitIgnore(false);

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public"
        }
    }
}
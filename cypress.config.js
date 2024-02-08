const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    baseUrl: 'https://academybugs.com/find-bugs',
    specPattern: 'cypress/e2e/**.spec.js',
    watchForFileChanges: false,
    video: true,
    viewportHeight: 1920,
    viewportWidth:1080,
    reporter: 'junit'
  },
});

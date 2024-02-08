const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    baseUrl: process.env.BASE_URL,
    watchForFileChanges: false,
    video: true,
    viewportHeight: 1920,
    viewportWidth:1080,
    reporter: 'junit'
  },
});

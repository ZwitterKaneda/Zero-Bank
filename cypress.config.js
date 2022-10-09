const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xun7jg',
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://zero.webappsecurity.com/',
  },
});

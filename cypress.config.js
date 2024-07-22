const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts: true,
    reportDir: 'mocha/reports',
    reportPageTitle: 'First Report ecommerce site',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video :true,
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

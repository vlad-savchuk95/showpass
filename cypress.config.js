const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://www.showpass.com/",
    env: {
      userEmail : "traverse8@gmail.com", 
      userPassword: "password123$",
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
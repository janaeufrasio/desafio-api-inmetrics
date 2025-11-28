const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: 'https://serverest.dev',
    setupNodeEvents(on, config) {}
  }
})

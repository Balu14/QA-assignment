const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videosFolder: 'Report/Videos',
  screenshotsFolder: 'Report/ScreenShot',
  video:true,
  e2e: {
    baseUrl:'https://wave-trial.getbynder.com/login/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

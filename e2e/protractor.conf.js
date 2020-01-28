// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './**/*.feature'
  ],
  cucumberOpts: {
    require: './**/*.steps.js',
    tags: false,
    format: [],
    profile: false,
    'no-source': true
  },
  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};

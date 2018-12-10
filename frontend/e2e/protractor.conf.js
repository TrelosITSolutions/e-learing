// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
<<<<<<< HEAD:frontend/e2e/protractor.conf.js
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
=======
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
>>>>>>> e05683a3eeb88b54b4feaab8f620d854e9cedf53:frontend/protractor.conf.js
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
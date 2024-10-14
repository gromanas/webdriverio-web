import { config as wdioConfig } from './wdio.shared.conf.mjs';
import {join} from "path";

// ========
// Sauce Labs
// ========
export const config = {
  ...wdioConfig,
  maxInstances: 4,
  // ========
  // Capabilities
  // ========
  //The number of containers for selenoid is configured in docker-compose by adding --limit argument in command
  // config.maxInstances = 5;
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  path: '/wd/hub',
  port: 4444,
  // ========
  // Services
  // ========
  services: [
    [
      'visual',
      // The options
      {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), './tests/imageBaseline/'),
        formatImageName: '{tag}-{browserName}',
        screenshotPath: join(process.cwd(), '.tmp/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        hideScrollBars: true,
        scaleImagesToSameSize: true,
      },
    ],
  ],

  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // Selenoid max instances referred into docker-compose file.By default is 5.If you want to change it add --limit argument in the command which is in docker-compose
      //  maxInstances: 10
      //
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ["ignore-certificate-errors-spki-list", "--ignore-certificate-errors", "window-size=1920,1080" ],
      },
      "goog:loggingPrefs": {
        browser: "INFO",
      },
      'wdio-ics:options': {
        logName: 'chrome-latest',
      },
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
  ]
};


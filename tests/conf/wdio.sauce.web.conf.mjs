import { config as wdioConfig } from './wdio.sauce.conf.mjs';
import {join} from "path";

const defaultEdgeSauceOptions = {
  build: `Edge-HAU-Sauce-Demo-app-${new Date().getTime()}`,
  screenResolution: '1920x1080',
};

const defaultSafariSauceOptions = {
  build: `Safari-HAU-Sauce-Demo-app-${new Date().getTime()}`,
  screenResolution: '1920x1440',
};

// ========
// Sauce Labs
// ========
export const config = {
  ...wdioConfig,
  services: [
    [
      'sauce',
      {
        sauceConnect: true,
        connectVersion: 'latest',
      },
    ],
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
  maxInstances: 4,
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 2,
      //
      browserName: 'MicrosoftEdge',
      browserVersion: 'latest',
      platformName: 'Windows 11',
      acceptInsecureCerts: true,
      'sauce:options': {
        ...defaultEdgeSauceOptions,
      },

      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 2,
      //
      browserName: 'safari',
      browserVersion: 'latest', // browser version
      platformName: 'macOS 10.14', // OS platform
      'sauce:options': {
        ...defaultSafariSauceOptions,
      },
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
    // TODO there are issues with Safari 13
    // {
    //   // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    //   // grid with only 5 firefox instances available you can make sure that not more than
    //   // 5 instances get started at a time.
    //   maxInstances: 2,
    //   //
    // browserName: 'safari',
    // browserVersion: '13.1', // browser version
    // platformName: 'macOS 10.15', // OS platform
    // 'sauce:options': {
    //   ...defaultBrowserSauceOptions,
    // },
    //   'apple:safari.options': {
    //     technologyPreview: true,
    //   },
    //
    //   If outputDir is provided WebdriverIO can capture driver session logs
    //   it is possible to configure which logTypes to include/exclude.
    //   excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    //   excludeDriverLogs: ['bugreport', 'server'],
    // },
  ]
};
// ==================
// Specify Test Files
// ==================
// config.specs = ['./tests/specs/web/**/func/*.spec.js','./tests/specs/common/**/*.spec.js'];
//
// config.suites = {
//   regressionSauceWeb: ['./tests/specs/web/**/func/*.spec.js','./tests/specs/common/**/*.spec.js'],
// };

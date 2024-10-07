import { config as wdioConfig } from './wdio.shared.conf.mjs';

export const config = {
  ...wdioConfig,
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 1,
      //
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--use-mobile-user-agent', '--hide-scrollbars', '--disable-popup-blocking', '--suppress-message-center-popups', "--disable-search-engine-choice-screen"],
        mobileEmulation: {
          "deviceMetrics": {
            "width": 360,
            "height": 740,
            "pixelRatio": 4
          },
          "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Mobile Safari/537.36",
        },
      },
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    }
  ]
}

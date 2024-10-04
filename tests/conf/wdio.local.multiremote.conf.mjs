import { config as wdioConfig } from './wdio.shared.conf.mjs';


export const config = {
    ...wdioConfig,
    maxInstances: 3,
    capabilities: [
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [ "ignore-certificate-errors-spki-list", "--ignore-certificate-errors", "window-size=1920,1080", "--disable-search-engine-choice-screen" ],
            },
        },
        // {
        //     browserName: 'MicrosoftEdge',
        // },
        {
            browserName: 'firefox',
            port: 4445
        },
        {
            browserName: 'safari',
            port: 4446
        }
    ]
};

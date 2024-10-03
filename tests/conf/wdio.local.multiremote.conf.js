const { config } = require('./wdio.shared.conf');

// ========
// Capabilities
// ========
config.maxInstances = 3;
//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://docs.saucelabs.com/reference/platforms-configurator
//
config.capabilities = [
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
];

exports.config = config;

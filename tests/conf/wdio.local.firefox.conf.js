const { config } = require('./wdio.shared.conf');

// ========
// Capabilities
// ========
// config.maxInstances = 1;
//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://docs.saucelabs.com/reference/platforms-configurator
//
config.capabilities = [
    {
        browserName: 'firefox',
        port: 4445
    }
];

exports.config = config;

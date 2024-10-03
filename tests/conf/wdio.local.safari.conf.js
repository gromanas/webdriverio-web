const { config } = require('./wdio.shared.conf');

// ========
// Capabilities
// ========
//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://docs.saucelabs.com/reference/platforms-configurator
//
config.capabilities = [
    {
        browserName: 'safari',
        port: 4446
    }
];

exports.config = config;

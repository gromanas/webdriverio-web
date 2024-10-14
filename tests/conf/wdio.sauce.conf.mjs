import { config as wdioConfig } from './wdio.shared.conf.mjs';

// ========
// Sauce Labs
// ========
export const config = {
    ...wdioConfig,
    specFileRetries: 2,
    region: 'eu',
    user: process.env.SAUCELABS_USERNAME,
    key: process.env.SAUCELABS_KEY
};

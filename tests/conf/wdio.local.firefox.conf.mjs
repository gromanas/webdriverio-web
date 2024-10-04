import { config as wdioConfig } from './wdio.shared.conf.mjs';

export const config = {
    ...wdioConfig,
    capabilities: [
        {
            browserName: 'firefox',
            port: 4445
        }
    ]
};

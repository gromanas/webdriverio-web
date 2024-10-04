import { config as wdioConfig } from './wdio.shared.conf.mjs';


export const config = {
    ...wdioConfig,
    capabilities: [
        {
            browserName: 'safari',
            port: 4446
        }
    ]
};

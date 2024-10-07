import { config as wdioConfig } from './wdio.shared.conf.mjs';
import {join} from "path";

export const config = {
    ...wdioConfig,
    // ========
    // Capabilities
    // ========
    capabilities: [
        {
            // maxInstances can get overwritten per capability. So if you have an in-house Selenium
            // grid with only 5 firefox instances available you can make sure that not more than
            // 5 instances get started at a time.
            browserName: 'chrome',
            browserVersion: 'latest',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ["ignore-certificate-errors-spki-list", "--ignore-certificate-errors", "window-size=1920,1080", "--disable-search-engine-choice-screen"],
            },
        }
    ],
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
    ]
};

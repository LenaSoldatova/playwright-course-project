import { defineConfig } from '@playwright/test';
import './tests/setup';

export default defineConfig({
    testDir: './tests',
    retries: 1,
    use: {
        baseURL: 'https://www.fophelp.pro/',
        browserName: 'chromium',
        headless: true,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    reporter: [
        ['list'],
        ['html'],
        ['allure-playwright']
    ]
});

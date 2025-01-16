import { defineConfig } from "playwright/test";

export default defineConfig({
    testDir: './',
    timeout: 5 * 1000, // 5 second timeout for each test.
    expect: {
        timeout: 3000, // timeout for expect assertions.
    },
    projects:[
        {
            name: "API Tests",
            testMatch: '/api/*.test.ts', //Match tests under api folder.
            use: {
                baseURL: 'https://restful-booker.herokuapp.com'
            }
        },
        {
            name: "Frontend Test",
            testMatch: '**/frontend/**/*.test.ts', //Match test under frontend folder.
            use: {
                browserName: 'chromium', //use chromium
                headless: true,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
                baseURL: 'https://the-internet.herokuapp.com'
            }
        }
    ],
    use: {
        //share context options
        trace: 'retain-on-failure'
    },
    outputDir: 'test-results/',
    reporter: [
        //generate reports
        ['list'],
        ['html',
            {open: 'on-failure'}
        ]
    ]
});
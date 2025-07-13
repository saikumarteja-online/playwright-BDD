import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, chromium, Page, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;

export const pageFixture = {
    page: undefined as Page | undefined,
    context: undefined as BrowserContext | undefined,
};

BeforeAll(async function() {
    browser = await chromium.launch({ headless: false });
});

Before(async function() {
    context = await browser.newContext();
    pageFixture.page = await context.newPage();
    pageFixture.context = context;
});

After(async function() {
    // Only close the page and context, keep browser open
    if (pageFixture.page) {
        await pageFixture.page.close();
    }
    if (pageFixture.context) {
        await pageFixture.context.close();
    }
});

AfterAll(async function() {
    // Close the browser at the very end
    if (browser) {
        await browser.close();
    }
});

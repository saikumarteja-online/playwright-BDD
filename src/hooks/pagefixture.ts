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


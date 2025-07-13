import { After } from '@cucumber/cucumber';
import { pageFixture } from './pagefixture';
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";



After(async function (scenario) {
  if (pageFixture.page) {
    const screenshot = await pageFixture.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
});
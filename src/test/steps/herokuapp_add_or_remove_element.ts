import { Given, When, Then, IWorld } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pagefixture';
import { addElement, addElementButton, deleteElement } from '../../helper/herokuapp';
import { expect } from '@playwright/test';
import { Herokuapp } from '../../pageobj/herokuapp';
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
import path from 'path';

const herokuapp = new Herokuapp();
Given('I open the Herokuapp website', { timeout: 30000 }, async function () {
    await pageFixture.page?.goto('http://the-internet.herokuapp.com');
});


When('I add an element', async function (this: IWorld) {
    await addElement();
    await addElementButton();
    // if (pageFixture.page) {
    //     var screenshotBuffer = await pageFixture.page.screenshot({path:'screenshot.png', fullPage: true});
    //     await allure.attachment("Screenshot", screenshotBuffer, ContentType.PNG);
    //     await allure.attachmentPath("Screenshot", "./", {
    //     contentType: ContentType.PNG,
    //     fileExtension: "png",
    // });
    // console.log("Element added and screenshot taken.");
    // }

    
});

Then('I should see the element added', async function () {
    const isVisible = await herokuapp.getDeleteButton().isVisible();
    expect(isVisible).toBeTruthy();
    console.log("Element is visible after addition.");
});

When('I remove the element', async function () {
    await deleteElement();
});

Then('I should not see the element anymore', async function () {
    const isVisible = await herokuapp.getDeleteButton().isVisible();
    expect(isVisible).toBeFalsy();
});
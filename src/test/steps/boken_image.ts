import { When, Then } from "@cucumber/cucumber";
import {naviagtetoSite, checkForBrokenImage} from '../../helper/herokuapp';

When('I check the broken image', async function () {
    await naviagtetoSite()
   });

Then('I should see the broken image', async function () {
         await checkForBrokenImage();
    });
import { When, Then } from "@cucumber/cucumber";
import {checkForBrokenImage, checkCheckbox} from '../../helper/herokuapp';
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pagefixture";

When('I check the checkbox',{timeout:30000} ,async function () {
          await checkCheckbox();
           
    });

Then('I should see the checkbox checked', async function () {
       
       const checkboxLocators = await pageFixture?.page?.locator('input[type="checkbox"]').all();
       const checkboxStates = [];
       for (const locator of checkboxLocators? checkboxLocators : []) {
              checkboxStates.push(await locator.isChecked());
       }
       console.log(checkboxStates);
}

    );
import { Then, When } from "@cucumber/cucumber";

import { Herokuapp } from "../../pageobj/herokuapp";

var herokuapp = new Herokuapp();
Then('I should see the context menu displayed',{timeout:2000} ,async function () {
       await herokuapp.getContextMenu().click({ button: 'right' });  
    });

When('I right click on the context menu', async function () {
    await herokuapp.getopenContextMenu().click();
          
    });
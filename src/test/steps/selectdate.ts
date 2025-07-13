import {Given , When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import {Dateformater} from '../../helper/calenderHelper';
import { Calender } from '../../pageobj/calender';
import { dateSelector } from '../../helper/calenderHelper';
import {verifySelectedDate} from '../../helper/calenderHelper';
import * as allure from 'allure-js-commons'; // Import allure if needed
import { ContentType } from 'allure-js-commons';



var c = new Calender();
 Given('I open the calender page',{ timeout: 30000 }, async function () {
           await pageFixture.page?.goto('https://www.hyrtutorials.com/p/calendar-practice.html');
           
         });

 When('I select the date {string}', async function (string) {
    await dateSelector(string);
    
});

Then('I should see the selected date {string}', async function (string) {
              
         expect(verifySelectedDate(await c.getCalenderInputfield().inputValue())).toBe(string)
         });




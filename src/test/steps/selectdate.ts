import {Given , When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import {Dateformater} from '../../helper/calenderHelper';
import { Calender } from '../../pageobj/calender';
import { dateSelector } from '../../helper/calenderHelper';

var c = new Calender();
 Given('I open the calender page',{ timeout: 30000 }, async function () {
           await pageFixture.page?.goto('https://www.hyrtutorials.com/p/calendar-practice.html');
         });

 When('I select the date {string}', async function (string) {
         await dateSelector(string);
           
         });

Then('I should see the selected date {string}', function (string) {
           
         });

function datePicker(string: any) {
        throw new Error('Function not implemented.');
}


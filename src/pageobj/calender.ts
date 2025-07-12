 import { pageFixture } from '../hooks/pagefixture';

 export class Calender{
    
    getcalender() : any {
        return pageFixture.page?.locator('#first_date_picker');
    }
    getcalenderMonth() : any{
        return pageFixture.page?.locator('.ui-datepicker-month');
    }
    getcalenderYear() : any{
        return pageFixture.page?.locator('.ui-datepicker-year');
    }
    getcalenderDay() : any{
        return pageFixture.page?.locator('.ui-state-default');
    }
    getdayverify() : any {
        return pageFixture.page?.locator('#first_date_picker');
    }
    getYearMonth() : any {
        return pageFixture.page?.locator('.ui-datepicker-title');
    }
    getLeftclick() : any {
        return pageFixture.page?.locator('.ui-icon.ui-icon-circle-triangle-w');
    }
    getDatePicker() : any {
        return pageFixture.page?.locator('.ui-state-default');
    }
    getRightclick() : any {
        return pageFixture.page?.locator('.ui-icon.ui-icon-circle-triangle-e');
    }
}
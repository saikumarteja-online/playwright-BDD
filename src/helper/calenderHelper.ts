import {Calender} from '../pageobj/calender';

const calender = new Calender();
export function Dateformater(dateString:string): string {
    
    if ( dateString.split('-').length !== 3) {
        throw new Error("Invalid date format. Expected 'dd mm yyyy'.");
    }

    const day = parseInt(dateString.split('-')[0],10)
    const month =parseInt(dateString.split('-')[1],10);
    const year = parseInt(dateString.split('-')[2],10);

    const date = new Date(year,month-1,day)

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long', // Full month name
        year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

export async function dateSelector(dateString: string){
       var rightorleft 
       //mm dd, yyyy
       var day = (Dateformater(dateString).split(' ')[1]).split(',')[0]
       var month = Dateformater(dateString).split(' ')[0];
       var year = Dateformater(dateString).split(' ')[2];
       await calender.getcalender().click();
        var displayMonth =await calender.getcalenderMonth().innerText();
        var displayYearMonth = await calender.getYearMonth().innerText();
        displayYearMonth = displayYearMonth.replace(/\s+/g, ' ').trim(); // Normalize spaces
        // console.log(Number(year)+"   " + "  "+(displayYearMonth.toString().split(' ')[1]));
        if(Number(year) < Number(displayYearMonth.split(' ')[1])) {
            console.log('I am inside')
            for(var i = 0; ; i++) {
                await calender.getLeftclick().click();
                displayYearMonth =await calender.getYearMonth().innerText()
                displayYearMonth = displayYearMonth.replace(/\s+/g, ' ').trim(); // Normalize spaces
                console.log(displayYearMonth)
                if(displayYearMonth === month+' '+ year) {
                    await calender.getcalenderDay().filter({ hasText: day }).click();
                    break;
                } 
            }    
        }else if(Number(year) > Number(displayYearMonth.split(' ')[1])) {
            for(var i = 0; ; i++) {
                await calender.getRightclick().click();
                displayYearMonth =await calender.getYearMonth().innerText()
                displayYearMonth = displayYearMonth.replace(/\s+/g, ' ').trim(); // Normalize spaces
                console.log(displayYearMonth)
                if(displayYearMonth === month+' '+ year) {
                    await calender.getcalenderDay().filter({ hasText: day }).click();
                    break;
                } 
            }
        }else if(Number(year) === Number(displayYearMonth.split(' ')[1])) {

            // console.log(monthtoNumber(month.toString()) + "  " + monthtoNumber(displayMonth.toString()));
            console.log(monthtoNumber(month)> monthtoNumber(displayMonth))
            for( i = 0;  ; i++) {
                
                monthtoNumber(month)> monthtoNumber(await calender.getcalenderMonth().innerText()) ? rightorleft= calender.getRightclick() : rightorleft=  calender.getLeftclick()
                
                if(monthtoNumber(month)!= monthtoNumber(await calender.getcalenderMonth().innerText())){

                    await rightorleft.click()
                    
                }else{
                    break;
                }
                
            }
        //    calender.getRightclick().click() 
           
        }
            
        

}

function monthtoNumber(month: string): number {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months.indexOf(month) + 1; // +1 because index starts at 0
}


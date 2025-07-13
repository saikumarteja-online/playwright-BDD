import { pageFixture } from "../hooks/pagefixture";

export class Herokuapp {
    // Define methods related to Herokuapp locators
    getAddorRemoveLink() : any {
        return pageFixture.page?.getByText('Add/Remove Elements')
    }
    getAddElementButton() : any {
        return pageFixture.page?.getByRole('button',{
            name: 'Add Element'
        })
    }
    getDeleteButton() : any {
        return pageFixture.page?.getByRole('button', {
            name:'Delete'
        })
    }
}
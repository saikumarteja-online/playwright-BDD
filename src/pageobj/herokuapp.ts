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

    getNavigateTobrokenImageSite() : any {
        return pageFixture.page?.getByText('Broken Images')
    }

    getBrokenImage() : any {
        return pageFixture.page?.locator('img')
    }

    getCheckbox1() : any {
        return pageFixture.page?.locator('input[type="checkbox"]').nth(0);
    }
    getCheckbox2() : any {
        return pageFixture.page?.locator('input[type="checkbox"]').nth(1);
    }
    getchecboxwebpage() : any {
        return pageFixture.page?.getByText('Checkboxes')
    }
    getopenContextMenu() : any {
        return pageFixture.page?.getByText('Context Menu')
    }
    getContextMenu() : any {
        return pageFixture.page?.locator('#hot-spot');
    }
}
import {Herokuapp} from '../pageobj/herokuapp';

const herokuapp = new Herokuapp();

export  async function addElement() {
    await herokuapp.getAddorRemoveLink().click();
}

export async function addElementButton() {
    await herokuapp.getAddElementButton().click();
}

// export async function verifyElementVisiable() {
//     await herokuapp.getDeleteButton().isVisible();
// }

export async function deleteElement() {
    await herokuapp.getDeleteButton().click();
}



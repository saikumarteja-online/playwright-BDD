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

export async function naviagtetoSite() {
    await herokuapp.getNavigateTobrokenImageSite().click();
}

export async function checkForBrokenImage() {
    
    const img = await herokuapp.getBrokenImage();
    console.log(img.count());
    // for (const image of img) {
    //     const src = await image.getAttribute('src');
    //     const isBroken = await img.evaluate((img: HTMLImageElement) => {
    //   return !img.complete || img.naturalWidth === 0;
    // });

    // if (isBroken) {
    //   console.log(`❌ Broken Image: ${src}`);
    // } else {
    //   console.log(`✅ Working Image: ${src}`);
    // }
    // }
}

export async function checkCheckbox() {
   await herokuapp.getchecboxwebpage().click(); 
   await herokuapp.getCheckbox1().click();
   await herokuapp.getCheckbox2().click();
}



import LoginPage from '../pages/LoginPage.js';
import ProductsPage from '../pages/ProductsPage.js';
import ProductDetailsPage from '../pages/ProductDetailsPage.js';

import {LOGIN_USERS, PRODUCTS} from '../conf/testConstants.js';

describe('Products items list', async () => {

    beforeEach( async ()=> {
        await LoginPage.open();
        await LoginPage.login(LOGIN_USERS.STANDARD.username,LOGIN_USERS.STANDARD.password);
        await expect(await ProductsPage.productsPage).toBeDisplayed();
    });

    it('should validate that all products are present', async () => {
        await console.log(await ProductsPage.productsItems[0].getText());

        await expect(await ProductsPage.productsItems.length).toEqual(6);
    });

    it('should validate that the details of a product can be opened', async () => {
        await ProductsPage.productItemName[4].click();

        await expect(await ProductDetailsPage.productDetailsPage).toBeDisplayed();

        await expect(await ProductsPage.productItemName[0]).toHaveText(expect.stringContaining(PRODUCTS.ONESIE));
    });
})

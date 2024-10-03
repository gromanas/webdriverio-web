import { browser } from "@wdio/globals";
import LoginPage from "../pages/LoginPage.js";
import ProductsPage from "../pages/ProductsPage.js";

describe('Login Form', () => {
    it('verify user that can be successfully login', async () => {
        await browser.url('/');

        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(await ProductsPage.productsPage).toBeDisplayed();
    });
});

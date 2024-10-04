import { browser } from "@wdio/globals";
import LoginPage from "../pages/LoginPage.mjs";
import ProductsPage from "../pages/ProductsPage.mjs";

describe('Login Form', () => {
    it('verify user that can be successfully login', async () => {
        await browser.url('/');

        await LoginPage.username.setValue('standard_user');
        await LoginPage.password.setValue('secret_sauce');
        await LoginPage.loginBtn.click();

        await expect(await ProductsPage.productsPage).toBeDisplayed();
    });
});

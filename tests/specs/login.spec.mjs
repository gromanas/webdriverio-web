import LoginPage from "../pages/LoginPage.mjs";
import ProductsPage from "../pages/ProductsPage.mjs";
import {LOGIN_USERS} from "../conf/testConstants.mjs";

describe('Login Form', () => {
    it('verify user that can be successfully login', async () => {
        await LoginPage.open();

        await LoginPage.login(LOGIN_USERS.STANDARD.username, LOGIN_USERS.STANDARD.password);

        await expect(await ProductsPage.productsPage).toBeDisplayed();
    });
});

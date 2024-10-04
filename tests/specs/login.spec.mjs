import LoginPage from "../pages/LoginPage.mjs";
import ProductsPage from "../pages/ProductsPage.mjs";
import {LOGIN_USERS} from "../conf/testConstants.mjs";

describe('Login Form', () => {
    it('verify user that can be successfully login', async () => {
        await LoginPage.open();

        await LoginPage.login(LOGIN_USERS.STANDARD.username, LOGIN_USERS.STANDARD.password);

        await expect(await ProductsPage.productsPage).toBeDisplayed();
    });

    it('verify that a locked user cannot login', async () => {
        await LoginPage.open();

        await LoginPage.login(LOGIN_USERS.LOCKED.username, LOGIN_USERS.LOCKED.password);

        await expect(await LoginPage.hintErrorMsg).toBeDisplayed();
        await expect(await LoginPage.hintErrorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('verify that user cannot login if he does not provide any credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(LOGIN_USERS.NO_USER_DETAILS.username, LOGIN_USERS.NO_USER_DETAILS.password);

        await expect(await LoginPage.hintErrorMsg).toHaveText('Epic sadface: Username is required');

    });

    it('verify that user cannot login if he does not provide any password', async () => {
        await LoginPage.open();

        await LoginPage.login(LOGIN_USERS.NO_PASSWORD.username, LOGIN_USERS.NO_PASSWORD.password);

        await expect(await LoginPage.hintErrorMsg).toHaveText('Epic sadface: Password is required');
    });
});

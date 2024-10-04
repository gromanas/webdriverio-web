import LoginPage from "../pages/LoginPage.mjs";
import ProductsPage from "../pages/ProductsPage.mjs";
import {LOGIN_ERROR_MSG, LOGIN_USERS} from "../conf/testConstants.mjs";

describe('Login Form', () => {
    it('verify user that can be successfully login', async () => {
        await LoginPage.open();

        await LoginPage.login(LOGIN_USERS.STANDARD.username, LOGIN_USERS.STANDARD.password);

        await expect(await ProductsPage.productsPage).toBeDisplayed();
    });

    it('verify that user cannot login in different cases', async () => {
        const testCases = [
            {username: LOGIN_USERS.LOCKED.username, password: LOGIN_USERS.LOCKED.password, msg: LOGIN_ERROR_MSG.ERROR_MSG_LOCKED},
            {username: LOGIN_USERS.NO_USER_DETAILS.username, password: LOGIN_USERS.NO_USER_DETAILS.password, msg: LOGIN_ERROR_MSG.ERROR_MSG_NO_USERNAME},
            {username: LOGIN_USERS.NO_PASSWORD.username, password: LOGIN_USERS.NO_PASSWORD.password, msg: LOGIN_ERROR_MSG.ERROR_MSG_NO_PASSWORD}
        ];

        for (const test of testCases) {
            const {username, password, msg} = test;
            await LoginPage.open();

            await LoginPage.login(username,password);

            await expect(await LoginPage.hintErrorMsg).toHaveText(msg);
        }
    });
});

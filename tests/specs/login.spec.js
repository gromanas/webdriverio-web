import { browser } from "@wdio/globals";
import LoginPage from "../pages/LoginPage.js";

describe('Login Form', () => {
    it('verify user that can be successfully login', async () => {
        await browser.url('/');
        await LoginPage.username.setValue('standard_user');
        await LoginPage.password.setValue('secret_sauce');
        await LoginPage.loginBtn.click();
    });
});

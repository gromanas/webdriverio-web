import { $, browser } from "@wdio/globals";

describe('Login Form', () => {
    it('verify that a user that can be successfully login', async () => {
        await browser.url('/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
    });
});

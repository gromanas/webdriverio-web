import { $ } from "@wdio/globals";

class LoginPage {
    get loginPage() {
        return $('.login_logo');
    }

    get username() {
        return $('[data-test="username"]');
    }

    get password() {
        return $('#password');
    }

    get loginBtn() {
        return $('#login-button');
    }
}

export default new LoginPage();

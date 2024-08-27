import { $ } from "@wdio/globals";

class LoginPage {
    getLoginPage() {
        return $('.login_logo');
    }

    getUsername() {
        return $('[data-test="username"]');
    }

    getPassword() {
        return $('#password');
    }

    getLoginBtn() {
        return $('#login-button');
    }
}

module.exports = LoginPage;

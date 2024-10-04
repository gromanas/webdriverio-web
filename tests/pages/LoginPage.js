import { $ } from "@wdio/globals";
import {LOGIN_USERS} from "../conf/testConstants";

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

    get hintErrorMsg() {
        return $('[data-test="error"]');
    }

    async open() {
        await browser.url('/');
    };

    async login(username = LOGIN_USERS.STANDARD.username, password = LOGIN_USERS.STANDARD.password) {
        // const {username, password} = userCredentials;
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginBtn.click();
    };
}

export default new LoginPage();

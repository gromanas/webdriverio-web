import LoginPage from "../pages/LoginPage.js";
import ProductsPage from "../pages/ProductsPage.js";

describe('Login Form', () => {
    it('verify user that can be successfully login', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(await ProductsPage.productsPage).toBeDisplayed();
    });
});

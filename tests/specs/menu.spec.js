import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/MenuComponent';

describe('Menu', async () => {
    beforeEach( async ()=> {
        await LoginPage.open();
        await LoginPage.login();

        await HeaderComponent.cart.click();
        await MenuComponent.menu.click();

        // show that an animation can be flaky.
        // await browser.pause(500);
        //correct way to wait
        // await expect(await MenuComponent.logoutBtn).toBeDisplayed();
        // await expect(await MenuComponent.logoutBtn).toBeDisplayedInViewport();
    });

    it('should be able to go to the products overview page', async () => {
        await MenuComponent.productsListBtn.click();
        await expect(await ProductsPage.productsContainer).toBeDisplayed();
    });

    it('should be able to open the about page', async () => {
        await MenuComponent.aboutBtn.click();
        await expect(await browser).toHaveUrl('https://saucelabs.com/');
    });

    it('should be able to check the about page', async () => {
        await expect(await MenuComponent.aboutBtn).toHaveAttribute('href', 'https://saucelabs.com/');
    });

    it('should be able to log out', async () => {
        await MenuComponent.logoutBtn.click();
        await expect(await LoginPage.loginPage).toBeDisplayed();
    });
});






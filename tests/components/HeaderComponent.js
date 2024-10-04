class HeaderComponent {
    get cart() {
        return $('.shopping_cart_link');
    }

    get cartAmount(){
        browser.pause(500);

        return this.cart.getText();
    }
}

export default new HeaderComponent();

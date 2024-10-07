class HeaderComponent {
    get cart() {
        return $('[data-test="shopping-cart-link"]');
    }

    get cartBadge() {
        return $('[data-test="shopping-cart-badge"]');
    }
}

export default new HeaderComponent();

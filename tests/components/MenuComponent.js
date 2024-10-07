class MenuComponent {
    get menu() {
        return $('#react-burger-menu-btn');
    }

    get productsListBtn() {
        return $('#inventory_sidebar_link');
    }

    get aboutBtn() {
        return $('#about_sidebar_link');
    }

    get aboutBtnLink() {
        return $('#about_sidebar_link');
    }

    get logoutBtn() {
        return $('#logout_sidebar_link');
    }

    get resetBtn() {
        return $('#reset_sidebar_link');
    }
}

export default new MenuComponent();

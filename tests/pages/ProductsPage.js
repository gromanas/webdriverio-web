import { $ } from "@wdio/globals";

class ProductsPage {
    get productsPage() {
        return $('#page_wrapper');
    }

    get productsContainer() {
        return $('#inventory_container');
    }

    get productsItems() {
        return $$('[data-test="inventory-item"]');
    }

    get productItemName() {
        return $$('[data-test="inventory-item-name"]');
    }

    addToCart(item) {
        return $$('.btn_primary.btn_inventory')[item];
    }

    removeFromCart(item) {
        return $$('.btn_secondary.btn_inventory')[item];
    }

    get backButton() {
        return $('.inventory_details_back_button');
    }
}

export default new ProductsPage();

import { $ } from "@wdio/globals";

class ProductsPage {
    getProductsPage() {
        return $('#page_wrapper');
    }

    getProductsContainer() {
        return $('#inventory_container');
    }
}

module.exports = ProductsPage;

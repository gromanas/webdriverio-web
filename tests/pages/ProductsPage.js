import { $ } from "@wdio/globals";

class ProductsPage {
    get productsPage() {
        return $('#page_wrapper');
    }

    get productsContainer() {
        return $('#inventory_container');
    }
}

export default new ProductsPage();

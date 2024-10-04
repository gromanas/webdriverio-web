class ProductDetailsPage {
    get productDetailsPage() {
        return $('.inventory_details');
    }

    get productItemName() {
        return $$('[data-test="inventory-item-name"]');
    }
}

export default new ProductDetailsPage();

const ProductRepository = require('../Repositories/Product');


class Product {

    constructor() {
        this.repo = new ProductRepository();

        this.id = null;
        this.name = null;
        this.categoryId = null;
        this.infoId = null;
        this.vitaminId = null;
        this.mineralId = null;
        this.fatId = null;
        this.aminoId = null;
        this.otherId = null;
    }

    addProduct(productToInsert) {
        this.repo.insert(productToInsert);
    }
}

module.exports = Product;
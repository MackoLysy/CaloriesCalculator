const CategoryRepository = require('../Repositories/Category');


class CategoryModel {
    constructor() {
        this.repo = new CategoryRepository();
    }

    async addCategoriesArray(categories) {
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            var result = await this.repo.findCategoryByName(category.name);
            if (!result) {
                await this.repo.addCategory(category);
            }
        }
    }

}

module.exports = CategoryModel;
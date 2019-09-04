const Category = require('../Repositories/Category');
const Product = require('../Repositories/Product');
const User = require('../Repositories/User');
const Amino = require('../Repositories/Product/Amino');
const Fat = require('../Repositories/Product/Fat');
const Info = require('../Repositories/Product/Info');
const Mineral = require('../Repositories/Product/Mineral');
const Other = require('../Repositories/Product/Other');
const Vitamin = require('../Repositories/Product/Vitamin');


async function createTables() {
    await new Category().createTable();
    await new Product().createTable();
    await new Amino().createTable();
    await new Fat().createTable();
    await new Info().createTable();
    await new Mineral().createTable();
    await new Other().createTable();
    await new Vitamin().createTable();
}


module.exports = createTables()
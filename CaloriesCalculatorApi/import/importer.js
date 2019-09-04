var recursive = require("recursive-readdir");
var fs = require('fs');
var Product = require('../models/ProductModel');
var Categories = require('../models/CategoryModel');

const improtData = function () {
    recursive("./items/", async function (err, files) {
        var item = files[0];
        var json = fs.readFileSync(item).toString();
        for (let i = 0; i < files.length; i++) {
            var item = files[i];
            var json = fs.readFileSync(item).toString();
            await insertTodb(json);
        }
    });
    console.log("Skonczylem!");
}

async function insertTodb(item) {
    var itemToInsert = {};
    var json = JSON.parse(item);
    itemToInsert.name = json.name;
    itemToInsert.categories = generateCategoryDependency(json.categories);;
    itemToInsert.base = getBaseContent(json);
    itemToInsert.vit = getVitContent(json);
    itemToInsert.fat = getFatContent(json);
    itemToInsert.min = getMinContent(json);
    itemToInsert.amino = getAminoContent(json);
    itemToInsert.other = getOtherContetn(json);
    var product = new Product();
    var categories = new Categories();
    await categories.addCategoriesArray(itemToInsert.categories);
    await product.addProduct(itemToInsert);
}

function getBaseContent(json) {
    var item = json.base;
    var result = {};
    result.water = getObjectValue(item[0]);
    result.calories = getObjectValue(item[1]);
    result.energy = getObjectValue(item[2]);
    result.protein = getObjectValue(item[3]);
    result.fat = getObjectValue(item[4]);
    result.dust = getObjectValue(item[5]);
    result.carbs = getObjectValue(item[6]);
    result.roughage = getObjectValue(item[7]);
    result.sugar = getObjectValue(item[8]);
    result.sacharose = getObjectValue(item[10]);
    result.glucose = getObjectValue(item[11]);
    result.fructose = getObjectValue(item[12]);
    result.lactose = getObjectValue(item[13]);
    result.maltose = getObjectValue(item[14]);
    result.galactose = getObjectValue(item[15]);
    result.starch = getObjectValue(item[16]);
    return result;
}

function getVitContent(json) {
    var item = json.vit;
    var result = {};
    result.vitARE = getObjectValue(item[0]);
    result.vitAUI = getObjectValue(item[1]);
    result.vitARET = getObjectValue(item[2]);
    result.betaCaroten = getObjectValue(item[3]);
    result.alfaCaroten = getObjectValue(item[4]);
    result.vitB1 = getObjectValue(item[5]);
    result.vitB2 = getObjectValue(item[6]);
    result.niacyn = getObjectValue(item[7]);
    result.vitB5 = getObjectValue(item[8]);
    result.vitB6 = getObjectValue(item[9]);
    result.vitB9 = getObjectValue(item[10]);
    result.vitB12 = getObjectValue(item[11]);
    result.vitC = getObjectValue(item[12]);
    result.vitD = getObjectValue(item[13]);
    result.vitK1 = getObjectValue(item[15]);
    result.floan = getObjectValue(item[16]);
    result.floacyna = getObjectValue(item[17]);
    result.vitb12Added = getObjectValue(item[18]);
    result.betaina = getObjectValue(item[19]);
    result.betaTokoferol = getObjectValue(item[20]);
    result.luteina = getObjectValue(item[21]);
    result.likopen = getObjectValue(item[22]);
    result.folionAcid = getObjectValue(item[23]);
    result.gammaTokoferol = getObjectValue(item[24]);
    return result;
}

function getFatContent(json) {
    var item = json.fat;
    var result = {};
    result.cholesterol = getObjectValue(item[0]);
    result.stigmasterol = getObjectValue(item[19]);
    result.betaSitosterol = getObjectValue(item[20]);
    result.kampesterol = getObjectValue(item[21]);
    result.transPolyenoic = getObjectValue(item[24]);
    result.transMonoenoic = getObjectValue(item[25]);
    result.nacycone = getObjectValue(item[41]);
    result.trans = getObjectValue(item[48]);
    result.fitosterole = getObjectValue(item[52]);
    result.multiNasycone = getObjectValue(item[53]);
    result.oneNasycone = getObjectValue(item[54]);
    return result;
}

function getMinContent(json) {
    var item = json.min;
    var result = {};
    result.ca = getObjectValue(item[0]);
    result.fe = getObjectValue(item[1]);
    result.mg = getObjectValue(item[2]);
    result.p = getObjectValue(item[3]);
    result.k = getObjectValue(item[4]);
    result.na = getObjectValue(item[5]);
    result.zn = getObjectValue(item[6]);
    result.cu = getObjectValue(item[7]);
    result.mn = getObjectValue(item[8]);
    result.se = getObjectValue(item[9]);
    result.f = getObjectValue(item[10]);
    return result;
}

function getAminoContent(json) {
    var item = json.amino;
    var result = {};
    result.asparginAcid = getObjectValue(item[0]);
    result.alanina = getObjectValue(item[1]);
    result.histydyna = getObjectValue(item[2]);
    result.glutaminan = getObjectValue(item[3]);
    result.glicynie = getObjectValue(item[4]);
    result.hydroksyproline = getObjectValue(item[5]);
    result.serynie = getObjectValue(item[6]);
    result.proline = getObjectValue(item[7]);
    result.arginine = getObjectValue(item[8]);
    result.waline = getObjectValue(item[9]);
    result.leucynie = getObjectValue(item[10]);
    result.izoleucynie = getObjectValue(item[11]);
    result.teronine = getObjectValue(item[12]);
    result.lizynie = getObjectValue(item[13]);
    result.metionina = getObjectValue(item[14]);
    result.tyrozyna = getObjectValue(item[15]);
    result.fenyloalanine = getObjectValue(item[16]);
    result.cystynie = getObjectValue(item[17]);
    result.tryptofine = getObjectValue(item[18]);
    return result;
}

function getOtherContetn(json) {
    var item = json.other;
    var result = {};
    result.teobromina = getObjectValue(item[0]);
    result.kofeina = getObjectValue(item[1]);
    result.alkohol = getObjectValue(item[2]);
    return result;
}

function getObjectValue(item) {
    var value;
    value = parseFloat(Object.values(item)[0]);
    if (Object.values(item)[0].includes('-')) {
        value = 0.0;
    } else if (Object.values(item)[0].includes('mcg')) {
        value = parseFloat(Object.values(item)[0]) / 1000.0;
    }

    if (value == undefined || isNaN(value)) {
        console.log(item);
        throw new "Cannot parse value!";
    }
    return value;
}

function generateCategoryDependency(categories) {
    var categoriesDependency = [];
    if (categories.length == 0) {
        throw "No Categories!";
    }
    if (categories.length < 2) {
        var obj = { name: categories[0], parent: null };
        categoriesDependency.push(obj);
        return categoriesDependency;
    }
    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        var parent = null;
        if (i - 1 >= 0) {
            parent = categories[i - 1];
        }
        var obj = { name: element, parent: parent };
        categoriesDependency.push(obj);

    }
    return categoriesDependency;
}

module.exports = improtData;
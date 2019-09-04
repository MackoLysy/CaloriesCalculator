var expect = require('chai').expect;
const rewire = require('rewire')
const userimporter = rewire('../import/importer')
var getObjectValue = userimporter.__get__('getObjectValue');
var generateCategoryDependency = userimporter.__get__('generateCategoryDependency')

describe("Importet Test", () => {
    it('getObjectValue g', () => {
        var obj = { 'test': '123 g' };
        expect(getObjectValue(obj)).equal(123);
    })
    it('getObjectValue empty', () => {
        var obj = { 'test': '-' };
        expect(getObjectValue(obj)).equal(0);
    });
    it('getObjectValue mg', () => {
        var obj = { 'test': '123 mg' };
        expect(getObjectValue(obj)).equal(123);
    });
    it('getObjectValue mcg', () => {
        var obj = { 'test': '123 mcg' };
        expect(getObjectValue(obj)).equal((123 / 1000));
    });
    it('getObjectValue string', () => {
        var obj = { 'test': 'asdasd' };
        expect(() => getObjectValue(obj)).to.throw();
    });
    it('generateCategoryDependency empty', () => {
        var array = [];
        expect(() => getObjectValue(obj)).to.throw();
    });
    it('generateCategoryDependency one', () => {
        var array = [];
        array.push("A");
        expect(generateCategoryDependency(array)).to.eql([{ name: "A", parent: null }]);
    });
    it('generateCategoryDependency multi', () => {
        var array = [];
        array.push("A");
        array.push("B");
        expect(generateCategoryDependency(array)).to.eql([{ name: "A", parent: null }, { name: "B", parent: "A" }]);
    });
})

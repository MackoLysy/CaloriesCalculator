var expect = require('chai').expect;
const rewire = require('rewire')
const userimporter = rewire('../import/importer')
var getObjectValue = userimporter.__get__('getObjectValue');

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
})

const { default: test } = require('node:test');
const Potion = require('../lib/Potion');


test('create a health potion object', () => {
    const potion = new Potion('heath');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});
expect
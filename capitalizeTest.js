const capitalize = require('../capitalize.js');

test('capitalize should return the first character of the string in uppercase and the rest in lowercase', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize should return the first character of the string in uppercase and the rest in lowercase', () => {
    expect(capitalize('johnny')).toBe('Johnny');
});
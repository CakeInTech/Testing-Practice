const stringLength = require('./string.js');

test('stringLength should return the length of the string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('johnny')).toBe(6);
});

test('stringLength should return an error if the string is not between 1 and 10 characters', () => {
    expect(stringLength('katchitomato')).toBe('invalid string');
});

test('reverseString should return the string in reverse', () => {
    expect(reverseString('hello')).toBe('olleh');
});

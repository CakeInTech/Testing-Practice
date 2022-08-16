const stringLengths = require('./string.js');

test('stringLength should return the length of the string', () => {
    expect(stringLengths.stringLength('hello')).toBe(5);
    expect(stringLengths.stringLength('johnny')).toBe(6);
});


test('reverseString should return the string in reverse', () => {
    expect(stringLengths.reverseString('hello')).toBe('olleh');
});

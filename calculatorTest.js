const Calculator = require('./calculator.js');

descripe('add'), () => {
test('add should return the sum of two numbers', () => {
    expect(Calculator.add(1, 1)).toBe(2);
    expect(Calculator.add(0, 0)).toBe(0);
    expect(Calculator.add(-1, 1)).toBe(0);
    expect(Calculator.add(1, -1)).toBe(0);
    expect(Calculator.add(-1, -1)).toBe(-2);
});}

descripe('subtract'), () => {
test('subtract should return the difference of two numbers', () => {
    expect(Calculator.subtract(1, 1)).toBe(0);
    expect(Calculator.subtract(0, 0)).toBe(0);
    expect(Calculator.subtract(-1, 1)).toBe(-2);
    expect(Calculator.subtract(1, -1)).toBe(2);
    expect(Calculator.subtract(-1, -1)).toBe(0);
});}

descripe('multiply'), () => {
test('multiply should return the product of two numbers', () => {
    expect(Calculator.multiply(1, 1)).toBe(1);
    expect(Calculator.multiply(0, 0)).toBe(0);
    expect(Calculator.multiply(-1, 1)).toBe(-1);
    expect(Calculator.multiply(1, -1)).toBe(-1);
    expect(Calculator.multiply(-1, -1)).toBe(1);
});}
descripe('divide'), () => {
test('divide should return the quotient of two numbers', () => {
    expect(Calculator.divide(1, 1)).toBe(1);
    expect(Calculator.divide(0, 0)).toBe('Cannot divide by 0');
    expect(Calculator.divide(-1, 1)).toBe(-1);
    expect(Calculator.divide(1, -1)).toBe(-1);
    expect(Calculator.divide(-1, -1)).toBe(1);
});}

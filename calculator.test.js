const Calculator = require('./calculator');

describe("add", () => {
    test("8 + 19 = 27", () => {
      const num1 = 8;
      const num2 = 19;
     const calculator = new Calculator(num1, num2);
     const result = calculator.add(num1, num2);
        expect(result).toBe(27);
    });
  });
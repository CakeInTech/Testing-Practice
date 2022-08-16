class Calculator {
    static add = (num1 , num2) => {
        return num1 + num2;
    }
    static subtract = (num1 , num2) => {
        return num1 - num2;
    }
    static multiply = (num1 , num2) => {
        return num1 * num2;
    }
    static divide = (num1 , num2) => {
        if (num2 === 0) {
            return "Cannot divide by 0";
        }
        return num1 / num2;
    }
}

module.exports = Calculator;
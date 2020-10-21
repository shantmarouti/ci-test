import { Calculator } from './sample.service';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('sum() should return the sum of two numbers!', () => {
        const result = calculator.sum(2, 3);
        expect(result).toStrictEqual(5);
    });

    it('multiply() should return the product of two numbers!', () => {
        const result = calculator.sum(2, 3);
        expect(result).toStrictEqual(5);
    });
});

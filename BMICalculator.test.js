const BMICalculator = require('./BMICalculator');

test('Check the value of the two arguments', () =>{
    expect(BMICalculator(55, 163)).toBe(20.700816741315066);
});
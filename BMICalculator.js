

function BMICalculator(k, h){
    let convert = h / 100;
    let result = (k /convert);
    let finalresult = result / convert;
    return finalresult
}



    let totalBMI = BMICalculator(55, 163);
console.log(`Your BMI results: ${totalBMI}`);

module.exports = BMICalculator
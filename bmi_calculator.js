

let kiloGram = 55;
let heightlnCM= 163;

function compute(k, h){
    let convert = h / 100;
    let result = (k /convert);
    let finalresult = result / convert;
    return finalresult
}



    let totalBMI = compute(kiloGram, heightlnCM);
console.log(` Your BMI results: ${totalBMI}`);



let kiloGram = prompt('Your weight in Klg');
let heightlength = prompt('Your height in Cm');



function compute(k, h){
    let convert = h / 100;
    let total = (k /convert);
    return finalresult = total / convert;
}



    let totalBMI = compute(kiloGram, heightlength);
console.log(` Your BMI results: ${totalBMI}`);

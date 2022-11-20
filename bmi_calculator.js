

let kiloGram = 55;                                // assigning a value to a kilogram variable
let heightlnCM= 163;                              // assigning a value to a height in Centemeter

function compute(k, h){                           // creating a function to hold an argument in the parameter
    
    let convert = h / 100;                         // converting the centemeter value to meter 
    let result = (k /convert);                     // pass the value resuts to a results variable
    let finalresult = result / convert;            // the result variable will be computed to a variable convert as formula for BMI and pass it to the final result variable
    return finalresult
}

    let totalBMI = compute(kiloGram, heightlnCM);   //called the function and assign it to a total BMI variable
    console.log(`Your BMI results: ${totalBMI}`);   // display the total BMI results

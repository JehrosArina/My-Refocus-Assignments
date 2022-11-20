

function compute(klGram, heightCm){                   //Creating a funtion to hold 2 arguments value in the parameter
    let convert = heightCm / 100;                     // converted the heigh in meter and assigned it to a resutl variable
    let result = (klGram /convert);                   // passing the results to a result variable
    let finalresult = result / convert;               // the result value calculated again as part of the BMI formula and pass the value to the final result variable
    return finalresult                                // returning the value of the exact result to a function that ready to be called
}



    let totalBMI = compute(55, 163);                   // calling the function with 2 arguments value and assigned the function to a variable
    console.log(` Your BMI results: ${totalBMI}`);     // display the total BMI results

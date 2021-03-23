
const inputNum = parseInt(prompt('Enter a positive integer: '));

if (inputNum < 0) {
    console.log('Error! Factorial for negative inputNum does not exist.');
}


else if (inputNum === 0) {
    console.log(`The factorial of ${inputNum} is 1.`);
}


else {
    let fact = 1;
    for (i = 1; i <= inputNum; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${inputNum} is ${fact}.`);
}
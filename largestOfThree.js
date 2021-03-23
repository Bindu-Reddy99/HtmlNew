//Getting inputs
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));
const number3 = parseFloat(prompt("Enter third number: "));
let result;


if(number1 >= number2 && number1 >= number3) {
    result = number1;
}
else if (number2 >= number1 && number2 >= number3) {
    result = number2;
}
else {
    result = number3;
}

//or we can use "Math.max(number1,number2,number3)"
console.log("The largest number is " + result);

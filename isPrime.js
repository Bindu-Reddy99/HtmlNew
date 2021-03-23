// Getting input from the user
const inputNum = parseInt(prompt("Enter a positive number: "));
let flag = true;


if (inputNum === 1) {
    console.log("1 is neither prime nor composite number");
}


else if (inputNum > 1) {

    
    for (let i = 2; i < inputNum; i++) {
        if (inputNum % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log(`${inputNum} is a prime number`);
    } else {
        console.log(`${inputNum} is a not prime number`);
    }
}


else {
    console.log("The inputNum is less than 1.Give a valid inputNum");
}
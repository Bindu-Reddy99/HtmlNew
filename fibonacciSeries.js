const number = parseInt(prompt('Enter the number of terms: '));
let a = 0, b = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}
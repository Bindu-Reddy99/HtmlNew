
const vowels = ["a", "e", "i", "o", "u"]

function countTHeVowels(str) {
    
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

   
    return count
}


const inputString = prompt('Enter a string: ');

const result = countTHeVowels(inputString);

console.log(result);
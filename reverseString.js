const inputString=parse("Enter the string:");
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString(inputString);
//or we canalso doo----(inputString === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
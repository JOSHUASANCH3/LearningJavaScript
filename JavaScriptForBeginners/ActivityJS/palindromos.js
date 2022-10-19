/*
Cree un programa que le pida al usuario que ingrese una palabra y determine si es un palíndromo o no
*/
function isPalindrome(word) {
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] === word[word.length - i - 1]) return false;
    }
    return true;
}

var word = prompt('Enter a word:');
if (isPalindrome(word)) {
    console.log("Yes, '" + word + "' is a palindrome.");
}
else {
    console.log("No, '" + word + "' is not a palindrome.");
}
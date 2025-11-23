//Receive String From User and do all possible validations Then write code to calculate this
function sumAll() {
    var input = prompt("Enter numbers separated");
    var parts = input.split("");
    var numbers = [];
    for (var i = 0; i < parts.length; i++) {
        var num = Number(parts[i]);
        numbers.push(num);
    }
    var sum = 0;
    for (var j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }
    console.log("The sum of all numbers is: " + sum);
    }

sumAll();

//Write a JavaScript code that converts the first letter of each word of the string into upper case.
// /Example: 'the quick brown fox'
function capitalizeWords(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
console.log(capitalizeWords("the quick brown fox"));
// Write a JavaScript code that finds the longest word within the string.
//Example: 'Web Development Tutorial'
function findLargestWords(str) {
    var words = str.split(" ");
    return words.reduce(function(result, word) {
        if (word.length > result.maxLength) {
            result.maxLength = word.length;
            result.words = [word];
        } else if (word.length === result.maxLength) {
            result.words.push(word);
        }
        return result;
    }, { maxLength: 0, words: [] }).words;
}
console.log(findLargestWords("Web Development Tutorial"))
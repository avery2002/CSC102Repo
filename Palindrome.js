// Avery Willets
//12/8/23

//This file holds the function that checks if the user input
// From Palindrome.html is a palindrome

//This function checks if the user input is a palindrome
function checkIfPalindrome(str) {
    
    // This variable takes the user input, deletes any spaces, and converts all characters to lower case
    var cleanedStr = str.replace(/\s/g, '').toLowerCase();
            
    // This compares if the orginal cleaned string and the reversed string are the same
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

     // This is the loop that actually gets the user input
     while (true) {
        // This variable holds the prompt and the word the user inputs
        var userInput = prompt("Enter a word (or 'end' to end):");

        // This breaks and exits the loop if the user does not input anything or if they input 'end'
        if (!userInput || userInput.toLowerCase() === 'end') {
            break;
        }

        // This checks if the string is a palindrome, and stores the result as a boolean
        var palindromeResult = checkIfPalindrome(userInput);

        // This stores the result and displays it to the user as an alert
        var resultAlert = userInput + " is " + (palindromeResult ? "a palindrome!" : "not a palindrome.");
        alert(resultAlert);
    }
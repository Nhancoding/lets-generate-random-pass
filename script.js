// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberList = "0123456789"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var specialChar = "~!@#$%^&*()_-+=|\][}{:;'?/><,."

var giganticList = ""
var finalPass = ""
// Write password to the #password input
function writePassword() {
    generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = finalPass;
    finalPass=""
    giganticList=""

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var userInput = prompt("Generate a password with a length of at least 8 characters and no more than 128 characters");
    while (userInput <8 || userInput >128) {
        alert("Try again");

        userInput = prompt("Generate a password with a length of at least 8 characters and no more than 128 characters");
    }

    var numChoice = confirm("Would you like to use a number?")
    if (numChoice === true) {
        giganticList = giganticList + numberList
        console.log(giganticList)
    }

    var upperCaseChoice = confirm("Would you like to use an uppercase letter?")
    if (upperCaseChoice === true) {
        giganticList = giganticList + upperCase
        console.log(giganticList)
    }


    var lowerCaseChoice = confirm("Would you like to use a lowercase letter?")
    if (lowerCaseChoice === true) {
        giganticList = giganticList + lowerCase
        console.log(giganticList)
    }

    var specialCharChoice = confirm("Would you like to use a special character?")
    if (specialCharChoice === true) {
        giganticList = giganticList + specialChar
        console.log(giganticList)

    }

    if(numChoice === false && upperCaseChoice === false && lowerCaseChoice === false && specialCharChoice === false) {
        alert("Must pick one of the choices");
        return;

    }

    for( let i = 0; i < userInput; i++) {
        finalPass = finalPass + giganticList.charAt(Math.floor(Math.random() * giganticList.length))
    }

}
// own function?
// prompt for length of the password
// check if valid length, if wrong prompt again

//ask for different types of characters
//4 confirms for each type
// add to availableChars
// availableChars = availableChars.concat(numericCharacters)
// validate they selected at least one

// separate function
// iterate length number of times
// select random char from available chars
// add to result



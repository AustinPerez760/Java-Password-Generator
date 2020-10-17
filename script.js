// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//multiple functions needed to generate random uppercase & lowercase letters
//multiple funtions needed to generate random numebers and symbols
//must return string of characters
//need whole numbers not decimals 
//browser character set can incorporate symbols and numbers



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 

}

console.log(getRandomLower());

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 

}

console.log(getRandomUpper());

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 

}

console.log(getRandomNumber());

function getRandomSymbol() {
    const symbols = "*&$#!@?/.,=+";
    return symbols [Math.floor ]

}

console.log(getRandomSymbol());
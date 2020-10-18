// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button  

// added function and prompt upon button click that allows users to input desire lengeth of password 
generateBtn.addEventListener ("click" , promptUser,); 

function promptUser(){
    var userChoiceLeng = prompt ("How many characters would you like your password to contain?");

}

// added function with confim variable for user to confirm the use of special symbols within password 
generateBtn.addEventListener ("click" , specCharConfirm,);

function specCharConfirm() {
    var userChoiceSpec = confirm ("Click OK to incorporate special symbols");
        
}

// added function with confim variable for user to confirm the use of numbers within password 
generateBtn.addEventListener ("click" , numericCharConfirm );

function numericCharConfirm () {
    var userChoiceNum = confirm ("Click OK to incorporate numbers");

}

// added function with confim variable for user to confirm the use of upper case letters within password
generateBtn.addEventListener ("click" , upperCaseConfirm );

function upperCaseConfirm () {
    var userChoiceUpper = confirm ("Click OK to incorporate upper case letters");

}


generateBtn.addEventListener ("click" , lowerCaseConfirm );

function lowerCaseConfirm () {
    var userChoiceLower = confirm ("Click OK to incorporate lower case letters");

}






//Prompts must be added to event listener upon button click 
//multiple functions needed to generate random uppercase & lowercase letters
//multiple funtions needed to generate random numebers and symbols
//functions must be called for when button is clicked by user
//must return string of characters
//need whole numbers not decimals 
//browser character set can incorporate symbols and numbers

var lowerC; 

lowerC = function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 

}


var upperC;

upperC = function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 

}

var ranNum; 

ranNum = function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 

}

var ranSymb; 

ramSymb = function getRandomSymbol() {
    const symbols = "*&$#!@?/.,=+";
    return symbols [Math.floor(Math.random() * symbols.length)]; 

};



// Individual Functions 

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
    return symbols [Math.floor(Math.random() * symbols.length)]; 

};

console.log(getRandomSymbol());

const randomFunctn = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol,

};

"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()[]:;\/"
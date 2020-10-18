// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input

var passwordText = document.querySelector("#password");
        
        passwordText.value = password;

  
  // create for loop to choose password characters 
  
    function writePassword() {

        var z = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()[]:;\/");
        var password = ("") ;
     
    for (let i = 1; i <=10; i++) {
        password = password + values.charAT (Math.floor(Math.random()* Math.floor (z.length) + 0)); 
         
      }

      document.getElementById ("placeholder") . value = password;
  
      
      
      
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

generateBtn.addEventListener ("click" , writePassword );

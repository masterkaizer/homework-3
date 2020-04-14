//This javascript is to generate a system based password of length 8-20 as per the user selection.

document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays from to decide the criteria
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Variable Declaration 
var lengthConfirmation = "";
var specialCharacterConfirmation;
var numericCharacterConfirmation;
var upperCaseConfirmation;
var lowerCaseConfirmation;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var lengthConfirmation = (prompt("Please confirm the length of the password?"));

  // Loop if answer is outside the parameters 
  while(lengthConfirmation <= 7 || lengthConfirmation >= 21) {
      alert("Sorry the password length can be 8-20. Please try again");
      var lengthConfirmation = (prompt("Please confirm the length of the password?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`The password will have ${lengthConfirmation} characters`);

    // Determine parameters of password 
	var upperCaseConfirmation = confirm("If you want to include upper case alphabets in your password, please click OK");
	var lowerCaseConfirmation = confirm("If you want to include lower case alphabets in your password, please click OK");
	var numericCharacterConfirmation = confirm("If you want to include numbers in your password, please click OK"); 
    var specialCharacterConfirmation = confirm("If you want to include special symbols in your password, please click OK");
       
    
    
      // Loop if answer is outside the parameters 
      while(upperCaseConfirmation === false && lowerCaseConfirmation === false && specialCharacterConfirmation === false && numericCharacterConfirmation === false) {
        alert("At least one parameter must be chosen");
        var upperCaseConfirmation = confirm("If you want to include upper case alphabets in your password, please click OK");
		var lowerCaseConfirmation = confirm("If you want to include lower case alphabets in your password, please click OK");
		var numericCharacterConfirmation = confirm("If you want to include numbers in your password, please click OK"); 
		var specialCharacterConfirmation = confirm("If you want to include special symbols in your password, please click OK"); 
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
	  if (upperCaseConfirmation) 
	  {
		passwordCharacters = passwordCharacters.concat(upperAlpha)
	  }
	  if (lowerCaseConfirmation) 
	  {
		passwordCharacters = passwordCharacters.concat(lowerAlpha)
	  } 
	  if (numericCharacterConfirmation) 
	  {
        passwordCharacters = passwordCharacters.concat(numbers)
      }      
	  if (specialCharacterConfirmation) 
	  {
		passwordCharacters = passwordCharacters.concat(specialChar)
      }    
   
      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var a = 0; a < lengthConfirmation; a++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


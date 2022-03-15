
// This challenge was inspired (at least in part) by the Tutorials Tonight blogpost involving a Random Password Generator using JavaScript located at https://www.tutorialstonight.com/password-generator-in-javascript.php and from a post by Grossbard1849 on Reddit at https://www.reddit.com/r/AskProgramming/comments/katbot/javascript_help_with_password_generator/

var passCharUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passCHarLow = "abcdefghijklmnopqrstuvwxyz";
var passCharNum = "0123456789";
var passCharSym = "~!@#$%^&*()-=+[]\{}|;:/<>?"

// *** BORROWED!!!! reddit post***
// var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
// passwordLengthUser = parseInt(passwordLengthUser);
// if (passwordLengthUser < 8) {
// alert("Password must have more than 7 characters!");
// return "";
// }

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

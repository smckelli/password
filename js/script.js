var passLength = 8;

var assembledPassword = [];

var passArray = {
  passLower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  passUpper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  passNumber: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  passSymbol: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"]
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

    var getPrompts = prompts();
    var passwordText = document.querySelector("#password");
      
    if(getPrompts) {

      var newPassword = generatePassword();
    
      passwordText.value = newPassword;
    } else {
      passwordText.value ="";
    }

}

  function generatePassword() {
      var password = "";
      for(var i = 0; i < passLength; i++) {
        var randomizer = Math.floor(Math.random() * assembledPassword.length);
        password = password + assembledPassword[randomizer];
      }
      return password;
    }

    function prompts() {

      assembledPassword = [];

      passLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters only please)"));

      if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Password needs to bebetween 8 and 128 characters in length! Give it another shot.")
        return false;
      }

      if (window.confirm("Would you like to throw in some lowercase letters?")) {
        assembledPassword = assembledPassword.concat(passArray.passLower);
      }
      if (window.confirm("How about some uppercase letters?")) {
        assembledPassword = assembledPassword.concat(passArray.passUpper);
      }
      if (window.confirm("You probably need some numbers too, yes?")) {
        assembledPassword = assembledPassword.concat(passArray.passNumber);
      }
      if (window.confirm("Definitely need some special characters though. Am I right?")) {
        assembledPassword = assembledPassword.concat(passArray.passSymbol);
      }
      return true;
    }




    // reference  https://www.youtube.com/watch?v=v2jfGo7ztm8




      // This challenge was inspired (at least in part) by the Tutorials Tonight blogpost involving a Random Password Generator using JavaScript located at https://www.tutorialstonight.com/password-generator-in-javascript.php and from a post by Grossbard1849 on Reddit at https://www.reddit.com/r/AskProgramming/comments/katbot/javascript_help_with_password_generator/}
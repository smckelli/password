// The following citation was used as a reference for this challenge:

    // Vega, D. [Daniel Vega]. (2020, June 19.) Random Password Generator in JavaScript [Video].YouTube. https://www.youtube.com/watch?v=v2jfGo7ztm8

// I have commented each line of code (bad practice I know) to ensure my understanding of what the code is trying to do in each step. I have done this after the code was written (and rewritten, and rewritten ...)


// establish initial variable for the password length. This variable will change later and be use di the generation of the password as it changes
var passLong = 8;

// establish variable for the password displayed onscreen
var assembledPassword = [];

// the strings (arrays) used to asemble the characters that we randomly draw from
var passArray = {
  passLow: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  passUp: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  passNum: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  passSpec: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"]
}

// Assignment Code- to line 36-ish was supplied by the assignment
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

      // prompt the user for the terms of the password
    var getPrompts = prompts(); 
      // show the password in the generator window
    var passwordText = document.querySelector("#password");
      
    // if when we are prompted
    if(getPrompts) {
        // we call the generatePassword function
      var newPassword = generatePassword();
        // so the the window displays the result of the function
      passwordText.value = newPassword;
        // otherwise display nothing
    } 
}

      // the generatePassword function
  function generatePassword() {
      // starts with the password variable empty
      var password = "";
      // and incrementally counts up to the user defined password length --passLong--
      for(var i = 0; i < passLong; i++) {
        // while randomizing each spot in the password length using this randomizing engine as assembledPassword accesses the 'length' data in the DOM prototype to determine that size
        var randomizer = Math.floor(Math.random() * assembledPassword.length);
        // and this process to assemble those randomized items together from the huge string assembled in the assembledPassword variable;
        password = password + assembledPassword[randomizer];
      }
      // giving back the total assemblage of randomized items up to the user defined length in a container
      return password;
    }

      // when we first ask the user the questions we need to define the parameters
    function prompts() {
      // we start with the final password variable empty of arrays
      assembledPassword = [];

        // and ask how many items (characters) will be in the password
      passLong = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters only please)"));

        // we need to make sure the user input is consistent with the requirements of the task re: password length. The term 'isNaN' is a new term for me and I cannot find a different way to code that. It was one of the reasons for me to search for a competent example as I was at a loss to figure out how to eliminate letters, etc from the input of this particular prompt. 
        
        // If the input is below 8 and above 128 characters in length, or a value that is not a number for this input...
      if (passLong < 8 || passLong > 128 || isNaN(passLong)) {
        alert("Password needs to bebetween 8 and 128 characters in length! Give it another shot.")
        // the process will stop and have to be restarted with the generatePassword function
        return false;
      }


        // then if the user requires lowercase letters we will pass them all into the assemblePassword variable
      if (window.confirm("Would you like to throw in some lowercase letters?")) {
        assembledPassword = assembledPassword.concat(passArray.passLow);
      }
      // if the user requires uppercase letters we will pass them all into the assemblePassword variable also
      if (window.confirm("How about some uppercase letters?")) {
        assembledPassword = assembledPassword.concat(passArray.passUp);
      }
      // then if the user requires numbers we will pass them all into the assemblePassword variable as well
      if (window.confirm("You probably need some numbers too, yes?")) {
        assembledPassword = assembledPassword.concat(passArray.passNum);
      }
      // and lastly if the user requires special characters we will pass a bunch of them into the assemblePassword variable also
      if (window.confirm("Definitely need some special characters though. Am I right?")) {
        assembledPassword = assembledPassword.concat(passArray.passSpec);
      }
      // finally making the function 'true' as these inputs are generated within the parameter of the task
      return true;
    }

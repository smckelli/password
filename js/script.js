// I started this project by working out a pseudocode as a foundation to the coding as follows:

// get the password length from user --passLong--
// get character types from user --passUp, passLow, passSpec, passNum--

//assemble an array of random characters --passArray-- that is --passLong-- in length
  // randomly draw from one of the randomly generated character generators below --passLong number of times

    // create an array for numbers --passNum--
      // generate random number from array
    // create an array for special characters --passSpec--
      // generate random special characters from array
    // create an array for lowercase letters --passLow--
      // generate random lowercase letters from array
    // create an array for uppercase letters --passUp--
      // generate random uppercase letters from array
    // reset the generators for the next random charachter draw

    // as you are likely able to tell, there were difficulties with this approach and I needed help in assembling this conceptually. What I discovered is I should be able to assemble every character set into an array and draw randomly from that set. Very different from my original thought. To that end I discovered a video that basically walked through the process whose citation is below:

    // Vega, D. [Daniel Vega]. (2020, June 19.) Random Password Generator in JavaScript [Video].YouTube. https://www.youtube.com/watch?v=v2jfGo7ztm8

    // I did try to use different methods and processes to achieve the same result and explore the capabilities of other ideas.





var passLong = 8;

var assembledPassword = [];

var passArray = {
  passLow: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  passUp: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  passNum: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  passSpec: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"]
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

      // prompt the user for the terms of the password
    var getPrompts = prompts(); 
      // show the password in the generator window
    var passwordText = document.querySelector("#password");
      
    // when prompted
    if(getPrompts) {
        // call the generatePassword function
      var newPassword = generatePassword();
        // so the the window displays the result of the function
      passwordText.value = newPassword;
        // otherwise disp[lay nothing
    } else {
      passwordText.value ="";
    }
}

      // the generatePassword function
  function generatePassword() {
      // starts with the password variable empty
      var password = "";
      // and incrementally counts up to the user defined password length --passLong--
      for(var i = 0; i < passLong; i++) {
        // while randomizing each spot in the password length using this randomizing engine as assembledPassword accesses the 'length' data in the DOM prototype
        var randomizer = Math.floor(Math.random() * assembledPassword.length);
        // and this process to assemble those randomized items together from the huge string assembled in the assembledPassword variable;
        password = password + assembledPassword[randomizer];
      }
      // giving back the total assemblage of randomized items up to the user defined length in a container
      return password;
    }

      // when we first ask the user the questions we need to define the parameters
    function prompts() {
      // we start with the final password output blank
      assembledPassword = [];

        // and ask how many items will be in the password
      passLong = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters only please)"));

        // we need to make sure the user input is consistent with the requirements of the task re: password length. The term 'isNaN' is a new term for me and I cannot find a different way to code that. If the input is below 8 and above 128 characters in length, or a value that is not a number for this input...
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
      // and finally if the user requires special characters we will pass a bunch of them into the assemblePassword variable also
      if (window.confirm("Definitely need some special characters though. Am I right?")) {
        assembledPassword = assembledPassword.concat(passArray.passSpec);
      }
      // finally making he function 'true' as these inputs are generated within the parameter of the task
      return true;
    }




    // reference  https://www.youtube.com/watch?v=v2jfGo7ztm8




      // This challenge was inspired (at least in part) by the Tutorials Tonight blogpost involving a Random Password Generator using JavaScript located at https://www.tutorialstonight.com/password-generator-in-javascript.php and from a post by Grossbard1849 on Reddit at https://www.reddit.com/r/AskProgramming/comments/katbot/javascript_help_with_password_generator/}
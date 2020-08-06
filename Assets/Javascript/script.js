// These are the variables
var generateBtn = document.querySelector("#generate");
// These are all the possible characters to be used in the generator
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "~!@#$%^&*()_+=-<>?\/";

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#display");
  passwordText.value = password;
}

// This adds an event listener for the button click
generateBtn.addEventListener("click", writePassword);

// Call the generate function to generate the password
function generatePassword(){
    let passwordLength = prompt("How many characters do you want your password to be? (Enter a number between 8 & 128, and select 'okay')");
    passwordLength = parseInt(passwordLength)
    if (passwordLength >= 8 && passwordLength <=128){
      var needLower = confirm("Do you want the password to include lowercase letters?  (Select okay for yes, and cancel for no)");
      var needCapital = confirm("Do you want the password to include Capital letters?  (Select okay for yes, and cancel for no)");
      var needNumber = confirm("Do you want the password to include numbers?  (Select okay for yes, and cancel for no)");
      var needSpecial = confirm("Do you want the password to include special characters?  (Select okay for yes, and cancel for no)");
      if (needLower === true || needCapital === true || needNumber === true || needSpecial === true){
        let password = "";
      // For loop that will iterate the number of times equal to the complexity of the password
      for(var i = 1; i <= passwordLength; i++){
        if (needLower){
          password += randomLower();
        }
        if (needCapital){
          password += randomCapital();
        }
        if (needNumber){
          password += randomNumber();
        }
        if (needSpecial){
          password += randomSpecial();
        }
      }
      // Adds password to text box
      return password.substr(0, passwordLength);
      }
        // This alerts to if no selections are made when answering the prompts for character selections.
        else {
          alert("Password needs a minimum of one character selection!  Please try again.")
        }
      }
      // This alerts if the password character length chosen is too short
      else if (passwordLength < 8){
        alert("Password length can't be less than 8 characters.  Please try again.");
      }
      // This alerts if the password character length chosen is too long
      else if (passwordLength >128){
        alert("Password length can't be greater than 128 characters.  Please try again.");
      }
    }

    // These functions allow random math to occur to select a character in the specified variable's range
    function randomLower(){
      return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }
    function randomCapital(){
      return capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
    }
    function randomNumber(){
      return numbers[Math.floor(Math.random() * numbers.length)];
    }
    function randomSpecial(){
      return special[Math.floor(Math.random() * special.length)];
      }

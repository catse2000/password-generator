// Assignment code here
// #generate is button
// #password is textarea
var passwordLowerCase;
var passwordUpperCase;
var passwordNumber;
var passwordSpecial;
var passwordArray = [];
var passwordLowerCharacters = ["abcdefghijklmnopqrstuvwxyz"];
var passwordUpperCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var passwordNumbers = ["0123456789"];
var passwordSpecials = ["@%!#$^?~&*()_-+={}[]|/:<>"];


// Get references to the #generate element
// looks for first element labeled #generate and assigns it as a value to generateBtn (generateBtn == #generate)
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
  
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  // looks for first element labeled #password and assign it as a value to passwordText (passwordText == #password)
  var passwordText = document.querySelector("#password");

  
  
  
  // whatever password is will be assigned to #password textarea
  passwordText.value = password;

}

// Add event listener to generate button
// performs actions in writePassword when #generate is clicked
generateBtn.addEventListener("click", writePassword);

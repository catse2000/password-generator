// Assignment code here
// #generate is button
// #password is textarea

//Add variables
// passwordChoices determines if true or false
var passwordChoices = [true, false];
// passwordLowerCharacters array holds all lower-case letters that can be used in password
var passwordLowerCharacters = ["abcdefghijklmnopqrstuvwxyz"];
//passwordUpperCharacters array holds all upper-case letters that can be used in password
var passwordUpperCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
//passwordNumbers array holds all numbers that can be used in password
var passwordNumbers = ["0123456789"];
//passwordSpecials array holds all numbers that can be used in password
var passwordSpecials = ["@%!#$^?~&*()_-+={}[]|/:<>"];
// passwordArray holds possible letters, numbers or special characters depending on user choices
var passwordArray = [];

//
// Get references to the #generate element
// looks for first element labeled #generate and assigns it as a value to generateBtn (generateBtn == #generate)
var generateBtn = document.querySelector("#generate");

//generates password
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

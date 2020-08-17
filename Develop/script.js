// Assignment code here
// #generate is button
// #password is textarea

//Add variables
// passwordChoices determines if true or false

//
var fctPasswordLength = function(){
  var length = 0;
  var length = window.prompt("How long should the password be? (Enter a value between 8 and 128).").trim();
  //error handling
  if (length == ""|| length == null || isNaN(length)){
    window.alert("This is not a number. Please enter a number between 8 and 128.");
    length = fctPasswordLength();
  }
  else if(length < 8 || length > 128){
    if(length < 8){
      window.alert("This number is too low. Please enter a value between 8 and 128.");
      length = fctPasswordLength();
    }
    else if(length > 128){
      window.alert("This number is too high. Please enter a value between 8 and 128.");
      length = fctPasswordLength();
    }
  }
  return length;
};
// Get references to the #generate element
// looks for first element labeled #generate and assigns it as a value to generateBtn (generateBtn == #generate)
var generateBtn = document.querySelector("#generate");

//generates password
function generatePassword(){
  //store bank of possible password letters based on user input
  var passwordBank = [];

  // request length of password and store
  var passwordLength = fctPasswordLength();

  // array to store various potential characters for password generator
  var passwordChoices = [
    {
      type: "lowercase letters",
      data: "abcdefghijklmnopqrstuvwxyz",
      bool: true,
    },
    {
      type: "uppercase letters",
      data: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      bool: true,
    },
    {
      type: "numbers",
      data: "0123456789",
      bool: true,
    },
    {
      type: "special characters",
      data: "@%!#$^?~&*()_-+={}[]|/:<>",
      bool: true,
    }
  ];

  // asks prompts and creates passwordBank to be used with passwordLength to define a new password
  for(var i = 0; i < passwordChoices.length; i++)
  {
    passwordChoices[i].bool = window.confirm("Do you want your password to have " + passwordChoices[i].type + "?");
    if(passwordChoices[i].bool){
      passwordBank = passwordBank + passwordChoices[i].data;
    }
  }

  //variable to store password
  var password = '';

  //outputs a generated password depending on user input
  for(var i = 0; i < passwordLength; i++){
    var j = Math.ceil(Math.random()*(passwordBank.length-1));
      password = password + passwordBank[j];
  }
  return password;
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

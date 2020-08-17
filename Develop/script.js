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
  // request length of password and store
  var passwordBank = '';
  var passwordLength = fctPasswordLength();

  var passwordChoices = [
    {
      type: "lowercase",
      data: "abcdefghijklmnopqrstuvwxyz",
      bool: window.confirm("Do you want the password to contain lowercase letters?")
    },
    {
      type: "uppercase",
      data: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      bool: window.confirm("Do you want the password to contain uppercase letters?")
    },
    {
      type: "number",
      data: "0123456789",
      bool: window.confirm("Do you want the password to contain numbers?")
    },
    {
      type: "special",
      data: "@%!#$^?~&*()_-+={}[]|/:<>",
      bool: window.confirm("Do you want the password to contain special characters?")
    }
  ];

  debugger;
  for(var i = 0; i < passwordChoices.length; i++)
  {
    if(passwordChoices[i].bool){
      passwordBank = passwordBank + passwordChoices[i].data;
      window.alert(passwordBank);
    }
  }  
  
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

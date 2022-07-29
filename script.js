/// Assignment Code Here
var charSelect = function()

 //const key_strings = { 
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      special " !"~@+#'()*,./;:<=>@?[\]", 
    
};

var generatePassword =
  passwordCharSet = "";

 // setting character length
var charLength = window.prompt(Please enter a number between "8" and "128" for password length.");
var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (upercase == true)  {
      passwordCharSet += uppercase; 
};

var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase == true) {
      passwordCharSet += lowercase; 
};

var symbols = window.confirm('Would you like to use symbols?");
  if (symbols == true) {
     passwordCharSet += symbols;
  
}; 

var numbers = window.confirm(Would you like to use numbers?");
  if (symbols == true) {
     passwordCharSet += numbers;

};
for (var i - 0, n = charSet.length; i++) {
   retPassword += charSetMath.floor(Math.random() * length)
}
}

var password=document.getElementById("password");
// Write password to the #password input
  function writePaaword() {
    var password = generatePassword();
    var passwordText = document.querySelector("generate");

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

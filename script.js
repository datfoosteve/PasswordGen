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

const generatePassword = () => {

  const passLength = prompt("How long Do you want the password generated, to be? Greater then 8, less then 128 Characters");

  const passCapital = confirm("Will this password contain capital letters?");
  const passNumbers = confirm("Will this password contain Numbers?");
  const passLower = confirm("Will this password contain Lowercase Letters?");
  const passSymbols = confirm("Will this password contain Symbols?");

  const capitalLetters = "ABCDEF";
  const lowerLetters = "abcdefg";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*";

  let allPossibilites = '';
  let password = '';
  if(passCapital){
    allPossibilites = allPossibilites + capitalLetters;
  }

  if(passNumbers){
    allPossibilites = allPossibilites + numbers;
  }

  if(passLower){
    allPossibilites = allPossibilites + lowerLetters;
  }

  if(passSymbols){
    allPossibilites = allPossibilites + symbols;
  }

  // forloop iterate through a number generated depending on pass length

  for(var i = 0; i < passLength; i++){

    const ranChar = allPossibilites[Math.floor(Math.random() * allPossibilites.length)];
    password = password + ranChar;
    // Depending on conditions, has to randomly pick characters from the arrays

    
    
  }
  
  // return picked password
  return password;
}
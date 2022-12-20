// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate random

function getUpper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}

function getLower() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function getNumber() {
  const number = '1234567890';
  return number[Math.floor(Math.random() * number.length)];
}

function getSymbol() {
  const symbol = '!@#$%^&*()?.,`~';
  return symbol[Math.floor(Math.random() * symbol.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

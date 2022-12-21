// Assignment Code
var generateBtn = document.querySelector("#generate");

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbol = '!@#$%^&*()?.,`~';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let password = [];
  let passwordOptions = '';
  let passwordLength;
  do {
   passwordLength = parseInt(prompt("How many characters should the password be? Please select a number between 8 and 128"));
  } while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength));
  let passwordHasUpper = confirm("Would you like to use upper case letters?");
  let passwordHasLower = confirm("Would you like to use lower case letters?");
  let passwordHasNumber = confirm("Would you like to use numbers?");
  let passwordHasSymbol = confirm("Would you like to use symbols?");
  if (passwordHasUpper) {
    password.push(getUpper())
    passwordOptions += upper
  }
  if (passwordHasLower) {
    password.push(getLower())
    passwordOptions += lower
  }
  if (passwordHasNumber) {
    password.push(getNumber())
    passwordOptions += number
  }
  if (passwordHasSymbol) {
    password.push(getSymbol())
    passwordOptions += symbol
  }

  for (let i = 0; i < passwordLength - 4; i++) {
    password.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
  }
  return password.join('')
} 

// me -  generate random

function getUpper() {
  return upper[Math.floor(Math.random() * upper.length)];
}

function getLower() {
  return lower[Math.floor(Math.random() * lower.length)];
}

function getNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

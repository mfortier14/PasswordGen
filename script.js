var character = "abcdefghijklmnopqrstuvwyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@!-%_#"
var genButton = document.querySelector("#generate");
var copyButton = document.querySelector("#copy");

document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy").addEventListener("click", copyPassword);

chooseCharacter();
var Lowercase;
var upperCase;
var number;
var specialChar;

function chooseCharacter() {
    var lowerCase = confirm("Would you like atleast one lower case letter?");
    var upperCase = confirm("Would you like atleast one upper case letter?");
    var number = confirm("Would you like atleast one number?");
    var specialChar = confirm("Would you like atleast one special character?");


    console.log(lowerCase);
    console.log(upperCase);
    console.log(number);
    console.log(specialChar);
// var options, {
//     specialcharacters: specialChar,
//     uppercasecharacters: upperCase,
//     lowercasecharacters: lowerCase,
//     numbercharacters: number
// }

    if (lowerCase === false && upperCase === false && number === false && specialChar === false) {
        alert ("You must choose alteast one specification");
        chooseCharacter();
}

}

function generatePassword() {
    var passLength = prompt("Enter how long you'd like your password to be");
    var key = "";

    for (let i = 0; i < passLength; i++) {
        key += character[Math.floor(Math.random() * character.length)];
    };
    document.getElementById("password").textContent = key;

};

function copyPassword() {
   document.getElementById("password").select();
   document.execCommand("copy");
   document.getElementById("password").textContent = "";
   alert("Copied password to clipboard");
};
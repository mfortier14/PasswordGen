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
// created variables for the different character options 

function chooseCharacter() {
    var lowerCase = confirm("Would you like atleast one lower case letter?");
    var upperCase = confirm("Would you like atleast one upper case letter?");
    var number = confirm("Would you like atleast one number?");
    var specialChar = confirm("Would you like atleast one special character?");


    console.log(lowerCase);
    console.log(upperCase);
    console.log(number);
    console.log(specialChar);

// must choose atleast one of the character options or they will be asked again before generating a password 
    if (lowerCase === false && upperCase === false && number === false && specialChar === false) {
        alert ("You must choose alteast one specification");
        chooseCharacter();
}

}

// asking how long the password will be in length between 8 and 128 characters 
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
// when the copy to clipboard button is clicked, the textarea will go back to its default/ blank 
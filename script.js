var character = "abcdefghijklmnopqrstuvwyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@!-%_#"

document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy").addEventListener("click", copyPassword);

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
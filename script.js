// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("What's the length of the password?");
    var includeUpercase = confirm("Would you like to include upercase letters?");
    var includeLowercase = confirm("Would you like to include lowercase letters?");
    var includeNumbers = confirm("Would you like to include numbers?");
    var includeSpecialCharacters = confirm("Would you like to include special characters?");
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        password = password + generateRandomCharacter(includeUpercase, includeLowercase, includeNumbers, includeSpecialCharacters);
    }
    passwordText.value = password;

}
// all of my arrays 
function generateRandomCharacter(includeUpercase,includeLowercase, includeNumbers, includeSpecialCharacters) {
    var alphabet1 = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var alphabet2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var special = ["!","@","?","$","#","*","&"];
    var list = [];
    // Heres the code that says pull from each list 
    if (includeUpercase) {
        list = list.concat(alphabet2);
    }
    if (includeLowercase) {
        list = list.concat(alphabet1);
    }
    if (includeNumbers) {
        list = list.concat(numbers);
    }
    if (includeSpecialCharacters) {
        list = list.concat(special);
    }
    var randomNumber = Math.random();
    var randomValue = list.length * randomNumber;
    var randomIndex = Math.floor(randomValue);
    var randomCharacter = list[randomIndex];
    return randomCharacter;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
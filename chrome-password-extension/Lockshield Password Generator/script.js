// Attributes
const passwordField = document.querySelector('#passwordField');
const mainPage = document.querySelector('#mainPage');
const settingsPage = document.querySelector('#settingsPage');
const lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<','>',',','.','?']

let settingsToggle = false;
let upperLowerToggle = false;
let numbersToggle = false;
let specialCharactersToggle = false;

// Methods
const randomNumber = (min, max) => {
    const maxInt = Math.floor(max);
    const minInt = Math.ceil(min);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

const generatePassword = () => {
    let passwordOutput = '';
    const max = 6;
    console.log(randomNumber(1,4));
    
    for (let i = 0; i < max; i++) {
        switch(randomNumber(1,4)) {
            case 1:
                console.log('1');
                passwordOutput = passwordOutput + lowercaseCharacters.at(randomNumber(0,lowercaseCharacters.length - 1));
                break;
            case 2:
                console.log('2');
                passwordOutput = passwordOutput + uppercaseCharacters.at(randomNumber(0,uppercaseCharacters.length - 1));
                break;
            case 3:
                console.log('3');
                passwordOutput = passwordOutput + numbers.at(randomNumber(0,numbers.length - 1));
                break;
            case 4:
                console.log('4');
                passwordOutput = passwordOutput + specialCharacters.at(randomNumber(0,specialCharacters.length - 1));
                break;
        };
    };
    console.log(passwordOutput);
    passwordField.innerHTML = passwordOutput;
};

const savePassword = () => {

}

const toggleSettings = () => {
    settingsToggle = !settingsToggle;

    if (settingsToggle === true) {
        mainPage.style.display = 'none';
        settingsPage.style.display = 'flex';
    } else {
        mainPage.style.display = 'flex';
        settingsPage.style.display = 'none';
    };
};

// Event Listeners
document.querySelector('#generateButton').addEventListener('click', generatePassword);
document.querySelector('#saveButton').addEventListener('click', savePassword);
document.querySelector('#settingsButton').addEventListener('click', toggleSettings);
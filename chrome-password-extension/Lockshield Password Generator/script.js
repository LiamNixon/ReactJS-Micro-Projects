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
let lettersToggle = true;
let pinToggle = false;
let desiredLength = 4;

const generateButton = document.querySelector('#generateButton');
const saveButton = document.querySelector('#saveButton');
const settingsButton = document.querySelector('#settingsButton');
const lengthField = document.querySelector('#lengthField');
const mixToggle = document.querySelector('#mixToggle');
const numberToggle = document.querySelector('#numberToggle');
const specialToggle = document.querySelector('#specialToggle');
const letterToggle = document.querySelector('#letterToggle');
const pinToggleEl = document.querySelector('#pinToggle');

lengthField.value = desiredLength;

// Methods
const randomNumber = (min, max) => {
    const maxInt = Math.floor(max);
    const minInt = Math.ceil(min);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

const generatePassword = () => {
    let passwordOutput = '';
    let optionsList = [];
    let selectedList = [];

    if (lettersToggle) {
        optionsList.push(lowercaseCharacters);
    }

    if (upperLowerToggle) {
        optionsList.push(uppercaseCharacters);
    };

    if (numbersToggle) {
        optionsList.push(numbers);
    };

    if (specialCharactersToggle) {
        optionsList.push(specialCharacters);
    };

    if (optionsList.length != 0) {
        for (let i = 0; i < desiredLength; i++) {
            selectedList = optionsList[randomNumber(0, optionsList.length - 1)];
            passwordOutput = passwordOutput + selectedList[randomNumber(0, selectedList.length - 1)];
        };
    } else {
        passwordOutput = '* * *';
    }
    passwordField.innerHTML = passwordOutput;
};

const savePassword = () => {
    navigator.clipboard.writeText(passwordField.innerHTML);
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

const toggleMix = () => {
    if (pinToggleEl.checked === true || letterToggle.checked === true) {
        mixToggle.checked = false;
    } else {
        upperLowerToggle = !upperLowerToggle;
    };
};

const toggleNumbers = () => {
    if (pinToggleEl.checked === true) {
        numberToggle.checked = true;
    } else {
        numbersToggle = !numbersToggle;
    };
};

const toggleSpecial = () => {
    if (pinToggleEl.checked === true) {
        specialToggle.checked = false;
    } else {
        specialCharactersToggle = !specialCharactersToggle;
    };
};

const toggleLetters = () => {
    if (letterToggle.checked === true) {
        lettersToggle = false;
        mixToggle.checked = false;
        pinToggle = false;
        pinToggleEl.checked = false;
        upperLowerToggle = false;
    } else {
        lettersToggle = true;
    }
};

const togglePIN = () => {
    pinToggle = !pinToggle;
    if (pinToggleEl.checked === true) {
        lengthField.value = 4;
        desiredLength = 4;
        upperLowerToggle = false;
        mixToggle.checked = false;
        numbersToggle = true;
        numberToggle.checked = true;
        specialCharactersToggle = false;
        specialToggle.checked = false;
        lettersToggle = false;
        letterToggle.checked = false;
    };
};

const setLength = (e) => {
    if (pinToggle === true) {
        desiredLength = 4;
        e.target.value = 4;
    } else {
        if (e.target.value >= 4 && e.target.value <= 12) {
            desiredLength = e.target.value;
        } else if (e.target.value < 4) {
            desiredLength = 4;
            e.target.value = 4;
        } else {
            desiredLength = 12;
            e.target.value = 12;
        };
    };
};

// Event Listeners
generateButton.addEventListener('click', generatePassword);
saveButton.addEventListener('click', savePassword);
settingsButton.addEventListener('click', toggleSettings);
lengthField.addEventListener('input', setLength);
mixToggle.addEventListener('change', toggleMix);
numberToggle.addEventListener('change', toggleNumbers);
specialToggle.addEventListener('change', toggleSpecial);
letterToggle.addEventListener('change', toggleLetters);
pinToggleEl.addEventListener('change', togglePIN);
// Attributes
const passwordField = document.querySelector('#passwordField');
const mainPage = document.querySelector('#mainPage');
const settingsPage = document.querySelector('#settingsPage');
const maxLength = 20;
const lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9','0'];
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<','>',',','.','?']
const bannedWords = ['arse', 'ass', 'bastard', 'bitch', 'bloody', 'bollocks', 'fag', 'fuck', 'cock', 'crap', 'cunt', 'damn', 'dick', 'dyke', 'hell', 'kike', 'nigga', 'nigger', 'nigra', 'piss', 'prick', 'pussy', 'shit', 'shite', 'slut', 'whore', 'spastic', 'retard', 'twat', 'wanker', 'cum', 'tits', 'sex'];

let settingsToggle = false;
let upperLowerToggle = false;
let numbersToggle = false;
let specialCharactersToggle = false;
let lettersToggle = true;
let pinToggle = false;
let desiredLength = 4;
let blacklist = [];
let prefix = '';
let suffix = '';

const generateButton = document.querySelector('#generateButton');
const saveButton = document.querySelector('#saveButton');
const settingsButton = document.querySelector('#settingsButton');
const lengthField = document.querySelector('#lengthField');
const mixToggle = document.querySelector('#mixToggle');
const numberToggle = document.querySelector('#numberToggle');
const specialToggle = document.querySelector('#specialToggle');
const letterToggle = document.querySelector('#letterToggle');
const pinToggleEl = document.querySelector('#pinToggle');
const resetButton = document.querySelector('#resetButton');
const blacklistField = document.querySelector('#blacklistField');
const prefixField = document.querySelector('#prefixField');
const suffixField = document.querySelector('#suffixField');

lengthField.value = desiredLength;

// Methods
const randomNumber = (min, max) => {
    const maxInt = Math.floor(max);
    const minInt = Math.ceil(min);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const checkArrays = (target, against) => {
    return target.filter(x => against.indexOf(x) === -1);
}

const generatePassword = () => {
    saveButton.innerHTML = 'Copy';
    let finalOutput = '';
    let passwordOutput = '';
    let optionsList = [];
    let selectedList = [];

    if (lettersToggle) {
        if (checkArrays(lowercaseCharacters, blacklist).length > 0) {
            optionsList.push(checkArrays(lowercaseCharacters, blacklist));
        };
    };

    if (upperLowerToggle) {
        if (checkArrays(uppercaseCharacters, blacklist).length > 0) {
            optionsList.push(checkArrays(uppercaseCharacters, blacklist));
        };
    };

    if (numbersToggle) {
        if (checkArrays(numbers, blacklist).length > 0) {
            optionsList.push(checkArrays(numbers, blacklist));
        };
    };

    if (specialCharactersToggle) {
        if (checkArrays(specialCharacters, blacklist).length > 0) {
            optionsList.push(checkArrays(specialCharacters, blacklist));
        };
    };

    if (desiredLength < 4) {
        desiredLength = 4;
        lengthField.value = 4;
    } else if (desiredLength > maxLength) {
        desiredLength = maxLength;
        lengthField.value = maxLength;
    };

    if (optionsList.length != 0) {
        for (let i = 0; i < desiredLength; i++) {
            selectedList = optionsList[randomNumber(0, optionsList.length - 1)];
            passwordOutput = passwordOutput + selectedList[randomNumber(0, selectedList.length - 1)];
        }
    } else {
        passwordOutput = '* * *';
    };

    // Filter possible profanity from prefix/suffix options and prevent endless generation loop in next block
    if (prefix.length > 0 && suffix.length > 0) {
        for (let a = 0; a < bannedWords.length; a++) {
            if (prefix.toUpperCase().includes(bannedWords[a].toUpperCase())) {
                prefix = prefix.replace(bannedWords[a], '*');
            };
        };
        for (let b = 0; b < bannedWords.length; b++) {
            if (suffix.toUpperCase().includes(bannedWords[b].toUpperCase())) {
                suffix = suffix.replace(bannedWords[b], '*');
            };
        };
        finalOutput = prefix + passwordOutput + suffix;
    } else if (prefix.length > 0) {
            for (let a = 0; a < bannedWords.length; a++) {
                if (prefix.toUpperCase().includes(bannedWords[a].toUpperCase())) {
                    prefix = prefix.replace(bannedWords[a], '*');
                };
            };
            finalOutput = prefix + passwordOutput;
    } else if (suffix.length > 0) {
        for (let b = 0; b < bannedWords.length; b++) {
            if (suffix.toUpperCase().includes(bannedWords[b].toUpperCase())) {
                suffix = suffix.replace(bannedWords[b], '*');
            };
        };
        finalOutput = passwordOutput + suffix;
    } else {
        finalOutput = passwordOutput;
    };
    
    // Ensure no profanity is output in password
    for (let x = 0; x < bannedWords.length; x++) {
        if (finalOutput.toUpperCase().includes(bannedWords[x].toUpperCase())) {
            generatePassword;
        };
    };

    if (finalOutput.length <= 10) {
        passwordField.style.fontSize = 32 + 'px';
    } else if (finalOutput.length > 10 && finalOutput.length <= 20) {
        passwordField.style.fontSize = 28 + 'px';
    } else if (finalOutput.length > 20 && finalOutput.length <= 30) {
        passwordField.style.fontSize = 24 + 'px';
    } else {
        passwordField.style.fontSize = 20 + 'px';
    };
    
    passwordField.innerHTML = finalOutput;
};

const savePassword = () => {
    saveButton.innerHTML = 'Copied!';
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
    } else {
        lettersToggle = true;
    };
};

const setLength = (e) => {
    if (pinToggle === true) {
        desiredLength = 4;
        e.target.value = 4;
    } else if (e.target.value < 1) {
        desiredLength = 1;
        e.target.value = 1;
    } else if (e.target.value > maxLength) {
        desiredLength = maxLength;
        e.target.value = maxLength;
    } else {
        desiredLength = e.target.value;
    };
};

const resetSettings = () => {
    upperLowerToggle = false;
    mixToggle.checked = false;
    numbersToggle = false;
    numberToggle.checked = false;
    specialCharactersToggle = false;
    specialToggle.checked = false;
    lettersToggle = true;
    letterToggle.checked = false;
    pinToggle = false;
    pinToggleEl.checked = false;
    desiredLength = 4;
    lengthField.value = 4;
    blacklist = [];
    blacklistField.value = '';
    prefix = '';
    prefixField.value = '';
    suffix = '';
    suffixField.value = '';

};

const updateBlacklist = () => {
    blacklist = blacklistField.value.split('');
};

const updatePrefix = () => {
    if (prefixField.value.length > 10) {
        prefix = prefixField.value.split('', 10);
    } else {
        prefix = prefixField.value;
    }
};

const updateSuffix = () => {
    if (suffixField.value.length > 10) {
        suffix = suffixField.value.split('', 10);
    } else {
        suffix = suffixField.value;
    }
};

// Event Listeners
generateButton.addEventListener('click', generatePassword);
saveButton.addEventListener('click', savePassword);
settingsButton.addEventListener('click', toggleSettings);
resetButton.addEventListener('click', resetSettings);
lengthField.addEventListener('input', setLength);
blacklistField.addEventListener('input', updateBlacklist);
prefixField.addEventListener('input', updatePrefix);
suffixField.addEventListener('input', updateSuffix);
mixToggle.addEventListener('change', toggleMix);
numberToggle.addEventListener('change', toggleNumbers);
specialToggle.addEventListener('change', toggleSpecial);
letterToggle.addEventListener('change', toggleLetters);
pinToggleEl.addEventListener('change', togglePIN);
let mainElement = document.querySelector('.main');

let textareaElement = document.querySelector('.textarea1');

let buttonElement = document.querySelector('.goButton');

let textByWordsArray = [];


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// let inputElementsArray = [];

goButtonFunction = () => {

    textByWordsArray = [];
    mainElement.innerHTML = "";

    let nextWordStartSymbol = 0;

    let nextWord = textareaElement.value;

    textareaElement.value = textareaElement.value + " ";

    for (let i = 0; i < textareaElement.value.length; i++){  
        if (textareaElement.value[i] == " "){
            nextWord = "";
            for (let j = nextWordStartSymbol; j < i; j++){
                nextWord = nextWord + String(textareaElement.value[j]);
            }
            nextWordStartSymbol = i+1;
            mainElement.innerHTML = mainElement.innerHTML + `<input class="input">`
            // inputElementsArray.push(document.getElementById(`id${i}`));
            // document.getElementById(`id${i}`).value = nextWord;
            textByWordsArray.push(nextWord);
        }
    }

    textareaElement.value = textareaElement.value.trimEnd();

    let inputElementsArray = document.querySelectorAll('.input');
    let theLongesWord = textByWordsArray[0];

    for (let i = 0; i < inputElementsArray.length; i++){  
        inputElementsArray[i].value = textByWordsArray[i];
        if (theLongesWord.length < textByWordsArray[i].length){
            theLongesWord = textByWordsArray[i];
        }
    }
    console.log(`the longest is "${theLongesWord}"`);
    console.log(``);

    document.querySelector('.randomButton').style.visibility = "visible";
}

buttonElement.addEventListener('click',goButtonFunction);

let randomButtonElement = document.querySelector('.randomButton');

randomButtonFunction = () => {

    for (let i = 0; i < textByWordsArray.length; i++){
        for (let j = 0; j < textByWordsArray.length; j++){            
            if(textByWordsArray[i].length > textByWordsArray[j].length){
                let temp = textByWordsArray[i];
                textByWordsArray[i] = textByWordsArray[j];
                textByWordsArray[j] = temp;
            }
        }
    }  
    
    let thirtySymbolsString = "";
    
    for (let i = 0; i < textByWordsArray.length; i++){
        thirtySymbolsString = `${textByWordsArray[i]}`;
        for (let j = i+1; j < textByWordsArray.length; j++){
            if( thirtySymbolsString.length + textByWordsArray[j].length < 30 ){
                thirtySymbolsString = thirtySymbolsString + " " + textByWordsArray[j];
                if(thirtySymbolsString.length == 30){break;}
            } 
        }
        if(thirtySymbolsString.length == 30){break;}
    }
    if(thirtySymbolsString.length == 30) {console.log(`thirty Symbols String = ${thirtySymbolsString}`);}
    else {console.log(`Seems like it is impossible to make a 30-symbols string from these input words`);}
}

randomButtonElement.addEventListener('click',randomButtonFunction);
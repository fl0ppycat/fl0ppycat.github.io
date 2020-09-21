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

    let nextWordStartSymbol = 0;

    for (let i = 0; i < textareaElement.value.length; i++){  
        if (textareaElement.value[i] == " "){
            let nextWord = "";
            for (let j = nextWordStartSymbol; j < i; j++){
                nextWord = nextWord + String(textareaElement.value[j]);
            }
            nextWordStartSymbol = i+1;
            mainElement.innerHTML = mainElement.innerHTML + `<input id="id${i}" class="input">`
            // inputElementsArray.push(document.getElementById(`id${i}`));
            // document.getElementById(`id${i}`).value = nextWord;
            textByWordsArray.push(nextWord);
        }
    }

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

let randomButtonElement = document.querySelector('.randomButton');

randomButtonFunction = () => {

    thirtySymbolsString = "";
    while(thirtySymbolsString.length != 30){
        if((thirtySymbolsString.length > 30) || (thirtySymbolsString.length == 0)){thirtySymbolsString = `${textByWordsArray[randomInteger(1,textByWordsArray.length-1)]}`}
        thirtySymbolsString = `${thirtySymbolsString} ${textByWordsArray[randomInteger(1,textByWordsArray.length-1)]}`;
    }        

    console.log(`thirty Symbols String = ${thirtySymbolsString}`);
}

buttonElement.addEventListener('click',goButtonFunction);

randomButtonElement.addEventListener('click',randomButtonFunction);
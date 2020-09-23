const STR = "Во флотах 4 типа кораблей: эсминцы hp 2 dmg , линкоры hp 9 dmg 4, авианосцы hp 5 dmg 3, крейсеры hp 6 dmg 8."
numbersArray = [];

printArray = (array) => {
    for (let i = 0; i < array.length; i++){  
        console.log(`element №${i} = "${array[i]}"`);
    }
}

for (let i = 0; i < STR.length; i++){  
        if( !(isNaN (STR[i]) ) /*&& (STR[i] != " ")*/){
            numbersArray.push(STR[i]);
        }
}

printArray(numbersArray);

////////////////////////////////////////////////

// randomInteger = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// printArray = (array) => {
//     for (let i = 0; i < array.length; i++){  
//         console.log(`element №${i} = "${array[i]}"`);
//     }
//     console.log("");
// }

// let array = [];

// for (let i = 0; i < 100; i++){  
//     array[i] = randomInteger(-100,100);
// }

// printArray(array);

// let min = 0;
// for (let i = 0; i < 100; i++){  
//     if (array[i] < array[min]){ min = i; }  
// }

// console.log(`min index = ${min}`);


//////////////////////////////////////////////////

// let i = 11;
// let k = 33;
// let str = "";
//         for (; i < 33; i=i+2){  
//                 str = `${str} ${i + ((i % 2)-1)}`;
//         }
// console.log(str);    


////////////////////////////////////////////////////


// let a = [];

// for (let i = 0; i < 9; i++){  
//     let b = [];
//     for (let k = 0; k < 8; k++){
//         b[k] = i * k;
//     }
//     a[i] = b;
// }

// console.table(a);

// console.log

// let c = [];

// let d = [];
// for (let i = -1; i < 9; i++){  

//     for (let k = 0; k < 8; k++){
//         d[k] = i * k;
//     }
//     c[i] = d;
// }

// console.table(c);







////////////////////////////////////////







// let mainElement = document.querySelector('.main');

// let textareaElement = document.querySelector('.textarea1');

// let buttonElement = document.querySelector('.goButton');

// let textByWordsArray = [];

// function printArray(array){
//     for (let i = 0; i < array.length; i++){  
//         console.log(`element №${i} = "${array[i]}" (${array[i].length})`);
//     }
// }

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// // let inputElementsArray = [];

// goButtonFunction = () => {

//     textByWordsArray = [];
//     mainElement.innerHTML = "";

//     let nextWordStartSymbol = 0;

//     let nextWord = textareaElement.value;

//     textareaElement.value = textareaElement.value + " ";

//     for (let i = 0; i < textareaElement.value.length; i++){  
//         if (textareaElement.value[i] == " "){
//             nextWord = "";
//             for (let j = nextWordStartSymbol; j < i; j++){
//                 nextWord = nextWord + String(textareaElement.value[j]);
//             }
//             nextWordStartSymbol = i+1;
//             mainElement.innerHTML = mainElement.innerHTML + `<input class="input">`
//             // inputElementsArray.push(document.getElementById(`id${i}`));
//             // document.getElementById(`id${i}`).value = nextWord;
//             textByWordsArray.push(nextWord);
//         }
//     }

//     textareaElement.value = textareaElement.value.trimEnd();

//     let inputElementsArray = document.querySelectorAll('.input');
//     let theLongesWord = textByWordsArray[0];

//     for (let i = 0; i < inputElementsArray.length; i++){  
//         inputElementsArray[i].value = textByWordsArray[i];
//         if (theLongesWord.length < textByWordsArray[i].length){
//             theLongesWord = textByWordsArray[i];
//         }
//     }
//     console.log(`the longest is "${theLongesWord}"`);
//     console.log(``);

//     document.querySelector('.randomButton').style.visibility = "visible";
// }

// buttonElement.addEventListener('click',goButtonFunction);

// let randomButtonElement = document.querySelector('.randomButton');

// randomButtonFunction = () => {

//     for (let i = 0; i < textByWordsArray.length; i++){
//         for (let j = 0; j < textByWordsArray.length; j++){            
//             if(textByWordsArray[i].length > textByWordsArray[j].length){
//                 let temp = textByWordsArray[i];
//                 textByWordsArray[i] = textByWordsArray[j];
//                 textByWordsArray[j] = temp;
//             }
//         }
//     }  
    
//     let thirtySymbolsString = "";
    
//     for (let i = 0; i < textByWordsArray.length; i++){
//         thirtySymbolsString = `${textByWordsArray[i]}`;
//         for (let j = 0; j < textByWordsArray.length; j++){
//             if(i != j){
//                 if( thirtySymbolsString.length + textByWordsArray[j].length < 30 ){
//                     thirtySymbolsString = thirtySymbolsString + " " + textByWordsArray[j];
//                     if(thirtySymbolsString.length == 30){break;}
//                 } 
//             }
//         }
//         if(thirtySymbolsString.length == 30){break;}
//     }
//     if(thirtySymbolsString.length == 30) {console.log(`thirty Symbols String = "${thirtySymbolsString}" (${thirtySymbolsString.length})`);}
//     else {console.log(`Seems like it is impossible to make a 30-symbols string from these input words`);}
// }

// randomButtonElement.addEventListener('click',randomButtonFunction);
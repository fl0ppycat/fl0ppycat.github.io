
// const out5=[];
// for (let k = 0; k < 10; k++){
//     const out4=[];
//     for (let i = 0; i < 10; i++){
//         out4[i] = ((k+1) * (i+1));  
//         if (i<k) {out4[i] = null;}
//     }; 
    
//     out5[k] = out4;  

// };

// console.table(out5);

/////////////////////////////////////////


function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// let ar = [];

// for (let i = 0; i < 3; i++){
//     ar[i] = [];
//     for (let j = 0; j < 3; j++){
//         ar[i][j] = [];
//         for (let k = 0; k < 3; k++){
//             ar[i][j][k] = [];
//             for (let n = 0; n < 3; n++){
//                 ar[i][j][k][n] = randomInteger(1,9);
//             }
//         }
//     }   
// }

// console.log(ar);

/////////////////////////////////////////////////////////

// let str = "Red";
// str = str.toUpperCase();
// console.log(str);

/////////////////////////////////////////////////////////

// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// let player1 = 100;
// let player2 = 100;

// while((player1 > 0) && (player2 > 0) ) {
//     player1 = player1 - randomInteger(1,6);
//     console.log("player1 = " + player1);
   
//     player2 = player2 - randomInteger(1,6);
//     console.log("player2 = " + player2);
    
//     console.log('');
// }    
    
// if (player1 <= 0) {
//     console.log(`player1 lost`);}

// if (player2 <= 0) {
//     console.log(`player2 lost`);}

/////////////////////////////////////////////////////////


let mainEl = document.querySelector('.main');

for (let i = 0; i < 10; i++){
    mainEl.innerHTML = mainEl.innerHTML + `<input type="text" class="inpt">`
}

//массив, элементами которого будут html-inputы
let inptEl = document.querySelectorAll('.inpt');

//кнопка 1, которая выводит в консоль значения из инпутов
let btnEl1 = document.querySelector('.btn1');
btn1Func = () => {
    for (let i = 0; i < 10; i++){
        console.log(`input ${i+1} value = ${inptEl[i].value}`);
    }
    console.log('');
}
btnEl1.addEventListener('click',btn1Func);

//кнопка 2, которая записывает в инпуты случайное значение
let btnEl2 = document.querySelector('.btn2');
btn2Func = () => {
    for (let i = 0; i < 10; i++){
        inptEl[i].value = randomInteger(1,9);
    }
}
btnEl2.addEventListener('click',btn2Func);

//кнопка 3, которая увеличивает текущие значения инпутов в два раза
let btnEl3 = document.querySelector('.btn3');
btn3Func = () => {
    for (let i = 0; i < 10; i++){
        inptEl[i].value = inptEl[i].value * 2;
    }
}
btnEl3.addEventListener('click',btn3Func);
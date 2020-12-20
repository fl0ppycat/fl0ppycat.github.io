let btnElements = document.querySelectorAll(".btn");
btnElements = Array.from(btnElements);

let blockElements = document.querySelectorAll(".block");
blockElements = Array.from(blockElements);

// for (let i = 0; i < btnElements.length; i++) {
//     btnElements[i].addEventListener('click', eventListener => {
//         console.log(`clicked ${i} button`);
//         blockElements[i].classList.toggle("hidden");
//     });
    // btnElements[i].style.height = "0px";

//     let tempInterval = setInterval(() => {
//         btnElements[i].style.height = `${parseInt(btnElements[i].style.height) + 1}px`;
//         if(btnElements[i].style.height === "60px") clearInterval(tempInterval);
//     }, 50);

// }


btnElements[0].style.height = "0px";
btnElements[1].style.height = "0px";


setTimeout(() => {
    let tempInterval = setInterval(() => {
        btnElements[0].style.height = `${parseInt(btnElements[0].style.height) + 1}px`;
        if(btnElements[0].style.height === "60px") clearInterval(tempInterval);
    }, 50);
    setTimeout(() => {
        let tempInterval = setInterval(() => {
            btnElements[1].style.height = `${parseInt(btnElements[1].style.height) + 1}px`;
            if(btnElements[1].style.height === "60px") clearInterval(tempInterval);
        }, 50);
    },1);
},1);


















// boardDivEl = document.querySelector(".board");

// arrayCreator = (n) => {
//     let array = [];

//     for (let i = 0; i < n; i++){
//         array[i] = [];         
//         for (let j = 0; j < n; j++){
//             array[i].push(null);
//         }
//     }

//     return array;
// }

// let board = arrayCreator(8);

// // console.table(board);

// boardPrinter = (array) => {
//     boardDivEl.innerHTML = "";

//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length; j++){
//             // let classString = `class="cell"`;
//             // if(array[i][j] != null){
//             //     if(array[i][j] === "1"){ classString = `class="cell one"` }
//             //     if(array[i][j] === "2"){ classString = `class="cell two"` }
//             // };
//             boardDivEl.innerHTML = `${boardDivEl.innerHTML}<div class="cell" id="cell-${i}-${j}"></div>`/*<div ${classString}></div>`*/;
//         }
//     }
//     // boardDivEl.innerHTML = `${boardDivEl.innerHTML}<div class="counter">Found ${notNullCounter(array)} not null cells</div>`; 
// }

// boardPrinter(board);



// function getRandomInt(min, max) { //от мин до макс-1
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }



// const TILES_TYPES = ["corner", "impasse", "stick"]
// const TILES_OF_EACH_TYPE_COUNT = 10;


// // let stack = [];

// // tilesCreator = (typesCount, tilesCount) => {
// stackCreator = (typesCount, tilesCount) => {
//     let array = [];
//     for (let i = 0; i < typesCount; i++){
//         // array[i] = [];         
//         for (let j = 0; j < tilesCount; j++){
//             let tileObject = {};
//             tileObject.tileType = TILES_TYPES[i];
//             tileObject.id = j+1;
//             // array[i].push(tileObject);

//             let randomIndex = 0;
//             while(array[randomIndex] != null){
//                 randomIndex = getRandomInt(0, ((TILES_TYPES.length * TILES_OF_EACH_TYPE_COUNT)) ); 
//             }
//             array[randomIndex] = tileObject;
//         }
//     }

//     return array;
// }

// // let tiles = tilesCreator(TILES_TYPES.length, TILES_OF_EACH_TYPE_COUNT);

// // console.log("array tiles");
// // console.table(tiles);

// stackDivEl = document.querySelector(".stack");

// // stackCreator = (tilesArray) => {
// //     array = [];
// //         for (let j = 0; j < tilesArray.length; j++){
// //             let randomIndex = 0;
// //             while(array[randomIndex] != null){
// //                 randomIndex = getRandomInt(0, ((TILES_TYPES.length * TILES_OF_EACH_TYPE_COUNT)) ); 
// //             }
// //             array[randomIndex] = tilesArray[j];
// //         }

// //     return array;
// // }

// // let stack = stackCreator(tiles);

// let stack = stackCreator(TILES_TYPES.length, TILES_OF_EACH_TYPE_COUNT);

// console.log("array stack");
// console.log(stack);




// stackPrinter = (array) => {
//     stackDivEl.innerHTML = "";

//     for (let i = 0; i < array.length; i++){
//         stackDivEl.innerHTML = `${stackDivEl.innerHTML}<div class="tile ${stack[i].tileType}" id="tile-${stack[i].id}"></div>`;   /*<div ${classString}></div>`;*/
//         document.getElementById(`tile-${stack[i].id}`).style.zIndex = -(array.length);
//     }
// }

// stackPrinter(stack);


// // id для тайлов
// let tilesElements = document.querySelectorAll(".tile");

// tilesElements = Array.from(tilesElements);

// tilesElements.forEach(element => {
//     element.addEventListener('click', eventListener => {
//         console.log(`clicked ${eventListener.target.id} tile`);
//     });
// });

// // id для клеток поля
// let cellElements = document.querySelectorAll(".cell");

// cellElements.forEach(element => {
//     element.addEventListener('click', eventListener => {
//         console.log(`clicked ${eventListener.target.id} tile`);
//         // tileSpawner(eventListener.target.id);
//         // boardPrinter(board);
//     });
// });



// tileSpawner = (id) => {
//     let arr = document.getElementById(id)
//     board

//     // = stack.pop();
// }


    
// // for (let i = 0; i < array.length; i++){
// //         stackDivEl.innerHTML = `${stackDivEl.innerHTML}<div class="tile ${stack[i].tileType}"></div>`;   /*<div ${classString}></div>`;*/
// // }

























// // let mainEl = document.querySelector(".main");
// // let barEl = document.querySelector(".bar");


// // const SPACES = 10;

// // function getRandomInt(min, max) {
// //     min = Math.ceil(min);
// //     max = Math.floor(max);
// //     return Math.floor(Math.random() * (max - min)) + min;
// // }



// // class space {    
// //     constructor(id,occupied) {
// //         this.id = id;
// //         this.occupied = occupied;
// //         this.startTime = null;
// //     }
// // }

// // let parking = [];

// // for (let i = 0; i < SPACES; i++) {
// //     parking[i] = (new space(i+1,Boolean(getRandomInt(0,2))));
// // }

// // console.table(parking);

// // ////////////////////////////////////////////
// // // 2) функция подсчета количества занятых и свободных паркомест

// // emptySpaces = () => {
// //     let counter = 0;
// //      parking.forEach(element => {
// //          if(element.occupied) {counter++}
// //      });
// //     return(counter); 
// // }

// // usedSpaces = () => {
// //     return(SPACES - emptySpaces());
// // }

// // ///////////////////////////////////////////
// // // 3) Отобразить на странице паркоместа с указанием id,
// // // свободно/занято, время занятого.

// // const generateBarHTML = () => {
// //     let occu = usedSpaces();
// //     let free = emptySpaces();
// //     barEl.innerHTML = `занятых: ${occu}, свободных: ${free} `;
// // }

// // const getOneSpaceDiv = (index) => {
// //     let str = ``;
// //     str = `<div>
// //              <ul>
// //               <li> id = ${parking[index].id} </li>
// //               <li> id = ${parking[index].occupied} </li>
// //               <li> id = ${parking[index].time} </li>
// //              </ul>
// //             </div>`
// //     return str;
// // }

// // mainEl.innerHTML = `${getOneSpaceDiv(3)}`;

// // const generateParkingHTML = () => {
// //     let str =  ``;
// //     parking.forEach((value,index) => {
// //         str = str + getOneSpaceDiv(index);
// //     })
// //     return str;
// // }

// // mainEl.innerHTML = generateParkingHTML();
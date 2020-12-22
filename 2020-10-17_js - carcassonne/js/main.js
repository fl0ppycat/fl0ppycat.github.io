
boardDivEl = document.querySelector(".board");

arrayCreator = (n) => {
    let array = [];

    for (let i = 0; i < n; i++){
        array[i] = [];         
        for (let j = 0; j < n; j++){
            array[i].push(null);
        }
    }

    return array;
}

let board = arrayCreator(8);
console.table(board);

boardPrinter = (array) => {
    boardDivEl.innerHTML = "";

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (board[i][j] === null){
            boardDivEl.innerHTML = `${boardDivEl.innerHTML}<div class="cell" id="cell-${i}-${j}"></div>`/*<div ${classString}></div>`*/;
            } else {
                boardDivEl.innerHTML = `${boardDivEl.innerHTML}<div class="tile ${board[i][j].tileType}" id="tile-${i}-${j}"></div>`;
                tileRotate((document.getElementById(`tile-${i}-${j}`)),board[i][j].rotationDegree)
            }
        }
    }
}

boardPrinter(board);



function getRandomInt(min, max) { //от мин до макс-1
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



const TILES_TYPES = ["corner", "impasse", "stick"]
const TILES_OF_EACH_TYPE_COUNT = 10;


//создает стак по 10 карт каждого из 3х типов в случайной последовательности
stackCreator = (typesCount, tilesCount) => {
    let array = [];
    for (let i = 0; i < typesCount; i++){
        for (let j = 0; j < tilesCount; j++){
            let tileObject = {};
            tileObject.tileType = TILES_TYPES[i];
            tileObject.id = j+1;
            tileObject.rotationDegree = 0;

            let randomIndex = 0;
            while(array[randomIndex] != null){
                randomIndex = getRandomInt(0, ((TILES_TYPES.length * TILES_OF_EACH_TYPE_COUNT)) ); 
            }
            array[randomIndex] = tileObject;
        }
    }

    return array;
}

stackDivEl = document.querySelector(".stack");

let stack = stackCreator(TILES_TYPES.length, TILES_OF_EACH_TYPE_COUNT);

console.log("array stack");
console.log(stack);



stackPrinter = (array) => {
    stackDivEl.innerHTML = "";

    for (let i = 0; i < array.length; i++){
        stackDivEl.innerHTML = `${stackDivEl.innerHTML}<div class="tile ${stack[i].tileType}" id="tile-${stack[i].id}"></div>`;   /*<div ${classString}></div>`;*/
    }
}

stackPrinter(stack);

tileRotate = (tileObject,degree) => { 
    let splittedId = tileObject.id.split('-');

    board[splittedId[1]][splittedId[2]].rotationDegree = board[splittedId[1]][splittedId[2]].rotationDegree + degree;
    tileObject.style.transform = 'rotate(' + board[splittedId[1]][splittedId[2]].rotationDegree + 'deg)';
}

// event listenerы для тайлов
tileMarker = () => {
    let tilesElements = document.querySelectorAll(".tile");
    tilesElements = Array.from(tilesElements);

    tilesElements.forEach(element => {
        element.addEventListener('click', eventListener => {
            console.log(`clicked ${eventListener.target.id} tile`);
            tileRotate(element,90);
        });
    });
}




tileSpawner = (id) => {
    let splittedId = id.split('-');
    board[splittedId[1]][splittedId[2]] = stack.pop();

    boardPrinter(board);
    console.table(board);
    tileMarker();
    stackPrinter(stack);


    let cellElements = document.querySelectorAll(".cell");

    cellElements.forEach(element => {
        element.addEventListener('click', eventListener => {
            console.log(`clicked ${eventListener.target.id} tile`);
            tileSpawner(eventListener.target.id);
        });
    });
}

// event listenerы для клеток поля
cellMarker = () => {
    let cellElements = document.querySelectorAll(".cell");

    cellElements.forEach(element => {
        element.addEventListener('click', eventListener => {
            console.log(`clicked ${eventListener.target.id} tile`);
            tileSpawner(eventListener.target.id);
        });
    });
}

// cellMarker();


main = () => {
    boardPrinter(board);
    stackPrinter(stack);
    tileMarker();
    cellMarker();
}

main();
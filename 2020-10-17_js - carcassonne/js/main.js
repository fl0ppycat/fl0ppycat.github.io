
boardDivEl = document.querySelector(".board");

arrayCreator = (n) => {
    let array = [];
    for (let i = 0; i < n; i++){
        array[i] = new Array(n);         
        array[i].fill(null);
    }
    return array;
}

let board = arrayCreator(8);

//рисует поле в html
boardPrinter = (array) => {
    boardDivEl.innerHTML = "";
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (board[i][j] === null){
            boardDivEl.innerHTML = `${boardDivEl.innerHTML}<div class="cell" id="cell-${i}-${j}"></div>`/*<div ${classString}></div>`*/;
            } else {
            boardDivEl.innerHTML = `${boardDivEl.innerHTML}<div class="tile ${board[i][j].tileType}" id="tile-${i}-${j}" style="transform: rotate(${board[i][j].rotationDegree}deg)"></div>`;
            }
            // if(board[i][j].wrongPosition){boardDivEl.}
        }
    }
}

function getRandomInt(min, max) { //от мин до макс -1
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//создает стак из 30 карт (по 10 карт каждого из 3х типов) в случайной последовательности
const TILES_TYPES = ["corner", "impasse", "stick"]
const TILES_OF_EACH_TYPE_COUNT = 10;

stackCreator = (typesCount, tilesCount) => {
    let array = [];
    for (let i = 0; i < typesCount; i++){
        for (let j = 0; j < tilesCount; j++){
            let tileObject = {};
            tileObject.tileType = TILES_TYPES[i];
            tileObject.id = j+1;
            tileObject.rotationDegree = 0;
            switch (tileObject.tileType) {
                case 'corner':
                    tileObject.sides = [0,1,1,0];
                    break;
                case 'impasse':
                    tileObject.sides = [0,1,0,0];
                    break;
                case 'stick':
                    tileObject.sides = [0,1,0,1];
                    break;
                default:
                    console.log(`error. there is no such type of tiles as ${tileObject.tileType}`);
            }

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

stackPrinter = (array) => {
    stackDivEl.innerHTML = "";
    for (let i = 0; i < array.length; i++){
        stackDivEl.innerHTML = `${stackDivEl.innerHTML}<div class="tile ${stack[i].tileType}" id="tile-${stack[i].id}"></div>`;   /*<div ${classString}></div>`;*/
    }
}

moveDifs = [];
moveDifs[0] = new Array(0,-1);
moveDifs[1] = new Array(1,0);
moveDifs[2] = new Array(0,1);
moveDifs[3] = new Array(-1,0);

checkOneDirection = (x, y, difX, difY) => { 
    console.log("");
    // console.log("x=" + x + "    " + "y=" + y + "    " + "difX=" + difX + "    " + "difY=" + difY + "    "  ); 
    // console.log("y+difY = " + (Number(y)+difY)); 
 
    if  ( ( ((y+difY) < 0) || ((x+difX) < 0) ) || ( ((y+difY) > 7) || ((x+difX) > 7) ) ) {
        return(false)
    }
    else {
        if( (board[(x+difX)][(y+difY)]) != null) {
            return(false)
            }
            else {
                return(true)
            }
    }
} 

//проверяет, что происходит вокруг тайла с координатами x, y 
checkAllDirections = (y, x) => { 
    let directionsArr = new Array(4); 
    for(let i=0; i<4; i++){
        directionsArr[i] = checkOneDirection(Number(x), Number(y), moveDifs[i][0], moveDifs[i][1]);
    }

    return(directionsArr);  
}

//поворот тайла на 90 градусов по клику
tileRotate = (tileObject,degree) => { 
    let splittedId = tileObject.id.split('-');
    board[splittedId[1]][splittedId[2]].rotationDegree = board[splittedId[1]][splittedId[2]].rotationDegree + degree;
    tileObject.style.transform = 'rotate(' + board[splittedId[1]][splittedId[2]].rotationDegree + 'deg)';

    // board[splittedId[1]][splittedId[2]].sides.push(board[splittedId[1]][splittedId[2]].sides.shift()); // -90
    board[splittedId[1]][splittedId[2]].sides.unshift(board[splittedId[1]][splittedId[2]].sides.pop());   // +90

    directions = checkAllDirections(splittedId[1],splittedId[2]);
    if(directions.includes(false)){
        tileObject.style.border="2px solid red";
        board[splittedId[1]][splittedId[2]].wrongPosition=true;
    }
}

//развешивает event listenerы на все клетки, занятые тайлами
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

//добавляет последний из стака тайл на поле 
tileSpawner = (id) => {
    let splittedId = id.split('-');
    board[splittedId[1]][splittedId[2]] = stack.pop();

    boardPrinter(board);
    tileMarker();
    stackPrinter(stack);
    cellMarker();

    console.table(board);

    //будущая проверка на совпадающие проходы между тайлами
    // if ( !sidesIsMatching(id) ){
    // document.getElementById("tile-"+splittedId[1]+"-"+splittedId[2]).style.borderColor = "red";
    // boardPrinter(board);
    // }
}

//развешивает event listenerы на все пустые клетки поля
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
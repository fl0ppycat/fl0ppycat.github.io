
let chessboardDiv = document.querySelector('.chessboard');

const CHARS = "ABCDEFGH" 

let chessboard = [];                // массив объектов-фигур для рассчетов игровой механики
let cellsElementsArray = [];        // массив объектов-html для отображения происходящего на доске

class King{
    constructor(color, position){
        if(color == "w"){
            this.htmlCode = "&#9812;";
        }
        if(color == "b"){
            this.htmlCode = "&#9818;";
        }
        // this.currentPosition = position;
    }
}
class Queen{
    constructor(color, position){
        if(color == "w"){
            this.htmlCode = "&#9813;";
        }
        if(color == "b"){
            this.htmlCode = "&#9819;";
        }
        // this.currentPosition = position;
    }
}
class Rook{
    constructor(color, position){
        if(color == "w"){
            this.htmlCode = "&#9814;";
        }
        if(color == "b"){
            this.htmlCode = "&#9820;";
        }
        // this.currentPosition = position;
    }
}
class Bishop{
    constructor(color, position){
        if(color == "w"){
            this.htmlCode = "&#9815;";
        }
        if(color == "b"){
            this.htmlCode = "&#9821;";
        }
        // this.currentPosition = position;
    }
}
class Knight{
    constructor(color, position){
        if(color == "w"){
            this.htmlCode = "&#9816;";
        }
        if(color == "b"){
            this.htmlCode = "&#9822;";
        }
        // this.currentPosition = position;
    }
}
class Pawn{
    constructor(color, position){
        if(color == "w"){
            this.htmlCode = "&#9817;";
        }
        if(color == "b"){
            this.htmlCode = "&#9823;";
        }
        // this.currentPosition = position;
    }
}


//функция, которая возвращает фигуру по id её стартовой клетки
figureById = (id) => {
    switch (id) {
        //черные
        case "A7":
        case "B7":
        case "C7":
        case "D7": 
        case "E7":
        case "F7":
        case "G7":
        case "H7":   
          return(new Pawn("b"));
        
        case "A8":
        case "H8":
            return(new Rook("b"));
        
        case "B8":
        case "G8":
            return(new Knight("b"));
        
        case "C8":
        case "F8":
            return(new Bishop("b"));
        
        case "D8":
            return(new King("b"));

        case "E8":
            return(new Queen("b"));

        //белые
        case "A2":
        case "B2":
        case "C2":
        case "D2": 
        case "E2":
        case "F2":
        case "G2":
        case "H2":   
          return(new Pawn("w"));
        
        case "A1":
        case "H1":
            return(new Rook("w"));
        
        case "B1":
        case "G1":
            return(new Knight("w"));
        
        case "C1":
        case "F1":
            return(new Bishop("w"));
        
        case "D1":
            return(new King("w"));

        case "E1":
            return(new Queen("w"));    
 
        default:
            // console.log(`Something is wrong in figureById function with "${id}"id`);
            return null;
      }
}


initialize = () => {
    let str = ``;

    for (let i = 0; i < 8; i++){
        chessboard[i] = [];         
        cellsElementsArray[i] = []; 
        
        for (let j = 0; j < 8; j++){
            id = `${CHARS[j]}${8-i}`; //id клетки, с которой работает текущая итерация цикла
            
            //в текущую ячейку спавним фигуру, в соответствии с id ячейки
            chessboard[i][j] = figureById(`${id}`);
            
            //собираем <div>-строку следующей клетки
            str = `<div id="${id}" class="cell"`; // добавляем id, класс "cell" всем ячейкам
            if( ((i + j) % 2) == 0){ //красим чётные клетки
                str = `${str} style="background-color: grey;"></div>`;} else {
                    str = `${str}></div>`; //не красим нечётные
            }

            //добавляем получившуюся клетку к уже имеющимся
            chessboardDiv.innerHTML = `${chessboardDiv.innerHTML} ${str}`; 
            //добавляем ткущий div-объект в массив div-ов
            cellsElementsArray[i][j] = document.getElementById(`${id}`);
            //рисуем в нем фигуру, если она там должна быть
            if(chessboard[i][j] != null){cellsElementsArray[i][j].innerHTML = chessboard[i][j].htmlCode;}
        }
    }
    console.table(cellsElementsArray);
}

initialize();

let chessboardDiv = document.querySelector('.chessboard');

let CHARS = "ABCDEFGH" 

let str = ``;

let cellsElementsArray = [];

figureById = (id) => {
    switch (id) {
        case "A7":
        case "B7":
        case "C7":
        case "D7": 
        case "E7":
        case "F7":
        case "G7":
        case "H7":   
          return("&#9823;");
        
        case "A8":
        case "H8":
            return("&#9820;");
        
        case "B8":
        case "G8":
            return("&#9822;");
        
        case "C8":
        case "F8":
            return("&#9821;");
        
        case "D8":
            return("&#9819;");

        case "E8":
            return("&#9818;");
 
        default:
            return(``);
      }
}

for (let i = 8; i > 0; i--){
    for (let j = 0; j < 8; j++){
        str = `<div id="${CHARS[j]}${i}" class="cell row${i}"`;

        if( ((i + j) % 2) == 0){
            str = `${str} style="background-color: grey;"></div>`;} else {
                str = `${str}></div>`;
        }

        chessboardDiv.innerHTML = `${chessboardDiv.innerHTML} ${str}`; 
        
        document.getElementById(`${CHARS[j]}${i}`).innerHTML = figureById(`${CHARS[j]}${i}`);
    }
    cellsElementsArray[8-i] = document.querySelectorAll(`.row${i}`);
}

console.table(cellsElementsArray);



// for (let i = 8; i > 0; i--){
//     for (let j = 0; j < 8; j++){ 
//         cellsArray[i][j] = document.getElementById(`${CHARS[j]}${i}`);

//         cellsArray[i][j].innerHTML = "";

//         if(i == 7){cellsArray[i][j].innerHTML = "&#9823;";}
//         if(i == 8){
//             if((j == 0) || (j == 7)){cellsArray[i][j].innerHTML = "&#9820;";}
//             if((j == 1) || (j == 6)){cellsArray[i][j].innerHTML = "&#9822;";}
//             if((j == 2) || (j == 5)){cellsArray[i][j].innerHTML = "&#9821;";}

//             if(j == 3){cellsArray[i][j].innerHTML = "&#9819;";}
//             if(j == 4){cellsArray[i][j].innerHTML = "&#9818;";}  
//         }
        
//         if(i == 2){cellsArray[i][j].innerHTML = "&#9817;";}
//         if(i == 1){
//             if((j == 0) || (j == 7)){cellsArray[i][j].innerHTML = "&#9814;";}
//             if((j == 1) || (j == 6)){cellsArray[i][j].innerHTML = "&#9816;";}
//             if((j == 2) || (j == 5)){cellsArray[i][j].innerHTML = "&#9815;";}

//             if(j == 3){cellsArray[i][j].innerHTML = "&#9812;";}
//             if(j == 4){cellsArray[i][j].innerHTML = "&#9813;";}  
//         }  
//     }
// }

let chessboardDiv = document.querySelector('.chessboard');

let CHARS = "ABCDEFGH" 

let str = ``;

let cellsArray = [];


for (let i = 8; i > 0; i--){
    cellsArray[i] = [];
    for (let j = 0; j < 8; j++){
        str = `<div id="${CHARS[j]}${i}" class="cell"`;

        if( ((i + j) % 2) == 0){
            str = `${str} style="background-color: grey;">${CHARS[j]}${i}</div>`;} else {
                str = `${str}>${CHARS[j]}${i}</div>`;
        }

        chessboardDiv.innerHTML = `${chessboardDiv.innerHTML} ${str}`;
    }
}


for (let i = 8; i > 0; i--){
    for (let j = 0; j < 8; j++){ 
        cellsArray[i][j] = document.getElementById(`${CHARS[j]}${i}`);

        cellsArray[i][j].innerHTML = "";

        if(i == 7){cellsArray[i][j].innerHTML = "&#9823;";}
        if(i == 8){
            if((j == 0) || (j == 7)){cellsArray[i][j].innerHTML = "&#9820;";}
            if((j == 1) || (j == 6)){cellsArray[i][j].innerHTML = "&#9822;";}
            if((j == 2) || (j == 5)){cellsArray[i][j].innerHTML = "&#9821;";}

            if(j == 3){cellsArray[i][j].innerHTML = "&#9819;";}
            if(j == 4){cellsArray[i][j].innerHTML = "&#9818;";}  
        }
        
        if(i == 2){cellsArray[i][j].innerHTML = "&#9817;";}
        if(i == 1){
            if((j == 0) || (j == 7)){cellsArray[i][j].innerHTML = "&#9814;";}
            if((j == 1) || (j == 6)){cellsArray[i][j].innerHTML = "&#9816;";}
            if((j == 2) || (j == 5)){cellsArray[i][j].innerHTML = "&#9815;";}

            if(j == 3){cellsArray[i][j].innerHTML = "&#9812;";}
            if(j == 4){cellsArray[i][j].innerHTML = "&#9813;";}  
        }  
    }
}


// console.table(cellsArray);



// console.log(`${cellsArray[2][5].innerHTML}`);

// cellsArray[2][5].innerHTML = `AAAAAAAA`;

// console.log(`${cellsArray[2][5].innerHTML}`);
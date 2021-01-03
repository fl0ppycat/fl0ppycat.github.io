//1) создание массива размером N x N

arrayCreator = (n) => {
    let array = [];

    for (let i = 0; i < n; i++){
        array[i] = [];         
        for (let j = 0; j < n; j++){
            array[i].push(new Object);
        }
    }

    return array;
}

let someArray = arrayCreator(5);
// console.table(someArray);

//2) очистка массива

arrayEreaser = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            // delete array[i][j];
            array[i][j] = null;
        }
    }

    return array;
}

arrayEreaser(someArray);
// console.table(someArray);

////////////////////////////////////////////////////////
// 3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве

notNullCounter = (array) => {
    let counter = 0;

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[i][j] != null){
                counter++;
            }
        }
    }

    return counter;
}

console.log(`Found ${notNullCounter(someArray)} not null elements`);

////////////////////////////////////////////////////////
// 4) отобрази игровое поле(клетки массива) и строку статуса, в которой будет написано количество ненулевых клеток.

let bodyEl = document.getElementsByTagName("body");

let mainDivEl = document.querySelector('.main');

arrayPrinter = (array) => {

    mainDivEl.innerHTML = "";

    // for (let i = 0; i < array.length; i++){
    //     for (let j = 0; j < array.length; j++){
    //         let classString = `class="cell"`;
    //         if(array[i][j] != null){
    //             if(array[i][j] === "1"){ classString = `class="cell one"` }
    //             if(array[i][j] === "2"){ classString = `class="cell two"` }
    //         };
    //         mainDivEl.innerHTML = `${mainDivEl.innerHTML}<div ${classString}></div>`;
    //     }
    // }

    // let cellsHtmlCollection = document.getElementsByClassName('cell');
    // let cellsArr = Array.from(cellsHtmlCollection);
    // cellsArr.forEach((element) => {
    //     mainDivEl.removeChild(element);
    // })

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            let divCellEl = document.createElement("div");
            divCellEl.classList.add('cell');
            if(array[i][j] != null){
                if(array[i][j] === "1"){ divCellEl.classList.add('one'); }
                if(array[i][j] === "2"){ divCellEl.classList.add('two'); }
            };
            mainDivEl.appendChild(divCellEl);
        }
    }

    mainDivEl.innerHTML = `${mainDivEl.innerHTML}<div class="counter">Found ${notNullCounter(array)} not null cells</div>`; 
}


moveDifs = [];
moveDifs[0] = new Array(0,-1);
moveDifs[1] = new Array(-1,0);
moveDifs[2] = new Array(1,0);
moveDifs[3] = new Array(0,1);

////////////////////////////////////////////////////////
// 5) нарисуй 4 кнопки-стрелки: "вверх", "вниз", "влево", "вправо"

let buttonsElsArray = [];

for (let i = 0; i < moveDifs.length; i++){
    buttonsElsArray[i] = document.createElement("button");
    bodyEl[0].appendChild(buttonsElsArray[i]);
}

buttonsElsArray[0].innerHTML = `&#8592;`;
buttonsElsArray[1].innerHTML = `&#8593;`;
buttonsElsArray[2].innerHTML = `&#8595;`;
buttonsElsArray[3].innerHTML = `&#8594;`;




let x = 0;
let y = 0;

someArray[x][y] = "1";

////////////////////////////////////////////////////////
//   8) сделай отключение соответствующих кнопок управления, если курсор с краю поля или наступает на свой след.

checkDirection = (difX, difY) => {  
    if  ( ( ((y+difY) < 0) || ((x+difX) < 0) ) || ( ((y+difY) > 4) || ((x+difX) > 4) ) ) {
        return(false)
    }
    else {
        if( (someArray[x+difX][y+difY]) != null) {
            return(false)
            }
            else {
                return(true)
            }
    }
} 

checkAllDirections = () => { 
    let blockedDirections = buttonsElsArray.reduce((sum,element,i) => {
        element = element.disabled = !checkDirection(moveDifs[i][0],moveDifs[i][1]);
        return sum + element;
      }, 0); 

    return(blockedDirections);  
}


checkAllDirections();

arrayPrinter(someArray);


gameOver = () => {
    mainDivEl.innerHTML = `${mainDivEl.innerHTML} <div class="fail">GAME OVER</div>`;
}

oneMoreTimeQuestion = () => {
    let gameOverAlert = confirm("Bad news: you failed. Good news: you can try one more time.");
    if(gameOverAlert){ location.reload(); }
}

startGameOverTimer = (time) => {
    tenSecondsTimeout = setTimeout(() => {
        gameOver();
    }, time);
}

startGameOverTimer(10000);

////////////////////////////////////////////////////////
// 6. сделай управление мышкой и клавиатурой, там где находится курсор, закрашиваем клетку синим цветом. Первоначальное положение в левом верхнем углу. В массиве, в соответствующую ячейку писать "1".

moveFunction = (xMove,yMove) => {
    clearTimeout(tenSecondsTimeout);

    someArray[x][y] = "2";
    x = x + xMove;
    y = y + yMove;
    someArray[x][y] = "1";

    arrayPrinter(someArray);
    
    if(checkAllDirections() > 3){
        gameOver();
        // oneMoreTimeQuestion();
    }

    startGameOverTimer(10000);
}


buttonsElsArray.forEach((element, i) => {
    element.addEventListener('click', eventListener => {
        moveFunction(moveDifs[i][0],moveDifs[i][1]);
    });
})


let eventListener = document.addEventListener('keydown', (event) => {
    switch(event.code){
      case "ArrowLeft":{
        if(checkDirection(0,-1)){    
            moveFunction(0,-1);
        }
        break;
      }
      case "ArrowUp":{
        if(checkDirection(-1,0)){    
            moveFunction(-1,0);
        }
        break;
      }
      case "ArrowDown":{
        if(checkDirection(1,0)){    
            moveFunction(1,0);
        }
        break;
      }
      case "ArrowRight":{ 
        if(checkDirection(0,1)){    
            moveFunction(0,1);
        }
        break;
      }
      default:
        console.log(`You can't use this key for control. event.code: ${event.code}, event.key: ${event.key}`);
    }
});
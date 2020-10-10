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
};

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
};

arrayEreaser(someArray);
// console.table(someArray);

// 3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве

notNullCounter = (array) => {
    let counter = 0;

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[i][j] != null){
                counter++;
            };
        }
    }

    return counter;
}

console.log(`Found ${notNullCounter(someArray)} not null elements`);

// 4) отобрази игровое поле(клетки массива) и строку статуса, в которой будет написано количество ненулевых клеток.

let bodyEl = document.getElementsByTagName("body");

let mainDivEl = document.querySelector('.main');

arrayPrinter = (array) => {
    let counter = 0;

    mainDivEl.innerHTML = "";

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            let classString = `class="cell"`;
            if(array[i][j] != null){
                counter++
                classString = `class="cell selected"`
            };
            mainDivEl.innerHTML = `${mainDivEl.innerHTML}<div ${classString}></div>`;
        }
    }

    // bodyEl[0].innerHTML = `${bodyEl[0].innerHTML}<div class="counter">Found ${counter} not null cells</div>`; 
}

// arrayPrinter(someArray);

// 5) нарисуй 4 кнопки-стрелки: "вверх", "вниз", "влево", "вправо"

let buttonLeftEl = document.createElement("button");
buttonLeftEl.innerHTML = `&#8592;`;
bodyEl[0].appendChild(buttonLeftEl);
let buttonUpEl = document.createElement("button");
buttonUpEl.innerHTML = `&#8593;`;
bodyEl[0].appendChild(buttonUpEl);
let buttonDownEl = document.createElement("button");
buttonDownEl.innerHTML = `&#8595;`;
bodyEl[0].appendChild(buttonDownEl);
let buttonRightEl = document.createElement("button");
buttonRightEl.innerHTML = `&#8594;`;
bodyEl[0].appendChild(buttonRightEl);


////////////////////////////////////////////////////////
// 6. сделай управление мышкой и клавиатурой, там где находится курсор, закрашиваем клетку синим цветом. Первоначальное положение в левом верхнем углу. В массиве, в соответствующую ячейку писать "1".

let x = 0;
let y = 0;

someArray[x][y] = "1";

arrayPrinter(someArray);

moveFunction = (yMove,xMove) => {
    someArray[x][y] = null;
    x = x + xMove;
    y = y + yMove;
    someArray[x][y] = "1";

    arrayPrinter(someArray);
    // console.table(someArray);
}


buttonLeftEl.addEventListener('click', eventListener => {
    moveFunction(-1,0);
});
buttonUpEl.addEventListener('click', eventListener => {
    moveFunction(0,-1);
});
buttonDownEl.addEventListener('click', eventListener => {
    moveFunction(0,1);
});
buttonRightEl.addEventListener('click', eventListener => {
    moveFunction(1,0);
});





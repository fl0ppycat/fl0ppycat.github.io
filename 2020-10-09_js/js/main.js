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
console.table(someArray);

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
console.table(someArray);

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

let mainDivEl = document.querySelector('.main');

arrayPrinter = (array) => {
    
    let counter = 0;
    let strRow = "";

    for (let i = 0; i < array.length; i++){
        // let strRow = `<div class="row">`;
        for (let j = 0; j < array.length; j++){
            // let strRow = `${strRow}<div class="cell"></div>`;
            if(array[i][j] != null){counter++};
            mainDivEl.innerHTML = `${mainDivEl.innerHTML}<div class="cell"></div>`;
        }
        // strRow = `${strRow} </div>`;
        // mainDivEl.innerHTML = `${mainDivEl.innerHTML} ${strRow}`;
    }
    mainDivEl.innerHTML = `${mainDivEl.innerHTML}<div class="counter">Found ${counter} not null cells</div>`; 
}

arrayPrinter(someArray);

// 5) нарисуй 4 кнопки-стрелки: "вверх", "вниз", "влево", "вправо"

let bodyEl = document.getElementsByTagName("body");

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



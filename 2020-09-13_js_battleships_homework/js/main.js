let nubmerOfFleets = 6;
let amountOfFleets = 10;

// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2');

// if(input1.value != null){nubmerOfFleets = Number(input1.value);
// if(input2.value != null){amountOfFleets = Number(input2.value);


let goButton = document.querySelector('.goButton');



class destroer {
    constructor() {
        this.label = "Destroer",
        this.healthPoints = 45,
        this.attackPoints = 10,
        // this.attackPoints = 999,
        this.state = "ok"
    }
}

class battleship {    
    constructor() {
        this.label = "Battleship",
        this.healthPoints = 100,
        this.attackPoints = 4,
        // this.attackPoints = 999,
        this.state = "ok"
    }
}

class carrier {    
    constructor() {
        this.label = "Aircraft carrier",
        this.healthPoints = 15,
        this.attackPoints = 40,
        // this.attackPoints = 999,
        this.state = "ok"
    }
}

class cruiser {    
    constructor() {
        this.label = "Cruiser",
        this.healthPoints = 60,
        this.attackPoints = 8,
        // this.attackPoints = 999,
        this.state = "ok"
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function shipPicker(n){
    switch (n % 4) {
        case 1:
            // console.log('Destroer succefully created');
            return (new destroer);
        case 2:
            // console.log('Battleship succefully created');
            return (new battleship);
        case 3:
            // console.log('Carrier succefully created');
            return (new carrier);
        case 4:
            // console.log('Cruiser succefully created');
            return (new cruiser);
        default:
          console.log(`Something goes wrong in shipPicker function`);
      }
}

//создаем массив флотов, размером с переменную numberOfFleets, заданную в начале 
let fleets = new Array(nubmerOfFleets);

for (let i = 0; i < nubmerOfFleets; i++){
    fleets[i] = new Array(amountOfFleets); //в каждый элемент массива fleets добавляем массив конкретного флота, размером amountOfFleets
    for (let j = 0; j < fleets[i].length; j++){
        fleets[i][j] = shipPicker(getRandomInt(1,4));//в каждый элемент массива флота создаем корабль, выбирая его среди одного из 4х типов
    }    
}



//функция, которая выводит в консоль один корабль
//получает  на вход объект корабля, возвращает строку
function printShip(ship){
    let first = "";
    let second = "";
    switch (ship.state) {
        case "ok":
            // first = "[";
            // second = "]";
            break;
        case "shooter":
            first = "(";
            second = ")";
            break;
        case "target":
            first = "{";
            second = "}";
            break;
        case "dead":
            // first = "";
            // second = "-";
            break;
        default:
          console.log(`Something goes wrong in stateSwitcher function`);
      }
    
    consoleShipString = `${first}${ship.healthPoints}${second}`

    return (consoleShipString);
}


//выводим текущее состояние всех флотов
function printFleets(){
    for (let i = 0; i < nubmerOfFleets; i++){
        let consoleFleetString = '';
        for (let j = 0; j < fleets[i].length; j++){
            if (fleets[i][j].state == "dead"){
                consoleFleetString = `${consoleFleetString} x`
            } else {
            consoleFleetString = `${consoleFleetString} ${printShip(fleets[i][j])}`;
            }
        }
        console.log(consoleFleetString); 
    }
}

function defeatedFleetsCount(){
    let counter = null;
    for (let i = 0; i < nubmerOfFleets; i++){
        if (fleets[i].state == "defeated"){
            counter++;
        }
    }
    return counter;
}


function nextTurn(){  
    while(defeatedFleetsCount() != (nubmerOfFleets-1)){
            
            console.log("");
            console.log("");
            console.log(""); 

            let firstFleet = 0;
            let firstShip = 0;
            let secondFleet = 0;
            let secondShip = 0;
            
            do{
                do{
                    firstFleet = getRandomInt(0,nubmerOfFleets);
                    firstShip = getRandomInt(0,amountOfFleets);
                    first = fleets[firstFleet][firstShip];
                } while (first.state == "dead");

                do{
                    secondFleet = getRandomInt(0,nubmerOfFleets);
                    secondShip = getRandomInt(0,amountOfFleets);
                    second = fleets[secondFleet][secondShip];
                } while (second.state == "dead");
                
            } while ((secondFleet == firstFleet) || (secondShip == firstShip));
                

            first.state = "shooter";
            second.state = "target";

            
            let damage = (first.attackPoints + ((getRandomInt(((first.attackPoints/100)*20),((first.attackPoints/100)*(-20)))))); // урон с погрешностью в -20%/+20%
            second.healthPoints = second.healthPoints - (damage); 
            
            console.log(`ship №${firstShip+1} from fleet №${firstFleet+1} attacked ship №${secondShip+1} from fleet №${secondFleet+1} and dealed ${damage} damage`);
            
            printFleets();

            first.state = "ok";
            if (second.healthPoints > 0){
                second.state = "ok";
            } else {
                second.state = "dead";
                console.log(`ship №${secondShip+1} from fleet №${secondFleet+1} is dead`);
            }


            for (let i = 0; i < nubmerOfFleets; i++){
                let deadShipCounter = null;
                if (fleets[i].state != "defeated"){
                    for (let j = 0; j < fleets[i].length; j++){
                        if (fleets[i][j].state == "dead"){
                            deadShipCounter++;
                        }
                    }
                    if (deadShipCounter == fleets[i].length){
                        fleets[i].state = "defeated"
                        console.log(`fleet №${i+1} is defeated`);
                    }
                }       
            }
            console.log(``);
    }

    for (let i = 0; i < nubmerOfFleets; i++){
        if(fleets[i].state != "defeated"){
            console.log(`fleet №${i+1} won this battle`);
        }
    };

}



goButton.addEventListener('click',() => {
    nextTurn()
});
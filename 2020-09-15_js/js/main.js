// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
// alert( randomInteger(1, 3) );


//************************************


// let newString = "";

// let divElement = document.querySelector(".zzz");

// for (let i = 0; i < 10; i++){
//     newString = newString + "&#980" + String(i) + ";";
    
//     divElement.innerHTML = divElement.innerHTML + newString;
// }


//************************************


function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  

 
    let divElement = document.querySelector(".zzz");

    let rand = randomInteger(1,32);

    let inp = null;

    do {
        inp = Number(prompt());

        if(inp<rand){  
        divElement.innerHTML = "random > input";
        } else {
            divElement.innerHTML = "random < input";
        }
    } while (inp != rand)

console.log("Got it!")







// while (inp != rand) {
//     inp = Number(prompt("Dhejfgjkhrl"));
//     console.log(`you entered ${inp}`);
//     if(inp<rand){    
//     divElement.innerHTML = ">";
//     } else {
//         divElement.innerHTML = "<";
//     }

// } 













// let nubmerOfFleets = 3;
// let amountOfFleets = 4;


// // let input1Element = document.querySelector('.input1');
// // let input2Element = document.querySelector('.input2');
// // let setButtonElement = document.querySelector('.setButton');

// // setButtonElement.addEventListener('click',() => {    
// //     let nubmerOfFleets = (Number(input1Element.value));
// //     let amountOfFleets = (Number(input2Element.value));
// // });


// let battlegroundDiv = document.querySelector('.battleground');

// let goButton = document.querySelector('.goButton');



// class destroer {
//     constructor() {
//         this.label = "Destroer",
//         this.healthPoints = 45,
//         this.attackPoints = 10
//     }
// }

// class battleship {    
//     constructor() {
//         this.label = "Battleship",
//         this.healthPoints = 100,
//         this.attackPoints = 4
//     }
// }

// class carrier {    
//     constructor() {
//         this.label = "Carrier",
//         this.healthPoints = 15,
//         this.attackPoints = 40
//     }
// }

// class cruiser {    
//     constructor() {
//         this.label = "Cruiser",
//         this.healthPoints = 60,
//         this.attackPoints = 8
//     }
// }


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; 
// }

// function shipPicker(n){
//     switch (n % 4) {
//         case 1:
//             // console.log('Destroer succefully created');
//             return (new destroer);
//         case 2:
//             // console.log('Battleship succefully created');
//             return (new battleship);
//         case 3:
//             // console.log('Carrier succefully created');
//             return (new carrier);
//         case 4:
//             // console.log('Cruiser succefully created');
//             return (new cruiser);
//         default:
//           console.log(`Something goes wrong in shipPicker function`);
//       }
// }

// // function randomIdGen() {
// //     return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
// // }

// let fleets = new Array(nubmerOfFleets);

// for (let i = 0; i < nubmerOfFleets; i++){
//     let strNewFleet='';
//     fleets[i] = new Array(amountOfFleets);
//     strNewFleet = strNewFleet + "<div class=\"fleet " + "\" id=fleet" + String(i) + "></div>";
//     battlegroundDiv.innerHTML = battlegroundDiv.innerHTML + strNewFleet;
//     let strNewShip = '';
//     for (let j = 0; j < fleets[i].length; j++){
//         fleets[i][j] = shipPicker(getRandomInt(1,4));
//         fleets[i][j].htmlID = ("fleet" + String(i) + "ship" + String(j));
//         strNewShip = strNewShip + "<div class=\"ship" + "\" id=" + fleets[i][j].htmlID + ">" + fleets[i][j].healthPoints + "</div>";
//         document.getElementById("fleet" + String(i)).innerHTML = strNewShip;
//     }    
// }

// // function removeShip(ship){
// //     for (let i = 0; i < nubmerOfFleets; i++){
// //         for (let j = 0; j < fleets[i].length; j++){
// //             if(fleets[i][j].htmlID == ship.htmlID){
// //                 fleets.splice(j,1);
// //                 break;
// //             }
// //         } 
// //     }    
// // }


// function attack(first, second){
//     document.querySelectorAll(".ship").forEach(element => element.style.backgroundColor="rgb(199, 199, 199)");

//     document.getElementById(second.htmlID).style.backgroundColor="red";
//     document.getElementById(first.htmlID).style.backgroundColor="yellow";

//     second.healthPoints = second.healthPoints - first.attackPoints;
//     document.getElementById(second.htmlID).innerHTML = second.healthPoints;
//     console.log(first.htmlID + " attacked " + second.htmlID + " and dealed " + first.attackPoints + " damage");

//     if(second.healthPoints < 1){
//         console.log(second.htmlID + " died");
//         document.getElementById(second.htmlID).id="dead";
//         // removeShip(second);
//     }
// }


// function nextTurn(){  

//     let firstFleet = 0;
//     let firstShip = 0;
//     let secondFleet = 0;
//     let secondShip = 0;
    
//     do{
//         do{
//             firstFleet = getRandomInt(0,nubmerOfFleets);
//             firstShip = getRandomInt(0,amountOfFleets);
//             first = fleets[firstFleet][firstShip];
//         } while (first.healthPoints < 1);

//         do{
//             secondFleet = getRandomInt(0,nubmerOfFleets);
//             secondShip = getRandomInt(0,amountOfFleets);
//             second = fleets[secondFleet][secondShip];
//         } while (second.healthPoints < 1);
        
//     } while ((secondFleet == firstFleet) || (secondShip == firstShip))
        
//     attack(first,second);  
// }

// goButton.addEventListener('click',() => {
//     nextTurn()
// });


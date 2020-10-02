const bodyElement = document.getElementsByTagName("body");

let divControls = document.createElement("div");
divControls.classList.add('controls');
bodyElement[0].appendChild(divControls);

let divTrainElement = document.createElement("div");
divTrainElement.classList.add('train');
divTrainElement.innerHTML = `<img src="./images/train4.png"></img>`

let divRailElement = document.createElement("div");
divRailElement.classList.add('rail');

bodyElement[0].appendChild(divRailElement);
bodyElement[0].appendChild(divTrainElement);

let divLightElement = document.createElement("div");

divTrainElement.appendChild(divLightElement);





let buttonRightElment = document.createElement("button");
buttonRightElment.innerHTML = "move Right >";
let buttonLeftElment = document.createElement("button");
buttonLeftElment.innerHTML = "< move Left";
let buttonLightElment = document.createElement("button");
buttonLightElment.innerHTML = "toogle Light";

divControls.appendChild(buttonLeftElment);
divControls.appendChild(buttonLightElment);
divControls.appendChild(buttonRightElment);

buttonRightElment.addEventListener('mousedown', eventListener => {
  moveFunction(divTrainElement,true);
});
buttonLeftElment.addEventListener('mousedown', eventListener => {
  moveFunction(divTrainElement,false);
});
buttonLightElment.addEventListener('click', eventListener => {
  divLightElement.classList.toggle("light");
});


let nextPosition = "0px";
let currentDirection = false;

moveFunction = (element,nextDirection) => {
  nextPosition = `${(nextDirection) ? (parseInt(nextPosition) + 2) : (parseInt(nextPosition) - 2)}px`;
  if (nextDirection != currentDirection){
    divTrainElement.classList.toggle("flip");
    currentDirection = nextDirection;
  }      
  element.style.left = nextPosition;
}

let eventListener = document.addEventListener('keydown', (event) => {
  switch(event.code){
    case "ArrowRight":{ 
      moveFunction(divTrainElement,true);
      break;
    }
    case "ArrowLeft":{
      moveFunction(divTrainElement,false);
      break;
    }
    case "KeyF":{
        divLightElement.classList.toggle("light");
        break;
    }
    default:
      console.log(`event.code: ${event.code}, event.key: ${event.key}`);
  }
})



























// let divTrainElementsArray = [];

// for (let i = 0; i < 4; i++){
//   divTrainElementsArray.push(document.createElement("div"));
//   divTrainElementsArray[i].classList.add('border-size');
//   divTrainElementsArray[i].classList.add('blue');  
//   bodyElement[0].appendChild(divTrainElementsArray[i]);
//   //// divTrainElementsArray[i].addEventListener('mousedown', e => {
//   ////   e.target.classList.add("red")
//   //// });
//   //// divTrainElementsArray[i].addEventListener('mouseup', e => {
//   ////   e.target.classList.remove("red")
//   //// });

//   divTrainElementsArray[i].addEventListener('click', eventListener => {
//     eventListener.target.classList.toggle("red")
//   });

 
// }

// let el = document.addEventListener('keydown', (event) => {
//   console.log(event.code, event.key);
// })


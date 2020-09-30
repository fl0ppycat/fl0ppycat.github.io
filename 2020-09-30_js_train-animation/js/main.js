const bodyElement = document.getElementsByTagName("body");

let divTrainElement = document.createElement("div");
divTrainElement.classList.add('train');
divTrainElement.innerHTML = "&#128642;"

let divRailElement = document.createElement("div");
divRailElement.classList.add('rail');

let divLightElement = document.createElement("div");

bodyElement[0].appendChild(divRailElement);
bodyElement[0].appendChild(divTrainElement);
divTrainElement.appendChild(divLightElement);

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
    case "Space":{
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


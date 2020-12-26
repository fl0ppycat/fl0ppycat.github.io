const bodyElement = document.getElementsByTagName("body");

let divControls = document.createElement("div");
divControls.classList.add('controls');
bodyElement[0].appendChild(divControls);

let divTrainElement = document.createElement("div");
divTrainElement.classList.add('train');
divTrainElement.classList.add('move');
divTrainElement.classList.add('flip');

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
  moveFunction(true);
});
buttonLeftElment.addEventListener('mousedown', eventListener => {
  moveFunction(false);
});

buttonLightElment.addEventListener('click', eventListener => {
  divLightElement.classList.toggle("light");
});


let paused = true;
let currentDirection = true;

moveFunction = (nextDirection) => {
  //movement direction. true - right, false - left
  if(nextDirection) {
        divTrainElement.style.left = "70vw";
    } else { divTrainElement.style.left = "5vw"; }

  //"pause" state, if same direction pressed twice
    if ((!paused) && (nextDirection === currentDirection)){
        divTrainElement.style.left = divTrainElement.offsetLeft + "px";
        paused = true;      
    } else {paused = false}

  //180 degree image flip based on movement direction
    if (nextDirection != currentDirection){
      divTrainElement.classList.toggle("flip");
      currentDirection = nextDirection;
      paused = false;
    }
}

//same for keyboard actions
let eventListener = document.addEventListener('keydown', (event) => {
  switch(event.code){
    case "ArrowRight":{ 
      moveFunction(true);
      break;
    }
    case "ArrowLeft":{
      moveFunction(false);
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
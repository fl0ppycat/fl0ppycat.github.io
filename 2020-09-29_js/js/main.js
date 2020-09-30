const bodyElement = document.getElementsByTagName("body");

let divElementsArray = [];

for (let i = 0; i < 4; i++){
  divElementsArray.push(document.createElement("div"));
  divElementsArray[i].classList.add('border-size');
  divElementsArray[i].classList.add('blue');  
  bodyElement[0].appendChild(divElementsArray[i]);
  //// divElementsArray[i].addEventListener('mousedown', e => {
  ////   e.target.classList.add("red")
  //// });
  //// divElementsArray[i].addEventListener('mouseup', e => {
  ////   e.target.classList.remove("red")
  //// });

  divElementsArray[i].addEventListener('click', eventListener => {
    eventListener.target.classList.toggle("red")
  });

 
}

let el = document.addEventListener('keydown', (event) => {
  console.log(event.code, event.key);
})


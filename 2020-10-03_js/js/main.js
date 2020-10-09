const today = new Date();
const birthday = new Date("06-20-1990");
let dif = birthday - today;
console.log("days from = " + dif/1000/60/60/24);


// console.log(perfomance.now());

let main = document.querySelector(".main");

const func = () => {
    let temp = new Date();
    main.innerHTML = temp.getSeconds();
}
// setTimeout(func,2000);
setInterval(func,1000);
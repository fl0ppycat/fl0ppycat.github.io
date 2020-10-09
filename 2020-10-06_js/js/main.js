
const mainEl = document.querySelector(".main");
const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");

let intervalTime1 = null;

btn1El.addEventListener("click", () => {
    startTimer();
});

btn2El.addEventListener("click", () => {
    pauseTimer();
});

let a = 0;

setTimeout(() => {
    btn2El.classList.remove("hidden");
}, 11000);

let startTimer = () => {
    intervalTime1 = setInterval(() => {
        a = a + 2;
        console.log(a);
    },2000);
};

let pauseTimer = () => {
        clearInterval(intervalTime1);
};









// setInterval(() => {
//     a = a + 2;
//     console.log("1: ,", a);
// }, 2000);
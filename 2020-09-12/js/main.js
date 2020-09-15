
let i1el = document.querySelector('.input1');
let i2el = document.querySelector('.input2');
let i3el = document.querySelector('.input3');
let go1el = document.querySelector('.go1');
let div1el = document.querySelector('.sum');


go1el.addEventListener('click',() => {
    div1el.innerHTML = ((Number(i1el.value) + Number(i2el.value) + Number(i3el.value)));
});





// i1el.addEventListener('input',(ev) => {
//     console.dir(ev.target.value);
// });





// const arr = [1, 2, 3, 4, 5, 6, 7];

// let sum = 0;
// for (let i=1; i<arr.length; i=i+2){
//     sum = sum + arr[i];
// }

// console.log(sum)




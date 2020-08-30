let flagWidth = null;
let flagHeight = null;
let flagBackgroundLG = null;
let tempHeight = 100;
let tempWidth = 200;
let one = 1;
/***** НИЖЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/

let fifty = tempHeight / (tempWidth / tempHeight);
let zero = one - one;
let two_and_half = (tempWidth + fifty) / tempHeight;
let three = (tempWidth + tempHeight) / tempHeight;
let two_hundred_fifty_five = (((one + one) ** (one + one)) + one) + fifty + tempWidth;

let rgb_blue = `rgb(${zero},${zero},${two_hundred_fifty_five})`;
let rgb_yellow = `rgb(${two_hundred_fifty_five},${two_hundred_fifty_five},${zero})`;

flagWidth = `${tempWidth * two_and_half}px`;
flagHeight = `${tempHeight * three}px`;
flagBackgroundLG = `to bottom, ${rgb_blue}, ${rgb_blue} ${fifty}%, ${rgb_yellow} ${fifty}%, ${rgb_yellow} ${tempHeight}%`;

/***** ВЫШЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/
/*
s
.flag { 
  width: <значение переменной flagWidth>;
  height: <значение переменной flagHeight>;
  background: linear-gradient(<значение переменной flagBackgroundLG>);
}

*/

flag.style.height = flagHeight;
flag.style.width = flagWidth;
flag.style.background = `linear-gradient(${ flagBackgroundLG })`;


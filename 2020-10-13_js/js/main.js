let mainEl = document.querySelector(".main");
let barEl = document.querySelector(".bar");


const SPACES = 10;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



class space {    
    constructor(id,occupied) {
        this.id = id;
        this.occupied = occupied;
        this.startTime = null;
    }
}

let parking = [];

for (let i = 0; i < SPACES; i++) {
    parking[i] = (new space(i+1,Boolean(getRandomInt(0,2))));
}

console.table(parking);

////////////////////////////////////////////
// 2) функция подсчета количества занятых и свободных паркомест

emptySpaces = () => {
    let counter = 0;
     parking.forEach(element => {
         if(element.occupied) {counter++}
     });
    return(counter); 
}

usedSpaces = () => {
    return(SPACES - emptySpaces());
}

///////////////////////////////////////////
// 3) Отобразить на странице паркоместа с указанием id,
// свободно/занято, время занятого.

const generateBarHTML = () => {
    let occu = usedSpaces();
    let free = emptySpaces();
    barEl.innerHTML = `занятых: ${occu}, свободных: ${free} `;
}

const getOneSpaceDiv = (index) => {
    let str = ``;
    str = `<div>
             <ul>
              <li> id = ${parking[index].id} </li>
              <li> id = ${parking[index].occupied} </li>
              <li> id = ${parking[index].time} </li>
             </ul>
            </div>`
    return str;
}

mainEl.innerHTML = `${getOneSpaceDiv(3)}`;

const generateParkingHTML = () => {
    let str =  ``;
    parking.forEach((value,index) => {
        str = str + getOneSpaceDiv(index);
    })
    return str;
}

mainEl.innerHTML = generateParkingHTML();

const PLACES = 16;

let parkingDivEl = document.querySelector(".parking");
let controlsDivEl = document.querySelector(".controls");

let startDate = moment();

class parkingPlace{
    constructor(id,occupied,time){
        this.id = id;
        this.occupied = occupied;
        this.time = time;
    }
}

function getRandomInt(min, max) { //от мин до макс-1
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 

parkingArrayCreator = (n) => {
    let array = new Array(n);
        for (let i = 0; i < n; i++){
            array[i] = new parkingPlace(i+1,Boolean(getRandomInt(0,2)),moment(0));
            if (array[i].occupied) {
                array[i].time = moment(0).add(getRandomInt(1,30), 'second');
            }
        }
    return array;
}

let parking = parkingArrayCreator(PLACES);

// console.table(parking);
// console.log("");

const freePlaces = (arr) => {
    let sum = 0;
    arr.forEach(function(element) {
        if (!element.occupied) {sum = sum + 1};
    });
    return(sum);
}

timeOutputDivEl = document.querySelector(".current-time");
timeOutputDivEl.innerHTML = `00:00:00`;

let freePlacesDivEl = document.querySelector(".free-spaces");
let occupiedCounterDivEl = document.querySelector(".occupied-spaces");
freePlacesDivEl.innerHTML = `${freePlaces(parking)}`;
occupiedCounterDivEl.innerHTML = `${parking.length - freePlaces(parking)}`;

parkingRender = () => {
    parking.forEach(function(element, index) {
        let tempParkPlaceDivEl = document.createElement("div");
        tempParkPlaceDivEl.classList.add("parking_place");
            let tempIdDivEl = document.createElement("div");
            tempIdDivEl.classList.add("id");
            tempIdDivEl.innerHTML = `${index + 1}`;

            let tempFreeDivEl = document.createElement("div");
            tempFreeDivEl.classList.add("free");
            tempFreeDivEl.innerHTML = "free";

            let tempOccupiedDivEl = document.createElement("div");
            tempOccupiedDivEl.classList.add("occupied");
                let tempReleaseDivEl = document.createElement("div");
                tempReleaseDivEl.classList.add("release_throught");
                tempReleaseDivEl.innerHTML = `<span>occupied</span>`;          
                tempOccupiedDivEl.append(tempReleaseDivEl);   

        tempParkPlaceDivEl.append(tempIdDivEl);
        // tempParkPlaceDivEl.append(tempOccupiedDivEl);
        tempParkPlaceDivEl.appendChild(tempOccupiedDivEl);
        tempParkPlaceDivEl.appendChild(tempFreeDivEl);
        
        if (element.occupied) {
            tempFreeDivEl.classList.add("invisible");
            tempParkPlaceDivEl.style.border = "2px solid darkred"
        } else {tempOccupiedDivEl.classList.add("invisible");
                tempParkPlaceDivEl.style.border = "2px solid darkgreen"
        }
        parkingDivEl.append(tempParkPlaceDivEl);
    });
}

parkingRender();

let modalDivEl = document.querySelector(".pop-up");
modalDivEl.addEventListener('click', eventListener => {
    eventListener.target.style.display = "none";
});

addEventListeners = () => {
    Array.from(document.querySelectorAll(".parking_place")).forEach(function(element, i) {
        element.addEventListener('click', eventListener => {
            if(parking[i].occupied){
                console.log("changed to 'free'");
                //set parking place free:
                parking[i].occupied = false;
                element.querySelector(".occupied").classList.add("invisible");
                element.style.border =  "2px solid darkgreen";
                element.querySelector(".free").classList.remove("invisible");
            } else{
                //display modal window
                document.querySelector(".pop-up").style.display = "flex";
            }
        });
    });
}

addEventListeners();

oneSecondInterval = setInterval(() => {
    timeOutputDivEl.innerHTML = `${startDate.add(-100, "milliseconds").format("HH:mm:ss")}`;

    Array.from(document.querySelectorAll(".parking_place")).forEach(function(element, index) {
        parking[index].time.add(-100, "milliseconds");

        if(new Date((parking[index].time)).getTime() == 0) {
            //set parking place free:
            parking[index].occupied = false;
            element.querySelector(".occupied").classList.add("invisible");
            element.style.border =  "2px solid darkgreen";
            element.querySelector(".free").classList.remove("invisible");
        }
        //recalc free and nonfree places:
        freePlacesDivEl.innerHTML = `${freePlaces(parking)}`;
        occupiedCounterDivEl.innerHTML = `${parking.length - freePlaces(parking)}`;
        //redraw time to release:
        element.querySelector(".occupied").innerHTML = `<span class="gray">will be released throught</span> <br> <b>${parking[index].time.format("mm:ss")}</b>`;
    });    
}, 100);   

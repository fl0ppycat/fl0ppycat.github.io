
const PLACES = 16;

let parkingDivEl = document.querySelector(".parking");
let controlsDivEl = document.querySelector(".controls");

let startDate = moment();

class parkingPlace{
    constructor(id,occupied,releaseTime){
        this.id = id;
        this.occupied = occupied;
        this.releaseTime = releaseTime;
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
                let randomReleaseTime = moment(0);
                randomReleaseTime.add(0, 'hour').add(0, 'minute').add(getRandomInt(1,30), 'second');
                array[i].releaseTime = randomReleaseTime;
            }
        }
    return array;
}

let parking = parkingArrayCreator(PLACES);

// console.table(parking);
// console.log("");

occupiedCounter = () => {
    let sum = 0;
    parking.forEach(function(element, index) {
        if (element.occupied) {sum++};
    });
    return(sum);
}

    // let currentTimeDivEl = document.createElement("div");
    // currentTimeDivEl.classList.add("current_time");
    //     let timeOutputDivEl = document.createElement("div");
    //     timeOutputDivEl.classList.add("time_output");

    timeOutputDivEl = document.querySelector(".time_output");
    timeOutputDivEl.innerHTML = `00:00:00`;

    // timeOutputDivEl.innerHTML = `${startDate.format("HH:mm:ss")}`;

//     currentTimeDivEl.append(timeOutputDivEl);
// controlsDivEl.append(currentTimeDivEl);

let occupiedCounterDivEl = Array.from(document.querySelectorAll(".places_output"))[0];
let freeCounterDivEl = Array.from(document.querySelectorAll(".places_output"))[1];
occupiedCounterDivEl.innerHTML = `${occupiedCounter()}`;
freeCounterDivEl.innerHTML = `${parking.length - occupiedCounter()}`;


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
                // tempReleaseDivEl.innerHTML = `<span class="gray">will be released throught</span> <br> <b>${element.releaseTime.format("mm:ss")}</b>`;
                tempReleaseDivEl.innerHTML = `<span>occupied</span>`;          
                tempOccupiedDivEl.append(tempReleaseDivEl);   

        tempParkPlaceDivEl.append(tempIdDivEl);
        // tempParkPlaceDivEl.append(tempOccupiedDivEl);
        tempParkPlaceDivEl.appendChild(tempOccupiedDivEl);
        tempParkPlaceDivEl.appendChild(tempFreeDivEl);
        
        if (element.occupied) {
            tempFreeDivEl.classList.add("invisible");
            tempParkPlaceDivEl.style.border =  "2px solid darkred"
        } else {tempOccupiedDivEl.classList.add("invisible");
                tempParkPlaceDivEl.style.border =  "2px solid darkgreen"
        }
        parkingDivEl.append(tempParkPlaceDivEl);
    });
}

parkingRender();

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
                console.log("not occupied");
            }
        });
    });
}

addEventListeners();

oneSecondInterval = setInterval(() => {
    timeOutputDivEl.innerHTML = `${startDate.add(1, "second").format("HH:mm:ss")}`;

    Array.from(document.querySelectorAll(".parking_place")).forEach(function(element, index) {
        parking[index].releaseTime.add(-1, "second");

        if(new Date((parking[index].releaseTime)).getTime() == 0) {
            //set parking place free:
            parking[index].occupied = false;
            element.querySelector(".occupied").classList.add("invisible");
            element.style.border =  "2px solid darkgreen";
            element.querySelector(".free").classList.remove("invisible");
            //recalc free and nonfree places:
            occupiedCounterDivEl.innerHTML = `${occupiedCounter()}`;
            freeCounterDivEl.innerHTML = `${parking.length - occupiedCounter()}`;
        }
        element.querySelector(".occupied").innerHTML = `<span class="gray">will be released throught</span> <br> <b>${parking[index].releaseTime.format("mm:ss")}</b>`;
    });

    // parkingDivEl.innerHTML = "";
    // parkingRender();
    
}, 1000);   

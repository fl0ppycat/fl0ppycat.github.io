
let timeInputEl = document.querySelector(".time");
let timeOutputEl = document.querySelector(".time-text");

let playButtonEl = document.querySelector(".play-button");

let arrowsEl = document.querySelector(".rotator");

extractMiliseconds = (DateObject) =>{
    return( (DateObject.getHours()*60*60*1000) + (DateObject.getMinutes()*60*1000) + (DateObject.getSeconds()*1000) + (DateObject.getMilliseconds()) );
}

printSmthng = (DateObject) => {
    console.log(`on timer: ${inputDateObject.getMinutes()}:${inputDateObject.getSeconds()}`);
    console.log(`current time: ${DateObject.getMinutes()}:${DateObject.getSeconds()}`);
    console.log("");
}

let inputDateObject = null;

playButtonEl.addEventListener('click', eventListener => {
    // let timeFromInput = timeInputEl.value;

    // let timeFromInputArray = String(timeInputEl.value).split(":");
    // timeOutputEl.innerHTML = `${timeFromInputArray[0]}:${timeFromInputArray[1]}`;

    // inputDateObject = new Date;

    // inputDateObject.setHours(0);
    // inputDateObject.setMinutes(0);
    // inputDateObject.setSeconds(0);
    // inputDateObject.setMilliseconds(0);


    inputDateObject = new Date(timeInputEl.valueAsNumber);


    console.log(inputDateObject);
    console.log(new Date);


    let dif = inputDateObject.getTime() - ((new Date).getTime())/*(extractMiliseconds(new Date))*/;
    let i = 0;

    console.log(`timer will stop after ${(dif/1000)} seconds`);

    oneSecondInterval = setInterval(() => {
        arrowsEl.classList.remove("invisible");
        timeOutputEl.innerHTML = `${Math.floor(dif/1000) - i}`;
        i++;

        let currentDate = new Date; 

        // printSmthng(currentDate);

        

        if(i > (dif/1000)) {
            clearInterval(oneSecondInterval);
            arrowsEl.classList.add("invisible");
        }
    }, 1000);
    
        
});










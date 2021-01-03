
let timeInputEl = document.querySelector(".time");
let timeOutputEl = document.querySelector(".time-text");
let playButtonEl = document.querySelector(".play-button");
let pauseButtonEl = document.querySelector(".pause-button");
let arrowsEl = document.querySelector(".rotator");

extractMiliseconds = (DateObject) => {
    return( (DateObject.getHours()*60*60*1000) + (DateObject.getMinutes()*60*1000) + (DateObject.getSeconds()*1000) + (DateObject.getMilliseconds()));
}

toTwoDigitsFormat = (time) => {
    let mask = "00"
    let result = "" + time;
    result = mask.substring(0, mask.length - result.length) + result;
    return(result)
}

togglePause = () => {
    arrowsEl.classList.toggle("invisible");
    playButtonEl.classList.toggle("invisible");
    pauseButtonEl.classList.toggle("invisible");
}

let tempDate = null;

playButtonEl.addEventListener('click', eventListener => {
    let playButtonClickDate = new Date;
    playButtonClickTimezoneOffset = playButtonClickDate.getTimezoneOffset();

    if (tempDate === null) {
        inputDateObject = new Date(timeInputEl.valueAsNumber);
        dif = inputDateObject.getTime() - ((playButtonClickDate).getTime()) + playButtonClickDate.getTimezoneOffset()*60*1000;
    }
    else {
        inputDateObject = tempDate;
    }

    if(dif < 1) {
        console.log("cannot start: selected time less than current time");
        return;
    }

    console.log(`timer will stop after ${Math.round(dif/1000)} seconds`);
    togglePause();
    
    oneSecondInterval = setInterval(() => {
        tempDate = new Date(dif);
        let outputHours = `${tempDate.getUTCHours()}`;
        let outputMinutes = `${tempDate.getUTCMinutes()}`;
        let outputSeconds = `${tempDate.getUTCSeconds()}`;

        timeOutputEl.innerHTML = `${toTwoDigitsFormat(outputHours)}:${toTwoDigitsFormat(outputMinutes)}:${toTwoDigitsFormat(outputSeconds)}`;

        dif = dif - 1000;

        if(dif < 1) {
            clearInterval(oneSecondInterval);
            console.log("timer stopped");
            togglePause();    
        }
    }, 1000);     
});


pauseButtonEl.addEventListener('click', eventListener => {
    clearInterval(oneSecondInterval);
    togglePause();    
});


lightsDivEls = Array.from(document.querySelectorAll(".light"));
buttonsDivEls = Array.from(document.querySelectorAll(".button"));

let current = null;
let old = null;

buttonsDivEls.forEach(function(element, i) {
    element.addEventListener('click', eventListener => {
        old = current;
        current = eventListener.target;
        
        lightsDivEls.forEach(function(element, i) {
            element.classList.remove(`${buttonsDivEls[i].id}`);
        });

        lightsDivEls[i].classList.add(`${eventListener.target.id}`);
        
        if(current === old) {
            lightsDivEls[i].classList.toggle(`${eventListener.target.id}`);
            current = null;
        }
    });
});

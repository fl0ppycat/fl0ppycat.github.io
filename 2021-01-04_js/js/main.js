
lightsDivEls = Array.from(document.querySelectorAll(".light"));
buttonsDivEls = Array.from(document.querySelectorAll(".button"));

buttonsDivEls.forEach(function(element, i) {
    element.addEventListener('click', eventListener => {
        console.log(`clicked ${eventListener.target.id} button`);

        lightsDivEls.forEach(function(element, i) {
            element.classList.remove(`${buttonsDivEls[i].id}`);
        });

        lightsDivEls[i].classList.add(`${eventListener.target.id}`);
    });
});

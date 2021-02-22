

let dogDivArray = document.querySelectorAll(".dog-div");

dogDivArray.forEach(element => {
    element.addEventListener('click', eventListener => {
        console.log(`clicked ${eventListener.target.innerHTML} dog`);

        element.style.backgroundImage = "https://dog.ceo/api/breed/${String(eventListener.target.innerHTML)}/images/random";

        console.log(`https://dog.ceo/api/breed/${String(eventListener.target.innerHTML)}/images/random`);
    
        // console.log(`https://dog.ceo/api/breed/${String(eventListener.target.innerHTML)}/images/random`);
    
    });
});




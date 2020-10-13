let but1El = document.querySelector(".btn1");
let but2El = document.querySelector(".btn2");
let divHelloEl = document.querySelector(".hello");

but1El.addEventListener('click', eventListener => {
    // but2El.classList.toggle("disabled");
    but2El.disabled = !but2El.disabled;

    if(but2El.classList.contains("hidden")){
        divHelloEl.classList.add("hidden");
    }
});

but2El.addEventListener('click', eventListener => {
    divHelloEl.classList.toggle("hidden");
    
});


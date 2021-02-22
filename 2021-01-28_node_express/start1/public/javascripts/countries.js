const formEl = document.querySelector("form");
const countriesListEl = document.querySelector(".countries");

formEl.addEventListener("submit", function(event){
    event.preventDefault();

    const selectedRegion = { name: document.querySelector('input[name="region"]:checked').id }

    // console.log(selectedRegion);

    axios.post("/countries", selectedRegion)
        .then(r => {
            const countriesArr = r.data

            countriesListEl.innerHTML = "";

            console.log(countriesArr);

            countriesArr.forEach(element => {
                countriesListEl.innerHTML += `<div class="country-card">`;
                    countriesListEl.innerHTML += `<div class="country-title"> ${element.name} <img class="flag" src="${element.flag}"> </div>`
                    
                    // if ( ((element.cats) != (null)) && ((element.cats) != (undefined)) ){
                        // countriesListEl.innerHTML += `<div class="cats">`;
                        //     element.cats.forEach(element => {
                        //         countriesListEl.innerHTML += `<div class="cat-card">${element.name} </div>`
                        //     })
                        // countriesListEl.innerHTML += `</div>`;
                    // }

                countriesListEl.innerHTML += `</div>`;
            });
        })
        // .catch(err => countriesListEl.innerHTML = `${err}` )
        
})
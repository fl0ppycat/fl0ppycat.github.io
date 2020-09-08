const human = {
        height: 175,
        width: 60,
        weight: 75,
        color: "white",

    dog = {
            height: 60,
            width: 30,
            weight: 15,
            color: "black",
    },

    car = {
            height: 100,
            width: 250,
            weight: 2000,
            color: "red",
    }
}

console.log(human);

human.car.color = "blue";

console.log(human);

human.age = 30;

human.newFeature = {
    feature:"some",
}

delete human.dog;





let firstSquare = document.getElementById('fw3');
let secondSquare = document.querySelector('.second'); // только первый

firstSquare.innerHTML = 5;

// console.log(a);

// console.log(a.style);

firstSquare.style.backgroundColor = "blue"

console.log(firstSquare);
console.log(secondSquare.textContent);
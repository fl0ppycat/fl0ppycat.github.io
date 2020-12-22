// -цвет кузова: желтый, зеленый, красный, синий, оранжевый;
// -коробка передач: автоматическая, ручная;
// -кондиционер: установлен, отсутствует;
// -отделка салона: кожа, ткань, комбинированная.


let color = ["yellow", "green", "red", "blue", "orange"];
let gearbox = ["automatic", "manual"];
let condition = ["yes", "no"];
let interior = ["leather", "cloth", "man-made leather"];


firstSymbolPicker = (string) => {
    return(String(string[0]).toUpperCase());
}


function getRandomInt(min, max) { //от мин до макс-1
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 


let lastAssembledID = 0;
let mask = "0000"


function modelAssemble (colorValue, gearboxValue, conditionValue, interiorValue){
    lastAssembledID++;
    let model = "" + lastAssembledID;
    model = mask.substring(0, mask.length - model.length) + model;

    for (let i = 0; i < arguments.length; i++){
        model = `${model}${firstSymbolPicker(arguments[i])}`;
    }

    return model;
} 


randomModelGenerator = (number) => {
    for (let i = 0; i < number; i++){
        console.log( modelAssemble(color[getRandomInt(0,color.length)], gearbox[getRandomInt(0,gearbox.length)], condition[getRandomInt(0,condition.length)], interior[getRandomInt(0,interior.length)]) );
    }
}

randomModelGenerator(15);

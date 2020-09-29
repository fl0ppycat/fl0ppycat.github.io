
const ARRAY = [5, 23, -110, 3, 18, 0, 14];

console.log(`Исходный массив: ${ARRAY}`);

console.log(``);

//  a. Вывести в консоль только нечетные числа

let arrayA = ARRAY.filter((item) => {  
  if ((item % 2) != 0){
    return item
  }
})

console.log(`a. Нечетные элементы: ${arrayA}`);

//  b. Вывести в консоль массив, каждая ячейка которого будет увеличена на 20;

let arrayB = ARRAY.map((item) => {
    return (item+20)
});

console.log(`b. Каждая ячейка +20: ${arrayB}`);

//  c. Вывести в консоль массив, состоящий только из положительных нечетных чисел;

let arrayC = ARRAY.filter((item) => {
  if( (item > 0) && ((item % 2) != 0) ){return (item);}
});

console.log(`c. Положительные нечетные: ${arrayC}`);

//  d. Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки.

let d = ARRAY.reduce((remainderSum,item,index) =>{
    remainderSum = remainderSum + (item % 3);
    return remainderSum;
},0); 

console.log(`d. Сумма остатков % 3: ${d}`);

// e. Проверить, и вывести в консоль результат проверки, есть ли в массиве числа, кратные 5. 

let arrayE = ARRAY.map((item) => {
  let temp = String(item);
  let tempLength = temp.length;
  let foundFive = temp.includes("5",(tempLength-1));
  let foundZero = temp.includes("0",(tempLength-1));
  return(foundFive || foundZero);
});

console.log(`e. Кратность пяти: ${arrayE}`);

// f. Получить массив без первого элемента, вывести в консоль.

let arrayF = ARRAY;
arrayF.shift();

console.log(`f. Без первого элемента: ${arrayF}`);

// g. Отсортировать массив по возрастанию, вывести в консоль. 

arrayG = ARRAY.sort();

console.log(`g. Сортировка по возрастанию: ${arrayG}`);

// функцию, которая преобразовывает значения, записанные через дефис в значения, записанные в camelCase

console.log(``);

toCamelCase = (string) => {  
  let array = string.split('-');

  arrayCamel = array.map((item,index) => {
    if(index > 0){return(`${String(item[0]).toUpperCase()}${String(item).slice(1)}`)}
    else{return(item);}
  });

  let str = '';
  for(let i = 0; i < arrayCamel.length; i++){
    str = `${str}${arrayCamel[i]}`;
  }
  return (str);
}

let someString = "some-long-string-for-example" 
console.log("оригинал строки: " + someString)
console.log(toCamelCase("после работы функции: " + someString));
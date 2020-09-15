class milk {
        constructor() {
                this.label = "Milk",                    //название продукта
                this.containerLabel = "packs",          //название поштучной упаковки
                this.boxCapacity = 20,                  //вместимость большой коробки в штуках (мелких упаковок)
                this.wastingDays = 2,                   //срок годности
                this.storageTemperature = -5;           //условия хранения
                this.manufacturedDate = 2;              //дата производства
        }
}

class butter {
        constructor() {
                this.label = "Butter",
                this.containerLabel = "packs",
                this.boxCapacity = 30,
                this.wastingDays = 5,
                this.storageTemperature = -2;
                this.manufacturedDate = 2;
        }
}

class kefir {
        constructor() {
                this.label = "Kefir",
                this.containerLabel = "bottles",
                this.boxCapacity = 6,
                this.wastingDays = 3,
                this.storageTemperature = -5;
                this.manufacturedDate = 7;
        }
}

class icecream {
        constructor() {
                this.label = "Ice cream",
                this.containerLabel = "cups",
                this.boxCapacity = 12,
                this.wastingDays = 10,
                this.storageTemperature = -4;
                this.manufacturedDate = 2;
        }
}


//создаем склад, с которого в магазин будут перемещаться продукты
let warehouse = new Array();


//добавляем на склад запас продуктов
for (let i = 0; i < 200; i++) {
        warehouse.push( new milk());
}
for (let i = 0; i < 200; i++) {
        warehouse.push( new butter());
}
for (let i = 0; i < 200; i++) {
        warehouse.push( new kefir());
}
for (let i = 0; i < 200; i++) {
        warehouse.push( new icecream());
}

//создаем обертку для evala,
//что бы иметь возможность обращаться к свойствам продукции по названию класса
function evalWrapper(param,param2){
        return(String(          eval("new " + String(param) + "(" + String(param) + ")" + "." + param2)            ))
}


// создаем функцию, которая конвертирует количество поштучных упаковок в ящики
function unitsToContainersConvert(unitsNumber, productType){
        let a = unitsNumber / evalWrapper(String(productType),"boxCapacity");
        let b = unitsNumber % evalWrapper(String(productType),"boxCapacity");
        if (b == 0){return(a)}
                else {return(parseInt(a) + 1)}     
}

//создаем функцию, которая показывает содержимое склада
function storagePrint(store){
        for (let i = 0; i < store.length; i++) {   
                productType = store[i].constructor.name;
                let c = 0;
                for (let j = i; j < store.length; j++) {
                        if (store[j].constructor.name == store[i].constructor.name){
                                c++;
                                i=j;
                        }
                }  
                console.log(productType + " - " + c + " " + evalWrapper(String(productType,),"containerLabel") + " - " + unitsToContainersConvert(c, String(productType)) + " boxes");                           
        }
        // console.log("____________________");
        // console.log("sum: " + store.length + " units");
}

//проверяем содержимое склада "warehouse"
console.log("warehouse:");
storagePrint(warehouse);


console.log("");
console.log("");


//создаем магазин, в который со склада будут перемещаться продукты
let store = new Array();

//создаем накладную (как трансферный склад)
let invoice = new Array();

//создаем функцию, которая перемещает продукты между складами
function productMove(storeFrom,storeTo,productType,productAmount){
        let c = 0;                                         //счетчик перемещенного количества
        for (let i = 0; i < storeFrom.length; i++) {       //смотрим в каждой ячейке склада 
                if ((storeFrom[i].constructor.name == productType.constructor.name) //если тип продукта соответствует запрошеному
                   &&                                      //и
                   (c < productAmount)){                   //еще не перемещено достаточное количество продукта этого типа
                        storeTo.push(storeFrom[i]);        //копируем из склада1 в склад2                                
                        storeFrom.splice(i,1)              //очищаем ячейку на складе1
                        i--;                               //- т.к. splice сбивает счетчик
                        c++;                               
                }                            
        }
}

//перемещаем с помощью нее со склада в накладную количество продукции согласно заданию
productMove(warehouse,invoice,new milk(milk),60);
productMove(warehouse,invoice,new butter(butter),120);
productMove(warehouse,invoice,new kefir(kefir),42);
productMove(warehouse,invoice,new icecream(icecream),24);


//проверяем содержимое накладной (invoice)
console.log("invoice:");
storagePrint(invoice);


//задаем текущую дату и температуру в магазине
let currentDate = 9;
let currentTemperature = -4;


//создаем возвратную накладную (как склад, куда попадает продукция, не соответствующая условиям)
let returnInvoice = new Array();

console.log("");
console.log("");


//создаем функцию, которая распределяет пришедший товар между складом магазина и возвратом
function invoiceProcessing(invoice){
        for (let i = 0; i < invoice.length; i++) {   
                productType = invoice[i].constructor.name;
                let c = 0;
                for (let j = i; j < invoice.length; j++) {
                        if (invoice[j].constructor.name == invoice[i].constructor.name){
                                        c++;
                                        i=j;
                                        //если текущая дата плюс дата производства больше чем срок годности данного продукта
                                        if ((currentDate - evalWrapper(String(productType),"manufacturedDate") > evalWrapper(String(productType),"wastingDays"))
                                        || //или
                                        //если текущая температура (хранения) выше, чем в условиях хранения данного продукта
                                        (currentTemperature >  evalWrapper(String(productType),"storageTemperature"))){
                                                        returnInvoice.push(invoice[j])
                                                } else {       
                                                store.push(invoice[j])
                                                }
                                        }                         
                }
        } 
        // console.log("returned sum: " + returnInvoice.length + " units");
        // console.log("received sum: " + store.length + " units");           
}

//и с помощью неё распределим продукцию
invoiceProcessing(invoice);


console.log("");
console.log("");


//проверяем содержимое возвратной накладной
console.log("return invoice:");
storagePrint(returnInvoice);

console.log("");
console.log("");

//и состояние склада магазина
console.log("store:");
storagePrint(store);
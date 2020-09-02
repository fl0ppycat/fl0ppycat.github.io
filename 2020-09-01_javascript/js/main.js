// Создать файл html, внутри которого будут прописаны <body><div class="code">xxxx</div><div class="door">closed</div>
//     <div class="move">off</div><div class="alarm">disable</div><script type="text/javascript" src="./js/main.js"></script></body> 
//     Также создать такой файл main.js, в котором программа будет делать:
//     Уровень 1. В div с классом code записать число 4 в 3й степени, сделать это через сдвиг. Этому div-у также сделать желтый фон. 
//     Уровень 2. В помещении есть два датчика: датчик открытых дверей и датчик движения. Также перед входом в помещение есть панель, на которой надо набрать код для входа. Вводить пароль можно только при закрытых дверях и в помещении никого не должно быть. Описать работу сигнализации с помощью условий if, &&, ||, при этом манипулируя данными в div блоках




let codeDiv = document.querySelector('.code');
codeDiv.textContent = (`${(2 << 1) << 4}`);
codeDiv.style.backgroundColor="yellow";

let doorDiv = document.querySelector('.door');
let moveDiv = document.querySelector('.move');
let alarmDiv = document.querySelector('.alarm');

let message = "you can't enter your password"

if ((doorDiv.textContent == "closed") && (moveDiv.textContent == "off")){
    console.log("you can enter your password");
}

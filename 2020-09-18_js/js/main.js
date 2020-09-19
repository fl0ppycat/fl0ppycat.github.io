
// let arr = [2, 4, 6, 8, 10, 12]

// let out1 = [];
// let out2 = [];

// for (let i = 0; i < arr.length; i++){
//     out1[i] = arr[i] * 3;   
//     out2[i] = arr[i] * 10;            
// }

// console.log(out1);
// console.log(out2);

// let out3 = [];

// for (let i = 0; i < out1.length; i++){
//         out3[i] = [out1[i],out2[i]];  
// }

// console.table(out3);

/////////////////////////////////////////

// let out4 = [];

// for (let i = 1; i < 7; i++){
//     out4[i] = [];
//     for (let j = 1; j < 5; j++){
//         out4[i][j] = j * i;  
//     }  
// }

// console.table(out4);

/////////////////////////////////////////


// const out4=[];
// for (let i = 0; i < 4; i++){
//         out4[i] = i + 1;  
// }; 

// const out5=[];
// for (let k = 0; k < 8; k++){
//         out5[k] = out4;  
// };

// console.log(out5);


//////////////////////////////////////////////

const out5=[];
let str = '';
for (let k = 0; k < 6; k++){
    // str = `${str}[`
    const out4=[];
    for (let i = 0; i < 4; i++){
        // str = `${str}[`       
        out4[i] = ((k+1) * (i+1));  
        // str = `${str}${out4[i]}`
        // str = `${str}]`;
    }; 
    
    out5[k] = out4;  
    // str = `${str}] `;
};

// console.table(out5);
console.log(str);


















// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// let ar = [];

// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 5; j++){
//         for (let k = 0; k < 5; k++){
//             ar[i][j][k] = randomInteger(1,8);
//         }
//     }   
// }

// console.table(ar);










// function arrayM(array,m){
//     let out =[]
//     for (let i = 0; i < array.length; i++){
//         out[i] = array[i] * m;           
//     }
// return (out);
// }

// console.log(arrayM(arr,3));



const arr2 = [1, 5, 6, 7];
console.log(arr2);


let sum = arr2.reduce((sumIndex,item,index) =>{
    if ((item % 2) != 0){
        sumIndex = sumIndex + index;
    }
    return sumIndex;
},0); 

console.log(`index sum = ${sum}`);



//////////////////////////////////////////////////////////



// const randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand)
//   }
  
//   const ARRLENGTH = 10;
//   let arr = [];
  
//   for (let i = 0; i < ARRLENGTH; i++){
//       arr.push(randomInt(-200,200));
//   }
//   console.log(arr);
  
// const oddes = arr.filter((item) => {
//     if ((item % 2) == 0){
//         return item
//     }
// })

// console.log(oddes);



//////////////////////////////////////////////////////////



  //   let pos3 = [];
//   arr.forEach((item) => {
//     let tempStringArray =[]
//     tempStringArray.push(String(item));
//       pos3 = tempStringArray.map((item, index) => {
//         if (item == "3"){
//                         return(index);
//                     }
//     });
// });

// console.log(pos3);


  // let pos3 = arr.forEach((item) => {
//     tempString = String(item);
  
//     for(let symbolIndex in tempString){ 
//         if (tempString[symbolIndex] == "3"){
//             console.log("index = " + symbolIndex);
//         }
//     }
// });



//////////////////////////////////////////////////////////

// const randomInt = (min, max) => {
//         let rand = min + Math.random() * (max + 1 - min);
//         return Math.floor(rand)
//       }
      
//       const ARRLENGTH = 10;
//       let arr = [];
      
//       for (let i = 0; i < ARRLENGTH; i++){
//           arr.push(randomInt(-200,200));
//       }
//       console.log(arr);
      
//       let pos = arr.map((item, index) => {
//           if(arr[index] > 0) {
//               return(null)
//             } else {
//                 return (index)
//             }
//         });
//       console.log(pos);


//////////////////////////////////////////////////////////


// const randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand)
//   }
  
//   const ARRLENGTH = 10;
//   let arr = [];
  
//   for (let i = 0; i < ARRLENGTH; i++){
//       arr.push(randomInt(-200,200));
//   }
//   console.log(arr);
  
//   let out = arr.map((item, index) => {
//       if(arr[index] > 0) {
//           return(true)
//         } else {
//             return (false)
//         }
//     });
//   console.log(out);


  ////// let temp = (item <=0) ? false : true;


///////////////////////////////////////////////////////////


// const randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand)
//   }
  
//   const ARRLENGTH = 10;
//   let arr = [];
  
//   for (let i = 0; i < ARRLENGTH; i++){
//       arr.push(randomInt(-200,200));
//   }
//   console.log(arr);
  
//   let out = arr.map((item) => Math.abs(item));
//   console.log(out);

//   let symbols = out.map((item) => String(item).length);
//   console.log(symbols);


///////////////////////////////////////////////////////////

// const randomInt = (min, max) => {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand)
// }

// const ARRLENGTH = 10;
// let arr = [];

// for (let i = 0; i < ARRLENGTH; i++){
//     arr.push(randomInt(-100,100));
// }

// console.log(arr);

// let out = arr.map((item) => Math.abs(item));

// console.log(out);


///////////////////////////////////////////////////////////

// const arr = [1, 4, 5, 7];
// const out = [];
// for (let i = 0; i < A.length; i++){
//     out[index] = arr[index] * 2;
// }
// console.out(out);

// let arr = [1, 4, 5, 7];

// let out = arr.map((item) => {
//     return item * 2
// });

////// let out = arr.map((item) => item * 2 );

// console.log(out);


///////////////////////////////////////////////////////////


// const arr = [1, 4, 5, 7];

// arr.forEach((item, index) => {
//     if (item % 2 != 0){console.log(index)}
// });


///////////////////////////////////////////////////////////

// const man = {
//     name: "Name",
//     surname: "Surname",
//     age: 30,
//     height: 170,
// };

// for(let key in man){
//     console.log(key, ': ', man[key]);
// }

// for (let value of Object.keys(man)){
//     console.log(value);
// }

///////////////////////////////////////////////////////////



// const A = [1,2];
// const B = [1,2,3];
// const C = [1,2];

// let d = [];

// for (let i = 0; i < A.length; i++){
//     for (let j = 0; j < B.length; j++){
//         for (let k = 0; k < C.length; k++){        
//             d.push(`${String(A[i])}${String(B[j])}${String(C[k])}`);
//         }
//     }
// }

// console.log(d);



////////////////////////////////////////////////////////////
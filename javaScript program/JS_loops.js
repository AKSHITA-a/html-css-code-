console.log("loops")
//there are 5 types of loops in JavaScript: for loop , for in loop , for of loop , while loop , do-while loop , for each loop

/*
// for loop 
for (let i= 0; i<5; i++) {
    console.log(i)
}


//for in loop :basically use for  objects type 
let obj = {
    num1 : 1,
    num2 : 2,
    num3 : 3,
    num4 : 4
}
for (const key in obj){
    console.log(key)
}
/* for (const key in obj){
/     const ele = obj[key];
/     console.log(key,ele);
 }
 

//for of loop : basically use for string or array type data

for (const iterator of "Ashita") {
    console.log(iterator)
}
*/

let i =0;
while (i<5) {
    console.log(i)
    i++;
}

let p=4;
do {
    console.log(p)
    p++
} while (p<8);




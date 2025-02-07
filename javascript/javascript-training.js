console.log("Hello");

// callback:-
setTimeout(function(){
    console.log("Callback Function")
},3000);

// promise:-
let checkEven=new Promise((resolve,reject)=>{
    let num=3;
    if(num%2==0){
        resolve("Even number");
    }
    else{
        reject("odd number");
    }
});

checkEven.then((m)=>{
    console.log(m)
})
.catch((err)=>{
    console.log(err);
})


// async await:->

const data=async function fetchdata(){
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data=await res.json()
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
};

data();


import { sum,fun } from "./file.js";

console.log(fun("Amulya"));
sum(2,4);


// object creation:->
const obj={};
obj.name="Amulya"
obj.age=23
console.log(obj);

const obj1=new Object();
obj1.city="India"
obj1.state="Madhya Pradesh"
console.log(obj1)

obj1.phoneNumber="12345567890"
console.log(obj1)

const obj2={...obj,...obj1};
console.log(obj2);

function Checker(age){
    if(age<18){
        throw new Error("Not eligible")
    }
    return "Eligible";
}

try {
    console.log(Checker(17));
} catch (err) {
    console.log(err.message);
}


let a=[12,"a","b"];
console.log(a);

let b=new Array(1,2,"c");
console.log(b);

let c=[...a,...b];
console.log(c);


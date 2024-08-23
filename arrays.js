//array
const myarr=[0,1,2,3,4];
console.log(myarr);
console.log(myarr[0]);

const arr=new Array(1,2,3,4,50);
console.log(arr);

arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(3);
console.log(arr);
arr.shift(3);
console.log(arr);

console.log(arr.includes(3));
console.log(arr.indexOf(3));

const newArr=arr.join();
console.log(newArr);

//slice , splice
console.log("A",arr);
const A1=arr.slice(1,3);
console.log(A1);
console.log("B",A1);
const A2=arr.splice(1,3);
console.log(A2);

const heroes=["thor","ironman","spiderman"
];
const dc=["batman"];

const all=heroes.concat(dc);
console.log(all);

const alnew=[...heroes,...dc];
console.log(alnew);

const faltu=[1,2,3,[4,5,6],7,8,[9,10,[11,12]]];
console.log(faltu);
const faa=faltu.flat(Infinity);
console.log(faa);

// obj or string to array 
console.log(Array.from("Sayan"));

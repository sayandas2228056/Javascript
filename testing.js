"use strict";//treat all JS code as newer version of js;
console.log("window");
let a=10;
a=11;// value can be changed but should be of same datatype
console.log(a);
const b=21;//values cant be changed
console.log(b);
var s=1111;// values can be changed as well as datatype
s="Sayan";//block scope and functional scope
console.log(s);
console.table([a,b,s]);
//using node.js not browser
console.log(3+3);

let name ="Sayan";
let age=19;
let iss=false;

/* Data types in js
string ,bigint (to store big number),boolean ,number,null(stand alone value)[empty]
undefined(no value defined),symbol(to find uniqueness like figma tools)
object
*/
console.log(typeof a);
console.log(typeof null);
console.log(typeof undefined);

let score=33;
console.log(typeof score);

let value=Number(10);
console.log(typeof value);
console.log(value);

//"33" -> 33
//"33avc" ->NaN (not a numer)
//true -> 1 false -> 0
let islog=1;
let check=Boolean(islog);
console.log(check);

/* 1 -> true 0-> false
"" -> false
"hitesh" -> true */

let strno=String(value);
console.log(strno);
console.log(typeof strno);



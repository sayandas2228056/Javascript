let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof myDate);

let createdate=new Date(2023,8,14,5,30);
console.log(createdate.toLocaleString());
 let newdate=new Date("2023-01-14");
 console.log(newdate.toDateString());

 let timestamp=Date.now();
 console.log(timestamp);
 console.log(mydate.getTime());

 console.log(mydate.getMonth());
console.log(mydate.getDay());


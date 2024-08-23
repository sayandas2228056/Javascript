//singleton
//object literals

const user={
    name: "Sayan Das",
    age: 18,
    roll:2228056,
    email:"offcsayantubecode@gmail.com",
    cgpa:7.65
};
console.log(user.name);
console.log(user.roll);
console.log(user.email);

console.log(user["name"]);
console.log(typeof (user["name"]));

console.log(user["roll"]);
console.log(typeof (user["roll"]));

user.email="xiasayandas@gmail.com";
Object.freeze(user);//freeze the value of the object 

user.greetings=function()
{
    console.log('hellow guys,($this.name)');
}
console.log(user.greetings);


const instauser={};
instauser.id="123";
instauser.name="Sayan";
instauser.loggedin=false;

console.log(instauser);

const googleuser={
    email:"offcsayantubecode@gmail.com",
    name:"Sayan Das",
    password:"********"
}
console.log(googleuser);
console.log(googleuser.name);
console.log(googleuser.password);

const obj3=Object.assign({},instauser,googleuser);//merge two objects
const obj4={...instauser,...googleuser};
console.log(obj3);
console.log(obj4);
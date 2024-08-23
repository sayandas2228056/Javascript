let a=20;
const b=20;
var c=30;

if(true)
{
    a=40;//global variable
    console.log(true);
}
else
{
console.log(false);
}
console.log(a);
console.log(b);
console.log(c);
/*
function one()
{
    const username="Sayan";
    function two()
    {
        const website="youtube";//present inside function two.
        console.log(username);
    }
    console.log(website);//not defined
    two();
     
}
one();*/
function addone(num)
{
    return num+1;
}
console.log(addone(5));

const ax=function addtwonum(num1,num2)//expressions 
{
    return num1+num2;
}
//wrong function declatrion type
//wrong hosting


function sayMyName(){
    console.log("Sayan");
}
sayMyName();

function addTwoNumbers(number1,number2)
{
    return number1 + number2;
}

addTwoNumbers(3,null);

const res=addTwoNumbers(3,10);
console.log("Result: ", res);

function loginmsg(username)
{
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `$(username) just logged in`
}
console.log(loginmsg("Sayan"));

function calculateprice(num1)
{
    return num1;
}
console.log(calculateprice(100));
// function to store prices in same variable
function calculate(...num1)
{
    return num1;
}
console.log(calculate(100,200,300));

const user ={
    username : "Sayan ",
    price : 100
}

function handel(anyobj)
{
    console.log(`user is ${anyobj.username} and price is ${anyobj.price}`)
}
handel(user);

const array=[100,200,300,400];
function returnsecond(getArray)
{
    return getArray[1];
}
console.log(returnsecond(array));

// Immediately Invoked Function Expressions(IIFE)

function one()
{
    console.log("connected");
}
one();

//global scope ke pollution se bachne ke liye IIFE use karte hai
(function two()//named iffie
{
    console.log("connected");
})();

( ()=>{ //unnamed iffie
    console.log("connected");
})();
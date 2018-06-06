//functions
//do something

//declarations

var s; //hoisted
let m;
const r;

function h1();//gets hoisted

//expressions
var hi = function hello()
{
    console.log('hi');
};//not hoisted

function hi(){
    console.log('hi');
}

//calling functions
function coffeCup(){
console.log("i like coffee");
}

coffeCup();

let x = 10;//2nd line
let y = 20;//3rd line
function math(){ //first line
    console.log(x + y); 
}
math();
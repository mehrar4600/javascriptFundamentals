// fat arrow functions

//standard
function laptop(){
    console.log(`sasan's laptop is about to explode`);
}

laptop();

//fat arrow
let laptop = () => {
console.log('sasans laptop is about to exlode')
}
laptop();

//with parameters
var cats = (fleas, ticks) =>{
    console.log("cats have" + fleas + " and" + ticks);
}
cats('fleas', 'ticks');

var turtle = shell()=>{
    console.log("turtle have" + shell);
}

turtle('shell');

//concise bodies
let apples = x => console.log("there are " + x +'apples');
apples(20);

//block bodies
let apples = (x) => {console.log("there are " + x + "apples");}
apples(7);

//line breaks are bad

let func = () => console.log('hi');//ok

//let func = ()
//=> console.log('hi');//error////
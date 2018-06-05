// scope
// global=world 
// local scope: city of indianapolis 

var x=12;
const x = 33; //its gonna give error because const can't be changed

function scope() {
     var x =33;
    console.log(x); 
}
scope();
console.log(x); // answer:12 // talking to global var on line 5

//let and var
// var 1994- var doesnt have var blocks

function varTest(){
    var scope = 1;
    if(true){
        var scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

varTest();

function letTest(){
    let scope = 1;
    if(true){
        let scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

letTest();// let stays in blockscope let always stays in blocks({})

function constTest(){
    const scope = 1;
    if(true){
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();
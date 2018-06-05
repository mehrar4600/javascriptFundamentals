//if else 
var money = true;
if(money){
    console.log("STARBUCKS")
} else {
    console.log("Robin's coffee is fine")
}

//challenge : print your name

var name='Rajni Mehra';
if(name){
    console.log("Hello, my name is " + name);
} else{
    console.log("Hello, what is your name");
}

//challenge: capitalize the first letter only

var name = "rajNi";
if(typeof name=== 'string'){
if(name[0] == name[0].toUpperCase()){
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log('hello my name is',firstLetter);
}
else{
    let otherLeters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log("hello my name is " + otherLeters)
}
} else{
    return;
}

//else if--works with more than 2 options
var type = true;
if(typeof type === 'string'){
    console.log(typeof type);
}else if(typeof type === 'boolean'){
    console.log(typeof type);
}else if(typeof type === 'boolean'){
console.log(typeof type);
}else if(typeof type==='number'){
    console.log(typeof type);
}else{
    console.log('something else');
}


//challenge:

var age = 26;
if(age> 0 && age <= 17){
    console.log("sorry, you are too young to do anything");
}else if(age >= 18 && age <=21){
    console.log("yay! you can vote");
}else if(age >= 21 && age <= 25){
    console.log("yay! you can drink");
}else
{    console.log("yaya! you can rent a car");
}

// var age = 6;
// if(age>=25){
//     console
// }else if(age >=21){
//     console
// }else if(age >= 18){
//     console
// }else if (age>=17)
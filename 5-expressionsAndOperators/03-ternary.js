//ternaries are operators .takes lines of codes and compresses in one line f cde

var x = 6;
if(x > 0 && x <= 10){
    console.log('yes');
} else if(x>10) {
    console.log('maybe');
}else{
    console.log('no');
}

console.log((x>0 && x <= 10) ? 'yes' : (x >10) ? 'maybe' : 'no');

//challenege: age
var age = 2;
console.log((age>=25) ? 'yay! you can rent a car' : (age>=21) ? 'yay you can drink': (age>=18) ? 'yay you can vote': 'sorry you are too young');
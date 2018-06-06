//for loops are for repedily things/
//can use var or not 
for(var i = -10; i < 10; i++){
    console.log(i);
}

//challenge: count to 20, by 2's

for(i = 0; i<=20; i=i+2){
    console.log(i);
}

//challenge: from 10 to 0 by 1's

for(var i = 10; i>=0; i -= 1){
    console.log(i);
}

//count from 0 to -24 by 2's
for(i=0; i>= -24; i=i-2){
    console.log(i);
}

//display name and display each letter
var name='kenn';
for(i=0; i<=3; i++) //for(i=0; i<name.length;i++)
{
    console.log(name[i]);
}

//add all numbers  from 1 to 50 (should equal 1275)
total = 0;
for(num = 1; num<= 50; num++){
    
    total = num +total;
}
console.log(total);
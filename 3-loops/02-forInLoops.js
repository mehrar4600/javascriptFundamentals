//for in loops
//another version for for loop
//use it more than object. makes the perfect for object
//name,awesome etc are keys
//sasan true are values
var student ={
name: 'sasan',
awesome:true,
cohort: 'javascript',
week: 1
}
for(let item in student){
console.log(item);
console.log(student[item]);
}

//challenge:captalize letter of name
let studentName = 'tYler';
let capName;
for(var letter in studentName)
{
   if(letter==0){
   capName=studentName[letter].toUpperCase();
   }else{
    capName +=studentName[letter].toLowerCase();
     }
    }
    console.log(capName);
//arrays--they are unique , separate each value by comma
let x = [];
console.log(typeof x);
let student = ['tyler', 'sasan', 'brandon','lawrence', 'rajni', 'sherri', 'david'];
console.log(student[4]);
let cohort = ['lawrence', 35, true, ['brandon', 4, 'sherri'], 6, false];

//challenge
console.log(cohort[3][2] + " you look nice today");

//populating/referring

let food = ['Hamburger', 'Chicken', 'Steak', 'Burrito', 'BBQ'];
//methods
food.push('Pizza'); // adds the piece of food in my array
food.splice(2, 1, 'hamburger helper :(');//.splice(position, how many to delete, what to add in tha location)
//in the middles of the array and wants to replace the food. 2 is 2nd array and replacing with 1 element steak only/
food.splice(3,0,'Pecan Pie');// 0 means adding
food.pop();//deleting pizza
for( f in food){
    //console.log(f);//gives u index
    console.log(food[f]);//gives u the values in the indexes
}

//iterating
let food = ['Hamburger', 'Chicken', 'Steak', 'Burrito', 'BBQ'];

// food.forEach(f => console.log(`${f} is on the menu today.`));

food.forEach((value, number) => {console.log(number, value);})
//food.forEach((value, number) => {console.log(number); console.log(value)});

//challenge:add movie, replace, use foreach to list your movies
let movie = ['up', 'deadpool2', 'wolfchildren'];
movie.forEach(value1 => console.log(value1));
//movie.push('whatever');
//movie.splice(1,1,'abc');
//console.log(movie);
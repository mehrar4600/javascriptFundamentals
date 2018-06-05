// switch

var friend = 'tyler';

switch(friend) {
    case 'Aaron':
    console.log("hey aaron, when are we going rock climbing");
    break;
    case 'kenn':
    console.log("hey kenn, wanna play catan?")
    break;
    case 'carolyn':
    console.log("hey carolyn, when are we playing dnd");
    break;
    default:
    console.log("sorry," + friend + " but do i know you");//(`i'm sorry, ${friend}, but)
}

var dessert = 'cake';
var capDes = dessert[0].toUpperCase() + dessert.slice(1).toLowerCase;
switch(dessert){
    case 'pie':
    console.log(`${capDes}, ${dessert}, ${dessert}, me oh my`);
    break;
    case 'cake':
    console.log(`${dessert} ,cake is great`);
    break;
    case 'ice cream':
    console.log("i scream for ice cream");
    break;
    default:
    console.log("not in the menu");
}

var yep = -8;
switch(true){//run doesnt matter if true or not
case(yep < 0 && yep > -10):
console.log("worked");
break;
case(yep > 0):
console.log("also worked");
break;
default:
console.log('didn\'t work');
}
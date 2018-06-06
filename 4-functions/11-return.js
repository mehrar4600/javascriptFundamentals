//return
// spit out the values and get u whereever u r in
//either local or global
//move on if nothing is there in else 

function capitalizeName(name){
    let capName = " ";
    for (let l in name){
        if(l == 0){
            capName += name[l].toUpperCase();
        } else{
            capName+= name[l].toLowerCase();
        }
    }
    //console.log(capName);
    return capName;
}
const newName = capitalizeName("branDON");

console.log(newName + ", how are you today?");

//challenge ; make a tip calculator using a function
function tipCalculator(numx,numy){
    let netTotal = numx * numy;
    return netTotal.toFixed(2);
}
let num5 = tipCalculator(5,6);
console.log(num5);
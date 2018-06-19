

var country = document.querySelector("ul");
const countriesURL="https://api.openaq.org/v1/countries"
fetch (countriesURL)
.then(function(response){
    return response.json();
})
.then(function(json){
    let countries = json.results;
    for(countrys of countries){
        let listItem = document.createElement("li");
        listItem.innerHTML =   countrys.name ;
        country.appendChild(listItem);
    }
});
    


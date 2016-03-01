$(document).ready(function(){
  for(var i = 0; i < cityArray.length; i++){
    $('.city').append('<div></div>');

    var $el = $('.city').children().last();
    var city = cityArray[i];

    $el.append('<h1>' + city.name + '</h1>');
    $el.append('<p>The city of ' + city.name + " is located in the great state of "
    + city.state + ". There are " + city.population
    + " residents living in an area of " + city.landArea +'.</p>');
    $el.append('<p>Fun Fact: ' + city.funFact + '</p>');
  }
});

function City (name, population, state, landArea, funFact){
  this.name = name;
  this.population = population;
  this.state = state;
  this.landArea = landArea;
  this.funFact = funFact;
  cityArray.push(this);
}

var cityArray = [];

var sanFrancisco = new City("San Francisco", "837,442", "California", "46.87 square miles", "Alcatraz was originally an Army base.");
var Manhattan = new City("Manhattan", "1,626,000", "New York", "33.77 square miles", "In the 19th century, wild pigs roamed the streets.");
var Fargo = new City ("Fargo", "113,658", "North Dakota", "48.82 square miles", "The Roger Maris Museum is loacated in Fargo.");

console.log(cityArray);

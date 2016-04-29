class Fooditem{
    constructor( name, calories, vegan, glutenFree, citrusFree){
        this.name = name;
        this.calories = calories;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
        this.citrusFree = citrusFree;
    }
stringify(){
    if(this.vegan){
      var isVegan=" is vegan";
    }else {
      var isVegan = " is not vegan";
    }
    if(this.glutenFree){
      var isGlutenFree = " is gluten free";
    }else{
      var isGlutenFree = " is not gluten free";
    }
    if(this.citrusFree){
      var isCitrusFree = " is citrus free";
    }else{
      var isCitrusFree = " is not citrus free";
    }
    console.log(this.name + "\n" + this.calories + " calories" + '\n' + this.name + isVegan + "," + isGlutenFree + ", and" + isCitrusFree + ".")
    }
}

var sandwich = new Fooditem("Ham sandwich", 300, true, false, true);
var soup = new Fooditem("The Soup of the day", 250, true, true, false);
var pasta = new Fooditem("The Alfredo", 800, false, false, true);
var potatoes = new Fooditem("Potatoes", 275, true, true, true)
var breadsticks = new Fooditem("Breadsticks", 12, false, true, false)

// sandwich.stringify();
// soup.stringify();
// pasta.stringify();


//==============Part II======================
function Drink(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Drink.prototype.stringify = function(){
    console.log(this.name + "\n" + this.description + "\n" + this.price + "\n" + this.ingredients + '\n \n')
}
var whiskeySour = new Drink ("Whiskey Sour", "Our whiskey sour is made with the very best whiskey, aged for almost a year in a plastic bottle. It can't be beat!", 4.50, ["whiskey", " sour mix", " lime"])
var vodkaTonic = new Drink ("Vodka Tonic", "Premium Vodka with high quality tonic water. Simple and YUMMY!", 5.00, ["Premium vodka", " tonic water", " lime"])
var bloodyMary = new Drink ("Bloody Mary", "Made with Kettle One vodka, this drink pushes the boundry of what a Bloody Mary can be!", 6.25, ["Kettle one", " tomato juice", " celery", " spices", " bacon!", " fried egg"])

// whiskeySour.stringify();
// vodkaTonic.stringify();
// bloodyMary.stringify();
function arrayStringify(arr){
  var string =''
  arr.forEach(function(arrayElement){
      string += arrayElement.stringify()
  })
  return string
}
function getDetails (obj) {
  if (obj.vegan === true) {
    return true
    console.log('here')
  }
  console.log('here')
  return false
}

function Plate(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;

}
Plate.prototype.stringify = function(){
    console.log(this.name + '\n' + this.description + '\n' + "Price: " + this.price + '\n' + "Ingredients: " + this.ingredients + '\n \n')
}
Plate.prototype.veganFree = function() {

}
var hamPlate = new Plate ("Ham sandwich with potatoes", "Delicious Ham Sandwich with creamy mashed potatoes", 11.00, [sandwich, potatoes])
var soupPlate = new Plate ("Soup with Bread Sticks", "Hot Soup served with a spork", 9.25, [soup.name, breadsticks.name])
var pastaPlate= new Plate ("Pasta with creamy Alfredo sauce", "Hand cut pasta with housemade Sauce", 13.00, [pasta.name, breadsticks.name])

// hamPlate.stringify()
// soupPlate.stringify()
// pastaPlate.stringify()

hamPlate.veganFree();
soupPlate.veganFree();

function Order(plates, drinks){
    this.plates = plates;
    this.drinks = drinks;
}
Order.prototype.stringify = function(){
    console.log("Your Order consists of " + this.plates.name + " and a " + this.drinks.name )
}
var order1 = new Order (hamPlate, whiskeySour)
var order2 = new Order (soupPlate, vodkaTonic)
var order3 = new Order (pastaPlate, bloodyMary)

// order1.stringify()
// order2.stringify()
// order3.stringify()



function Menu(plates, drinks){
  this.plates = plates;
  this.drinks = drinks;
}
Menu.prototype.stringify = function() {
  console.log('Meals:')
  this.plates.forEach(function(element) {
    return(element.stringify())
  })
  console.log('Drinks: \n')
  this.drinks.forEach(function(element){ return(element.stringify()) })
}
var menu1 = new Menu ([hamPlate, soupPlate, pastaPlate],[vodkaTonic, bloodyMary, whiskeySour])
// menu1.stringify()

function Restaurant(name, description, menu){
  this.name = name;
  this.description = description;
  this.menu = menu;
}
var justGiveMeFood = new Restaurant('Just Give Me Food', 'a place to get food for your belly', menu1)

function Customer(dietaryPreference){
  this.dietaryPreference = dietaryPreference;
}

Restaurant.prototype.stringify= function(menu){
  console.log("Welcome to " + this.name + ", " + this.description + '\n \n')
  return this.menu.stringify()
}
justGiveMeFood.stringify();



Customer.prototype.stringify= function(){
  console.log("");
}

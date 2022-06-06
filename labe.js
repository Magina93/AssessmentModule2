class dog {
    constructor (age, color) {
    this.age = age
    this.color = color
    }
}
let dog1= new dog(10, "red")
console.log(dog1.color)

// make an object(declare an object or a variable with accessing value)
let person = {
    firstName: "Maginele",
    lastName: "Larins",
    age: 29,
}
let magineleAge = person.age
console.log(magineleAge)

// destructuring
let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churro',
    drink: 'coke',

}
// this is same as const dessert = meal.dessert
// const drink = meal.drink 
const {desset, drink:} = meal
console.log(dessert)
console.log(drink)


// Looping through an object

for (key in person) {
    console.log(key)
    console.log(person[key])
}
// adding properties
person.job = "Devmounatin instructor"
person['pets'] = ['snake', 'children']
console.log(person)
// array
let pet1 = person.pets[0]
let pet1Copy = person['pets'] [0]
console.log(pet1)
console.log(pet1Copy)

// deleting properties
let teams = {
    team1: ['j', 'k', 'd', 'm'],
    team2: ['a', 'g'],
    team3: ['s'],
}
delete teams.team3
console.log(teams)

// classes are blueprint/ contructor method  or funtthat get run
class Pokemon {
constructor ( types, weakness, level, hp, attack) {
this.types = types
this.weakness = weakness
this.level = level
this.hp = hp
this.attack = attack
}
}
let snivy = new Pokemon(
    'snivy',
    ['grass'],
    "fire",
    5,
18,
10
)
console.log('snivy')
console.log
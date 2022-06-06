////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE (making a calculator)
// callback is just a function that get pass to another function exam arrow(add 2 param)
const add=(num1, num2)=>num1+num2
const subtract=(num1, num2)=>num1-num2
const multiply =(num1, num2)=>num1*num2
const divide=(num1, num2)=>num1/num2
// make a calculator that take this function
const calculator=(num1, num2, callback)=>{
    // we'll check to see if its true that num1 and num2 can be coerce into# if able to be # well do it and call the callback to do the math if unable well warn them about being numbers
if (+num1 && +num2) {
num1=num1
num2=num2
}else {
    console.log('hey bro! send me some numbers')
}
}
let result=calculator(5,6,add)
console.log(result)
 result=calculator(5,6,subtract)
console.log(result)
 result=calculator(5,6,multiply)
console.log(result)
result=calculator(5,6,divide)
console.log(result)
///////////////////////
////// PET STORE //////
// ///////////////////////
// arrays of ob
const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE forEach is a built in array
const applyPercentDiscount= (product, discount)=> {
    product.displayPricePrice= product.basePrice *(1-discount)
}
const applyFlatRateDiscount= (product, discount)=> {
product.displayPrice = product.basePrice-discount
}
const applyDiscount = (arr, callback, discount)=> {
    arr.forEach((product) => {
callback(product, discount)
    })
}
// applyDiscount(dogProducts, applyPercentDiscount, .1)
// console.log(dogProducts)
// applyDiscount(catProducts, applyPercentDiscount, 2)
// console.log(catProducts)

const applyDiscountByCategory = (arr, categpry, callback, discount) => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].category===category)
        callback(product,)
    }
}

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE higher order function that will return a function no callback involve
function makeSandwichFunction(bread) {
return function(ingredients) {
    let order = `you ordered a $[bread] bread sandwich with`   
// if(i=== ingredients.length-1 && i !==0){order += `and ${ingredients[i]}`}
    for (let i=0; i<ingredients.length; i++) {
    order += `${ingredients[1]}`
}
return order
}
}
const makeWheatSandwich= makeSandwichFunction('wheat')
const makeRyeSandwich = makeSandwichFunction('rye')

let wheatSandwichOrder=makeWheatSandwich(['pickle', 'tuna', 'smoke gouda'])



////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE
let myNewArray = copyArrToCamelCase(lotr)
// console.log(myNewArray)
let myNewerArray= copyArrToSnake(lotr)
console.log(mySnakeCse)
////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']
const newColors=colors.map(() => 'pink')
console.log(newColors)
// const mappedColors // = colors.map()

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = name => {
    return 'Hello', + name
}
greetedFormalNamew = formalNames.map(formalGreeting)
console.log(greeteFormalNames)
// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA= places.filter((place)=> place[0] === 'A') // = places.filter()
console.lotr(PlacesThatStartWu=ithA)

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArrayCallback =(accumulator, currentValue) => {
    return accumulator * currentValue
    // Code here
}

// CODE HERE
const product = numsToReduce.reduce(productOfArrayCallback)
console.log(product)
// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

// const remaining // = expenses.reduce(//callback, //initial value)
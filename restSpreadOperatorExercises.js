/* rewrite the following function using ES 2015
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0)

// create a funcition findMin that accepts a variable number of arguments and returns the smallest argument. Use rest and spread operators.

const findMin = (...nums) => nums.reduce((max, currNum) = currNum < max ? currNum : max);

// create a function mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and the second object:

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//write a function called doubleAndReturnArgs which accepts an array and a variable number arguments. The function return a new array with the original array values and all of additional arguments doubled

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((arg) => arg * 2)]

// Slice and Dice. write the following functions using rest, spread, and refactor to arrow functions.

/* remove a random element in the items array and return a new array without that item. 
function removeRandom(items) {}
*/

const removeRandom = (items) => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
};

/* return a new array with every item in array1 and array2

function extend(array1, array2) {}
*/

const extend = (arr1, arr2) => [...arr1, ...arr2];

/* return a new object with all the keys and values from obj and a new key/value pair
    function addKeyVal(obj, key, val) {}
*/

const addKeyVal = (obj, key, val) => ({...obj, [key] : val});

/* return a new object with a key removed: 
    function removeKey(obj, key) {}
*/

const removeKey = (obj, key) => {
    ({[key]: undefined, ...obj} = obj)
    return obj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key] : val})
//  Arguments Object - no longer bound w/ arrow functions

// const add = (a, b) => {
//     // console.log(arguments);
//     return a + b;
// };
// console.log(add(20, 35, 1001));


// //  This Keyword - no longer bound

// const user = {
//     name: 'Andrew',
//     cities: ['Millbrae', 'Walnut Creek', 'Seattle', 'Hawaii'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + " has lived in " + city);
//     }
// };
// console.log(user.printPlacesLived());



//      *****       Challenge Area       *****

// const multiplier = {
//     // numbers - array of numbers
//     // multiplyBy - single number
//     // multiply - return a new array where the numbers have been multiplied

// };
// console.log(multiplier.multiply()); [1, 2, 3] 5 [5, 10, 15]

//                      *****

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());

//                      *****

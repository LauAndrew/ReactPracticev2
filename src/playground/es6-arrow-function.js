// function square(x) {
// return x * x;

// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));



            //  *****
// const getFullName = 'Mike Smith';

// if (getFullName) {
//     let firstName = getFullName.split(" ")[0];
//     console.log(firstName);
// }
//              *****

// const getFullName = getFullName => {
//     let firstName = getFullName.split(' ')[0];
//     return firstName;
// }
// console.log(getFullName('Mike Smith'));

//          *** ^ Corrected Way ^ ***
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }
// console.log(getFirstName('Marco Lau'));
//              *****

//              *****

// const getFullName = getFullName => getFullName.split(' ')[0];
// console.log(getFullName('Mike Smith'));
//              *****

//          *** ^ Corrected Way ^ ***

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Marco Lau'));





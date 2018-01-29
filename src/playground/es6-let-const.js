var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Wanda';
nameLet = 'Marco';
console.log('nameLet', nameLet);

const nameConst = "Akash";
console.log('nameConst', nameConst);

const fullName = "Andrew Lau";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    // var lastName = fullName.split(' ')[1];
    console.log(firstName);
}
console.log(firstName);
// Setup constructor to take name and age (default to 0)
// getDescription - Andrew is 25 years old || Anonymous is 0 years old

class Person{
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi this is ${this.name}.`;
    }
    getDescription() {
        return `This is ${this.name} and I am ${this.age} years old. `;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `There major is ${this.major}.`;
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.location) {
            greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }

}

// Traveler -> Person
// Add suport for homeLocation
// Override getGreeting
// 1. Hi. I am Andrew Lau. I'm visiting from Walnut Creek.
// 2. Hi. I am Andrew Lau


const me = new Traveler('Andrew Lau', 25, 'Walnut Creek');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

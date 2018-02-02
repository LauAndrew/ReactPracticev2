// Setup constructor to take name and age (default to 0)
// getDescription - Andrew is 25 years old || Anonymous is 0 years old

class Person{
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi this is ${this.name} and I am ${this.age} year(s) old`;
    }
}

class Student extends Person{
    constructor(name, age, major = "undefined"){
        super(name, age);
        this.major = major
    }

}

const me = new Student('Andrew Lau', 25, 'Computer Science');
console.log(me);

const other = new Student();
console.log(other);
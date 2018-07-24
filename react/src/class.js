class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hello, my name is ${this.name}, I am ${this.age} old`;
    }

}

class Traveller extends Person {
    constructor(name,age,location){
        super(name,age)
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        if (this.hasLocation()) {
            return ` I am from ${this.location}`
        }
        return super.getGreeting();
    }

}
const me = new Traveller('nwanna', 27, 'aba');
const anotherMe = new Traveller('nwanna', 27);
console.log(me.getGreeting());
console.log(anotherMe.getGreeting());
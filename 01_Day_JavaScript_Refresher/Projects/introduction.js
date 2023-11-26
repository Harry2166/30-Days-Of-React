console.log('Welcome to 30DaysOfJavaScript')

for(let i = 0; i < 10; i++){
    console.log(`${i} is a number greater than -1!!!`);
}

// let userAge = prompt("Enter your age: ")

// if (userAge > 18) {
//     console.log("You are old");
// } else {
//     console.log("You are young");
// }

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries) {
    console.log(country.toUpperCase())
}

const dog = {
    name : "Paddy",
    legs : 4,
    color: "Brown",
    age : 4,
    bark : function () {
        return "woof woof bark bark"
    }
}

console.log(dog)
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
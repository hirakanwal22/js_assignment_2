// Question no 1

// score= 60;
// const result = score >= 80 ? "Pass" : "Fail";
// console.log(result);

// Question no 2

// Example object with nested properties
// const person = {
//     name: "John",
//     address: {
//         city: "Pakistan",
//         zip: "78500"
//     }
// };

// // Using optional chaining to access nested properties
// const cityName = person?.address?.city;
// console.log(cityName);  

// const zipCode = person?.address?.zip;
// console.log(zipCode);  

// const phoneNumber = person?.contact?.phone;
// console.log(phoneNumber); 

// Question no 4
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; // Handle the case of an empty array
//     }
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum / numbers.length;
// }
// // Example usage
// const numberArray = [10, 20, 30, 40, 50];
// const average = calculateAverage(numberArray);
// console.log(average); 

// Question no 5

// function outerFunction() {
//     const outerVariable = "I am from outerFunction";

//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }
// const closure = outerFunction(); 
// closure(); 

// Question no 6

// const student = {
//     name: "John",
//     age: 20,
//     grades: [85, 90, 78, 95, 88],

//     calculateAverage: function() {
//         const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
//         const average = totalGrades / this.grades.length;
//         return average;
//     }
// };
// console.log(student.name); 
// console.log(student.age);  
// console.log(student.calculateAverage()); 

// Question no8

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of numbers) {
//     const isEven = number % 2 === 0;
//     const result = isEven ? "even" : "odd";
//     console.log(`${number} is ${result}`);
// }

// Question no 10

// const people = [
//     { name: "John", age: 25, address: { city: "New York" } },
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 22, address: { city: "Los Angeles" } }
// ];

// for (const person of people) {
//     const city = person?.address?.city || "Unknown City";
//     console.log(`${person.name} lives in ${city}`);
// }

// Question no 11

// const person = {
//     name: "John",
//     age: 30,
//     gender: "Male"
// };

// for (const key in person) {
//     const value = person[key];
//     console.log(`Property: ${key}, Value: ${value}`);
// }

// Question no 12

//break
// const numbers = [10, 20, 30, 40, 50];

// for (const number of numbers) {
//     if (number === 30) {
//         console.log("Found 30!");
//         break;
//     }
//     console.log(number);
// }

// continue
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         continue;
//     }
//     console.log(number);
// }

// question no 13

// function calculateTax(income) {
//     const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.2 : 0.3;
//     const taxAmount = income * taxRate;
//     return taxAmount;
// }

// // Example usage
// const income1 = 30000;
// const tax1 = calculateTax(income1);
// console.log(`Tax for ${income1}$: ${tax1}$`);

// const income2 = 80000;
// const tax2 = calculateTax(income2);
// console.log(`Tax for ${income2}$: ${tax2}$`);

// const income3 = 150000;
// const tax3 = calculateTax(income3);
// console.log(`Tax for ${income3}$: ${tax3}$`);

// Question no 14
const car = {
    make: "Toyota",
    model: "Camry",
    startEngine: function() {
        console.log("Engine started. Vroom vroom!");
    }
};

// Instantiate the object and call the method
car.startEngine(); // Output: "Engine started. Vroom vroom!"

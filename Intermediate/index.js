// console.log("This is TASK 1")
// console.log("This is TASK 2")
// console.log("This is TASK 3")


// console.log('Alex')
// setTimeout(()   => {
//     console.log('John')
// }
// , 2000)
// console.log('Doe')

// const fetchData = new Promise((resolve, reject) => {
//     let number = "10";
//     if(number ==  10){
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// });

// fetchData.then((data) => {
//     console.log(data)
// }
// ).catch((error) => {
//     console.log(error)
// }
// )

// const print = () => console.log("Print function")
// function fetchData(callback){
//     console.log("This is a main function")

//     callback();
// }

// fetchData(print)

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function () {
//     console.log(`Hello, your name is ${this.name}`);
// };

// Person.prototype.greet2 = function () {
//     console.log(`Hello, your age is ${this.age}`);
// };

// const suman = new Person("Superman", 30);
// suman.greet();
// suman.greet2();

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = number.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// const fetchData = () => {
//     return new Promise((resolve)=> {
//         setTimeout(()=>{
//             resolve("Data fetched!");
//         }, 2000);
//     })
// }

// const getData =async () => {
//     const data = await fetchData();
//     console.log(data);
// }

// getData();

// const fetchData = async () => {
//     const api = await fetch ("https://jsonplaceholder.typicode.com/users");
//     const data = await api.json();
//     console.log(data);
// }
// fetchData();

// function debounce (fun, delay){
//     let timeout

//     return function(...args){
//         clearTimeout(timeout);

//         timeout = setTimeout(()=>{
//             fun(...args)
//         }, delay)
//     }
// }

// const search = debounce(()=>{
//     console.log("Searching...")
// },1000)

// console.log("Typing in serch box...")
// search();

// const color = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "black", "white", "brown"];

// const [fcolor, scolor] = color;
// console.log(fcolor);
// console.log(scolor);

const person = {
    name: "Alex",
    age: 30,
    country: "Nigeria"
}
const {name , age , country} = person
console.log(name);
console.log(age);
console.log(country);


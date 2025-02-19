// function* numberGenerator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = numberGenerator();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


// export const sum = (a,b)=> console.log(a+b);
// export const mul = (a,b)=> console.log(a*b);
// export const div = (a,b)=> console.log(a/b);
// export const sub = (a,b)=> console.log(a-b);

// const bankAc = {
//      balance: 1000
//  }

//  const handler = {
//      get (account, prop){
//         console.log('get', prop);
//         return account[prop]
//     },
//      set(account, property, value){
//          if(property === 'balance' && value < 0)
//         {
//             console.log(`Can not set balance to a negative value`)
//             return false;
//          }

//          console.log(`Setting ${property} to ${value}`);
//          account[property] = value;
//          return true;
//      }
//  }

//  const proxyAc = new Proxy(bankAc, handler);

//  console.log(proxyAc.balance);

// proxyAc.balance = 2000;
// console.log(proxyAc.balance);


// const user = {
//     name: "Ayush",
//     age: 25,
//     password: "mySecret123"
// };

// const handler = {
//     get(target, prop) {
//         if (prop === "password") {
//             return "Access Denied"; // पासवर्ड छिपा दिया गया
//         }
//         return target[prop]; // बाकी properties को return कर दो
//     }
// };

// const proxyUser = new Proxy(user, handler);

// console.log(proxyUser.name);     // Output: Ayush
// console.log(proxyUser.age);      // Output: 25
// console.log(proxyUser.password); // Output: Access Denied


// function multiply (a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }

// const result = multiply(2)(3)(4);
// console.log(result); 

// const original = {name : 'Alice',
//     address: {city: 'London'}
// }
// console.log(original.address.city);

// const shallowCopy = {...original};
// shallowCopy.address.city = 'Paris';
// console.log(original.address.city); // Output: Paris

// const original = {
//     name: 'Alice',
//     address: { city: 'London' }
// };

// // ✅ Deep Copy ka sahi tarika
// const deepClone = JSON.parse(JSON.stringify(original));

// deepClone.address.city = 'NewYork';

// console.log(original.address.city);  // Output: London (original object unaffected)
// console.log(deepClone.address.city); // Output: NewYork

// function memoize(fn) {
//     const cache = {};
//     return function (arg) {
//         if (cache[arg]) {
//             return cache[arg];  // ✅ `args` ki jagah `arg`
//         }
//         const result = fn(arg); // ✅ `args` ki jagah `arg`
//         cache[arg] = result;
//         return result;
//     };
// }

// const factorial = memoize(function fact(n) {
//     if (n <= 1) return 1;
//     return n * fact(n - 1);  // ✅ `fact(n - 1)` likhna zaroori hai, warna function proper work nahi karega.
// });

// console.log(factorial(5));  // Output: 120
// console.log(factorial(6));  // Output: 720 (ye fast hoga kyunki 5 ka result cache me already hai)


// const weakMap = new WeakMap();

// let user = {
//     name: 'John'
// };

// weakMap.set(user, 'Active');
// console.log(weakMap.get(user)); // Output: Active

// user = null;
// console.log(weakMap.get(user)); // Output: undefined


// const weakSet = new WeakSet();

// let obj1 = { name: 'John' };
// let obj2 = { name: 'Alice' };

// weakSet.add(obj1);
// weakSet.add(obj2);

// console.log(weakSet.has(obj1)); // Output: true
// console.log(weakSet.has(obj2)); // Output: true

// greet()
// function greet(){
//     console.log("Hello");
// }



// const greet = function(){
//     console.log("Hello");
// }
// greet();


// const salary = Symbol('sl');

// const user = {
//     name: 'Alice',
//     age : 24,
//     [salary]: 1000
// }

// console.log(user[salary]); // Output: 1000


// let person1 = { name: "Ayush" };
// let person2 = { name: "Pankhudi" };

// function greet(message) {
//     console.log(`${message}, ${this.name}`);
// }

// // `this` ko `person1` bana diya
// greet.call(person1, "Hello"); // Output: Hello, Ayush

// // `this` ko `person2` bana diya
// greet.call(person2, "Hi"); // Output: Hi, Pankhudi

// function introduce(age, city) {
//     console.log(`I am ${this.name}, ${age} years old from ${city}.`);
// }

// let person = { name: "Ayush" };

// // `apply()` me arguments array me pass honge
// introduce.apply(person, [24, "Mohali"]); 
// // Output: I am Ayush, 24 years old from Mohali.


// let user = { name: "Ayush" };

// function showName() {
//     console.log(this.name);
// }

// let boundFunction = showName.bind(user);
// boundFunction(); // Output: Ayush


// async function* asyncgenrator(){
//     const data = ['Suman', 'Rahul', 'Rohit'];
//     for(const name of data){
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         yield name;
//     }
// }

// (async ()=> {
//     for await (const name of asyncgenrator()){
//         console.log(name);
//     }
// })();

// const original = {
//     name: 'Alice',
//     address: { city: 'London' }
// };

// const frozenObject = Object.freeze(original);
// if(!Object.isFrozen(original)){
//     frozenObject.name = 'Bob';
// }

// console.log(frozenObject.name);


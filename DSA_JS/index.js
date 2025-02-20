
// function printArray(arr){
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             printArray(arr[i])
//         }else{
//             console.log(arr[i])
//         }
//     }
// }



// const arr= [1, [2 ,[3, 4],5],6]
// printArray(arr)

// function reverseWord(str){
// return str.split(" ").reverse().join(" ")
// }
// const str = "Hello World from Javascript"
// console.log(reverseWord(str))




// function isValidParentheses(str) {
//     let stack = [];
//     let pairs = {
//         ")": "(",
//         "}": "{",
//         "]": "["
//     }
//     for (let char of str) {
//         if (["(", "{", "[" ].includes(char)){
//             stack.push(char);
//         }else if(stack.pop() !== pairs[char]){
//             return false;
//         }
// }
// return stack.length === 0;
// }

// const str1 = "[{()}]";
// const str2 = "[{()}";
// console.log(isValidParentheses(str1));
// console.log(isValidParentheses(str2
//     ));



// function removeDuplicates(arr){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;  
// }
// const arr = [1, 2, 3, 3, 5, 6, 7, 7, 7];

// console.log(removeDuplicates(arr));



// const arr = [2, -1, -3, 4, -1, 2, 1, -5, 4]
// function maxSubArray(arr){
//     let maxSum = arr[0];
//     let currentSum = arr[0];
//     for(let i=1; i<arr.length; i++){
//         currentSum = Math.max(arr[i], currentSum + arr[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
// }
// console.log(maxSubArray(arr));



// function fNRC(str){
//     const frequency = new Array(256).fill(0);
//     for(let i=0; i<str.length; i++){
//         frequency[str.charCodeAt(i)]++;
//     }
//     for(let i=0; i<str.length; i++){
//         if(frequency[str.charCodeAt(i)] === 1){
//             return str[i];
//         }
//     }
//     return null;
// }
// const str  = "swiss";

// console.log(fNRC(str));



// function fMN(arr,n){
//     let expectedSum = n * (n+1) / 2;
//     let currentSum = 0;
//     for(let i=0; i<arr.length; i++){
//         currentSum += arr[i];
//     }
//     return expectedSum - currentSum;
// }
// const arr = [1,2,4,5,6]
// const n = 6;

// console.log(fMN(arr,n));
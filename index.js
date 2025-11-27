// ----------------------------------------Array task-------------------------------------
// ---------------------Task 1: Sum of Array Elements----------------------------------
// -----------------myself------------->
// let nums = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }

// console.log("Sum =", sum);


// ------------------------Task 2: Find Maximum and Minimum-----------------------
// -----------------myself------------->
// let arr = [12, 7, 45, 22, 9];
// let max = arr[0];  
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log("Max =", max);
// console.log("Min =", min);


// ---------------------------Task 3: Reverse an Array (without using reverse())--------------
// -----------------myself------------->
// let arr = [1, 2, 3, 4, 5];
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);


// ---------------------------Task 4: Remove Duplicates from Array--------------------
// -----------------myself------------->
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!unique.includes(arr[i])) {
//     unique.push(arr[i]);
//   }
// }
// console.log(unique);


// -----------------------------Task 5: Count Occurrences of Each Element---------------
// -----------------myself------------->
// let arr = ["apple", "banana", "apple", "cherry", "banana", "apple"];
// let count = {};
// for (let i = 0; i < arr.length; i++) {
//   let item = arr[i];
//   if (count[item]) {
//     count[item]++; 
//   } else {
//     count[item] = 1; 
//   }
// }
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }


// ----------------------------------Task 6: Filter Even Numbers--------------------------------
// -----------------myself------------->
// let arr = [10, 15, 20, 25, 30];
// let evens = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {  
//     evens.push(arr[i]);
//   }
// }
// console.log(evens);


// ----------------------------------task 7:Merge Two Arrays Without Duplicates---------------------
// -----------------myself------------->
// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let merged = [];
// let combined = [...a, ...b];
// for (let i = 0; i < combined.length; i++) {
//   if (!merged.includes(combined[i])) {
//     merged.push(combined[i]);
//   }
// }
// console.log(merged);


// ------------------------------------Task 8: Sort Numbers Ascending & Descending-------------
// -----------------myself------------->
// let nums = [42, 7, 19, 3, 25];

// let ascending = nums.slice().sort((a, b) => a - b);
// let descending = nums.slice().sort((a, b) => b - a);

// console.log("Ascending:", ascending);
// console.log("Descending:", descending);


// --------------------------------Task 9: Find Second Largest Number------------------
// -----------------myself------------->
// let arr = [10, 25, 5, 30, 20];
// let sorted = arr.slice().sort((a, b) => b - a);
// let secondLargest = sorted[1];
// console.log("Second Largest =", secondLargest);


// -------------------------------- Task 10: Flatten a Nested Array---------------
// -----------------myself------------->
// let arr = [1, [2, [3, 4]], 5];
// let flatArr = arr.flat(Infinity);
// console.log(flatArr);


// -------------------------------Task 11: Square Each Number (Using map())------------------------
// -----------------myself------------->
// let nums = [2, 4, 6, 8];

// let squared = nums.map(num => num * num);

// console.log(squared);


// --------------------------------Task 12: Filter Words by Length (Using filter())-----------------
// -----------------myself------------->
// let words = ["sun", "planet", "moon", "star", "galaxy"];

// let longWords = words.filter(word => word.length > 4);

// console.log(longWords);


// --------------------------Task 13: Sum of Numbers (Using reduce())--------------------------
// -----------------myself------------->
// let numbers = [5, 10, 15, 20];

// let sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);


// ------------------------Task 14: Find First Negative Number (Using find())--------------------------
// -----------------myself------------->
// let arr = [4, 8, -3, 9, -6];

// let firstNegative = arr.find(num => num < 0);

// console.log(firstNegative);


// ----------------------Task 15: Sort Objects by Age----------------------------------------
// -----------------myself------------->
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 30 }
// ];
// let sortedUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortedUsers);


// ---------------------Task 16: Count Even and Odd Numbers (Using reduce())------------------
// -----------------myself------------->
// let nums = [1, 2, 3, 4, 5, 6];
// let result = nums.reduce(
//   (count, num) => {
//     if (num % 2 === 0) {
//       count.even++;
//     } else {
//       count.odd++;
//     }
//     return count;
//   },
//   { even: 0, odd: 0 }
// );
// console.log(result);


// --------------------------Task 17: Remove Falsy Values (Using filter())------------------
// -----------------myself------------->
// let arr = [0, "hello", false, 42, "", null, "JS", undefined];

// let filtered = arr.filter(item => Boolean(item));

// console.log(filtered);


// ------------------------------ Task 18: Capitalize Each Word (Using map())-----------------------
// -----------------myself------------->
// let words = ["apple", "banana", "cherry"];

// let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

// console.log(capitalized);


// -------------------------------Task 19: Group Numbers by Even/Odd--------------
// -----------------myself------------->
// let numbers = [10, 15, 20, 25, 30];
// let even = numbers.filter(num => num % 2 === 0);
// let odd = numbers.filter(num => num % 2 !== 0);
// console.log("Even:", even);
// console.log("Odd:", odd);


// -------------------------------------Task 20: Find Average Marks (Using reduce())----------------------
// -----------------myself------------->
// let marks = [75, 80, 90, 85];

// let average = marks.reduce((sum, m) => sum + m, 0) / marks.length;

// console.log("Average =", average);


// ----------------------mini project-------------------------------------
// -----------------myself------------->
// let students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 58 },
//   { name: "Charlie", marks: 92 },
//   { name: "David", marks: 37 },
//   { name: "Eva", marks: 76 }
// ];

// console.log("All Students:");
// students.forEach(student => {
//   console.log(`${student.name} - ${student.marks}`);
// });

// let total = students.reduce((acc, student) => acc + student.marks, 0);
// let average = total / students.length;

// console.log(`Total Marks: ${total}`);
// console.log(`Average Marks: ${average.toFixed(2)}`);

// let sorted = [...students].sort((a, b) => a.marks - b.marks);

// let low = sorted[0];
// let high = sorted[sorted.length - 1];

// console.log(`Highest: ${high.name} (${high.marks})`);
// console.log(`Lowest: ${low.name} (${low.marks})`);

// let pass = students.filter(s => s.marks >= 40);

// console.log("Students who passed:");
// pass.forEach(s => console.log(`${s.name} - ${s.marks}`));

// let descending = [...students].sort((a, b) => b.marks - a.marks);

// console.log("Students Sorted by Marks (High → Low):");
// descending.forEach(s => console.log(`${s.name} - ${s.marks}`));

// let top3 = descending.slice(0, 3);

// console.log("Top 3 Performers:");
// top3.forEach(s => console.log(`${s.name} - ${s.marks}`));



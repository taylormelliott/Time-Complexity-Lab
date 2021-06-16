// 1) -------------------------------------------------------
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Q: What is the time complexity of the for loop?
// ANSWER: 0(n)

// 1.2) You are challenged to find the 4th element of the array, and you came up with this solution:

var count = 1;
var answer = 0;

for (let i = 0; i < numbers.length; i++) {
  if (count === 4) {
    answer = numbers[i];
    return;
  } else {
    count += 1;
  }
}
// Q: What is the time complexity of of this solution?
// ANSWER: 0(n)

// Q: Could you come up with a solution that has a better time complexity? If so, what is that time complexity?
// ANSWER: answer = numbers[5] ; 0(1)

// 2) -------------------------------------------------------
function printA() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
// Q: What is the time complexity of the function?
// ANSWER: 0(1)

// 3) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i);
  }
}
// Q: What is the time complexity of the function?
// ANSWER: 0(1)

// 4) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j);
    }
  }
}
// Q: What is the time complexity of the function?
// ANSWER: 0(n)

// 5) -------------------------------------------------------
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; i++) {
    console.log(j);
  }
}
// Q: What is the time complexity of the nested for loop?
// ANSWER: 0(n^2)

// 6) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
  return num < 5;
});
// Q: What is the time complexity of the filter higher-order function?
// ANSWER: 0(n)

// 7) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
  return num * 3;
});
// Q: What is the time complexity of the map higher-order function?
// ANSWER: 0(n^2)

// 8) -------------------------------------------------------
function removeNum() {
  numbers.splice(3, 1);
}
// Q: What is the time complexity of the function?
// ANSWER: 0(1)

// 9) -------------------------------------------------------
function insertNum() {
  numbers.splice(3, 0, 19);
}
// Q: What is the time complexity of the function?
// ANSWER: 0(1)

// 10) -------------------------------------------------------
function pushNum() {
  numbers.push(25);
}
// Q: What is the time complexity of the function?
// ANSWER: 0(1)

// 11) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
  console.log(array[0]);
  console.log(array[1]);
}

// Q: What is the time complexity of the function? Could we write this function differently to accomplish the goal of the function in a faster time complexity?
// ANSWER: 0(1)

// Advanced Challenges
// Solve the following challenge. Once complete, determine the time complexity of your solution. Consider if there are ways to solve the challenge with a better time complexity.

// CHALLENGE - SQUARE EVERY NUMBER
//Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81, 1^2 is 1, 1^2 is 1, and 9^2 is 81. Together, we have 81, 1, 1, 81. Once combined we have 811181.

// Starting Code:
const squareEveryDigit = function (number) {
  let digits = number.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    console.log(Math.pow(digits[i], 2));
  }
};

squareEveryDigit(9119); // When running 946, you should see a result of 811636

const perf = require('execution-time')();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

// Takes an array of numbers. Returns true if any two numbers in the array sum to 0.
function sumToZero(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        j++;
      }
      if (numbers[i] + numbers[j] === 0) {
        return true;
      }
    }
  }
  return false;
}

function hasUniqueChars(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i === j) {
        j++;
      }
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
}

function isPangram(sentence) {
    
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);
const numberArray = [0, 1, 2, 3, -2];
const word = 'moonday';

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

// Execution time for sumToZero function.
perf.start();
sumToZero(numberArray);
let sumToZeroResult = perf.stop();

// Execution time for hasUniqueChars function.
perf.start();
hasUniqueChars(word);
let resultsUnique = perf.stop();

console.log('Results for the doubler functions');
console.log('insert', resultsInsert.preciseWords);
console.log('append', resultsAppend.preciseWords);

console.log('Results for sumToZero function with numberArray');
console.log(sumToZeroResult.preciseWords);

console.log("Results for hasUniqueChars functions with 'moonday'");
console.log(resultsUnique.preciseWords);

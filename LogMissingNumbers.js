const generateArrayWithMissingNumbers = (arrayLength) => {
  const numbers = Array.from({ length: arrayLength }, (_, index) => index);

  const indexOne = Math.floor(Math.random() * arrayLength);
  const indexTwo = Math.floor(Math.random() * arrayLength - 1);

  numbers.splice(indexOne, 1);
  numbers.splice(indexTwo, 1);

  return numbers;
};

const logMissingNumbers = (numbers) => {
  const numbersLength = numbers.length;
  const foundNumbers = {};
  const missingNumbers = [];

  for (const number of numbers) {
    foundNumbers[number] = true;
  }

  for (let i = 0; i < numbersLength; i++) {
    if (!foundNumbers[i]) {
      missingNumbers.push(i);
    }
  }

  if (missingNumbers.length === 0) {
    console.log(`There's no missing numbers in the array`);

    return;
  }

  console.log(missingNumbers);
};

const numbers = generateArrayWithMissingNumbers(10000000);

console.time();

logMissingNumbers(numbers);

console.timeEnd();

// logMissingNumbers Time complexity - O(n+n)

const arr = Array.apply(null, { length: 100 }).map((val, index) => {
  return index + 1;
});
console.log(`Array is ${arr}`);

const evenNumbers = arr.filter((num) => num % 2 == 0);
console.log(`Even number is ${evenNumbers}`);

const SquarOfEvenNumber = evenNumbers.reduce((a, num) => a + num ** 2, 0);

console.log(`Squar Of Even Number is ${SquarOfEvenNumber}`);

const promise = (number) => {
  return new Promise((resolve, reject) => {
    if (arr.length > 0) {
      const evenArr = arr.filter((num) => num % 2 == 0);
      resolve(`Even number with promise ${evenArr}`);
    } else {
      reject("This is not array");
    }
  });
};

async function checkNumber() {
  let number = await promise(arr);
  console.log(number);
}

checkNumber();

const promise = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(`This is even number ${number}`);
    } else {
      reject(`This is an odd number ${number}`);
    }
  });
};

async function checkNumber() {
  let number = await promise(25);
  console.log(number);
}

checkNumber()

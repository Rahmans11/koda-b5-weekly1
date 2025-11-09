let i = 1;
const countNumber = 5;
const delay = 1000;

function printNumber() {
  if (i <= countNumber) {
    console.log(`${i}`);
    i++;
    setTimeout(printNumber, delay);
  } 
}

printNumber(5);
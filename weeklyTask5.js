let i = 0;
const countNumber = 5;
const delay = 1000;
function print() {
  if (i < countNumber) {
    i++;
    console.log(`${i}`);
    setTimeout(printNumber, delay);
  }
}
printNumber();

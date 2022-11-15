const nArray = []
let n;

do {
  n = parseInt(prompt('Anna numeron (0 lopettaa): '))
  nArray.push(n);
}
while (n !== 0);

const sortedNumbers = nArray.sort((a, b) => {
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  } else {
    return 0
  }
})
console.log(sortedNumbers)


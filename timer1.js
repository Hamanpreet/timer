let arr = process.argv.slice(2, process.argv.length);      //removing the first two elements from process.argv array to get the Command Line arguments we need
for (let item of arr) {
  const number = item * 1;                                // converting the string array elements to number for the checks
  if (item > 0 && Number.isInteger(number)) {             // We are ignoring non-number and negative values this way
    setTimeout(() => {
      process.stdout.write('\x07');                       // setting the beep
    }, item * 1000);                                      // conveting ms to seconds
  }
}

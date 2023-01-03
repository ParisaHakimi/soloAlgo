// 1- Print 1-255  Print all the integers from 1 to 255.

// function print1To255() {
//   for (let num = 1; num <= 255; num++) {
//     console.log(num);
//   }
// }
// print1To255();

//2. Print Odds 1-255   Print all odd integers from 1 to 255.

function printOdds1To255() {
  for (let num = 1; num <= 255; num += 2) {
    console.log(num);
  }
}
printOdds1To255()
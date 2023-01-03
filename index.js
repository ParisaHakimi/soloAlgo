// 1- Print 1-255  Print all the integers from 1 to 255.
// function print1To255() {
//   for (let num = 1; num <= 255; num++) {
//     console.log(num);
//   }
// }
// print1To255();


//2. Print Odds 1-255   Print all odd integers from 1 to 255.
// function printOdds1To255() {
//   for (let num = 1; num <= 255; num += 2) {
//     console.log(num);
//   }
// }
// printOdds1To255()

// 3. Print Ints and Sum 0-255   Print integers from 0 to 255, and with each integer print the sum so far. 
// function printIntsAndSum0To255(){
//   let sum=0
//   for(let num=0;num<=255;num++){
//     console.log("number is: ",num,"sum up to here is: ",sum+=num)

//   }
// }
// printIntsAndSum0To255()


// 4. Iterate and Print Array   Iterate through a given array, printing each value. 
// function printArrayVals(arr){
// for(let element of arr){
//   console.log(element)
// }
// }
// const arr=[1,34,"hello"]
// printArrayVals(arr)


//5. Find and Print Max      Given an array, find and print its largest element. 
function printMaxOfArray(arr){
  let largest=0
  for(let element of arr){
    if(element>largest){
      largest=element
    }
    console.log("largest is: ",largest)
  }
}
const arr=[2,33,1,42,90,45]
printMaxOfArray(arr)
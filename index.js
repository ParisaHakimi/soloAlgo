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
// function printMaxOfArray(arr){
//   let largest=0
//   for(let element of arr){
//     if(element>largest){
//       largest=element
//     }
//     console.log("largest is: ",largest)
//   }
// }
// const arr=[2,33,1,42,90,45]
// printMaxOfArray(arr)


//6. Get and Print Average    Analyze an array’s values and print the average.
// function printAverageOfArray(arr){
//    let average=0
//    let sum=0
//   let index=0
//   while(index<arr.length){
//     sum+=arr[index]
//     index++;
//   }

//   // arr.forEach(element => {
//   //   sum+=element
//   // });
//   average=sum/arr.length
//   console.log("ave is: ",average)
// }
//  const arr=[2,4,8,43]
//  printAverageOfArray(arr)

// 7. Array with Odds  Create an array with all the odd integers between 1 and 255 (inclusive).
// function returnOddsArray1To255(){
//   let newArr=[]
//   for(let i=1;i<=255;i++){
//   if(i%2!==0){
//     newArr.push(i)
//   }
//   console.log("array: ",newArr)
 
//   }
//   return newArr
// }
// returnOddsArray1To255()
  
//convert Celsius to Fahrenheit
// function convertCtoF(celsius) {
//     let fahrenheit;
//     fahrenheit= (celsius*9)/5+32
//     return fahrenheit;
//   }
  
//   convertCtoF(30);

// reverse a string
// function reverseString(str) {
//     let reversed=""
//     for(let char of str){
//   reversed=char+reversed
//     }
//     return reversed;
//   }
  
//   reverseString("hello");

// factorialize
function factorialize(num) {
    if(num<=1){
      return 1
    }
    let fact=num*factorialize(num-1)
    return fact;
  }
  console.log(factorialize(5))
  factorialize(5);
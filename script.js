// 1. Чётное или нечётное

// function isEven(num){
//     if(num % 2 === 0){
//         console.log('Четное')
//     } else {
//         console.log('Нечетное')
//     }
// }
// isEven(323)

// 2. Палиндром

// function isPalindrome(str) {
//     if(str === str.split('').reverse().join('')){
//         console.log(true)
//     } else (
//         console.log(false)
//     )
// }
// isPalindrome("казак");
// isPalindrome("привет");

// 3. Факториал

// function factorial(num){
// let result = 1;
// for (let i = 1; i <= num; i++) {
//   result *= i;
// }
// return result;
// }
// factorial(3);

// 4. Реверс строки

// function reverseString(str){
//  return str.split('').reverse().join('')
// }
// console.log(reverseString("JavaScript"));


// function reverseString(str){
//     let result = ''
//     for(let i = str.length -1; i >= 0; i --){
//         result = result + str[i]
//     }
//     return result
// }
// console.log(reverseString("JavaScript"));
// console.log(reverseString("hello"));

// 5. Поиск минимального числа

// function findMin(arr){
//     let result = arr[0]
//     for(let num of arr){
//         if(result > num){
//             result = num
//         }
//     }
//     return result
// }
// console.log(findMin([5, 2, 9, -1]));

// 6. Количество гласных

// function countVowels(str){

// }
// countVowels("hello");

// 7. Сумма чётных чисел массива

// function sumEvenNumbers(arrNum) {
//   let result = 0;
//   for (let num of arrNum) {
//     if (num % 2 !== 0) {
//       result = result + num;
//     }
//     // if (num % 2 === 0) {
//     //   result = result + num;
//     // }
//   }
//   return result;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(sumEvenNumbers([10, 15, 20]));

// 9. Генерация случайного числа

// function randomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// console.log(randomNumber(1, 10))
// console.log(randomNumber(50, 100));

// const arrNum = []
// for(let i = 0; i < 10; i++){
//     arrNum.push(Math.floor(Math.random() * 10))
// }
// console.log(arrNum)

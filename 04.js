// 4. 배열 API 활용

// 예시


// 1. 배열 API map 활용
var arr = [10, 20, 30]

let arr2 = arr.map(num => num * 10);
// console.log(arr2);
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요



//2. 배열 API filter 활용
var arr = [10, 22, 33]
let arrFive = arr.filter(num => num % 5 === 0);
// console.log(arrFive);
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요

// 3.
const numbers = [5, 10, 15, 20, 25];
let newNumbers = numbers.filter(num => num > 15);
// console.log(newNumbers);
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]


// 4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
let arrFour = arr.filter(num4 => num4.length >= 4);
// console.log(arrFour);
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요


// 5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
let arrOdd = arr.filter(odd => odd.length % 2 === 1);
// console.log(arrOdd)

// 6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);
// 오름차순으로 정렬하여 출력해주세요

// 7. ----> x
var student = [
    { name: "이재상", age: 25 },
    { name: "정윤오", age: 30 },
    { name: "김준현", age: 12312 }
];
let values = Object.values(student);

// age를 이용하여 내림차순으로 정렬하고 출력해주세요

// 8. ----> x
var student = [
    { id: 1, name: "이재상" },
    { id: 2, name: null },
    { id: 3, name: "김준현" }
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요

// 9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
let arrFive2 = arr.filter(num5 => num5.length > 5)
console.log(arr.includes(arrFive2));
// console.log(arrFive2);
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.

// 10.
var arr = ["banana", "kiwi", "mango"];
arr.splice(2, 1, 'new fruits');
// console.log(arr);
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요

// 11.
var arr = [1, 5, -3, 10, 0, 8];

let arrMinus = arr.filter(minus => minus < 0);
// console.log(arr.includes(-3)) // true
// console.log(arrMinus);
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요

// 12. ----> x
var arr = [1, 5, -3, 10, 0, 8];
let underArr = arr.filter(num => num < 0)
console.log(arr.every(underArr))
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요


// ***** 못 푼 문제 : 7,8,12
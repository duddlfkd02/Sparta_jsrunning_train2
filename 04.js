// 4. 배열 API 활용

// 1. 배열 API map 활용
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요.
// 결과 값: [100, 200, 300]을 출력해주세요.
var arr = [10, 20, 30]
let arr2 = arr.map(num => num * 10);
// console.log(arr2);

// ** map은 중괄호를 쓰면 무조건 return 해야한다.


//2. 배열 API filter 활용
// 5의 배수를 찾아 반환해주세요.
// 결과값 [10]을 출력해주세요.
var arr = [10, 22, 33]
let arrFive = arr.filter(num => num % 5 === 0);
// console.log(arrFive);


// 3. 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]
const numbers = [5, 10, 15, 20, 25];
let newNumbers = numbers.filter((num) => num > 15);
// console.log(newNumbers);

// ** 개수를 줄여야해!! 하면 filter 떠올리기!!


// 4. 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
let arrFour = arr.filter(str => str.length > 4);
// console.log(arrFour);


// 5. 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
let arrOdd = arr.filter(odd => odd.length % 2 === 1);
// console.log(arrOdd)


// 6. 오름차순으로 정렬하여 출력해주세요(점점 커짐)
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);


// 7. age를 이용하여 내림차순으로 정렬하고 출력해주세요
var student = [
    { name: "이재상", age: 25 },
    { name: "정윤오", age: 30 },
    { name: "김준현", age: 12312 }
];

let ageSort = student.sort((a, b) => b.age - a.age);
// console.log(ageSort);


// 8. 객체 배열에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
var student = [
    { id: 1, name: "이재상" },
    { id: 2, name: null },
    { id: 3, name: "김준현" }
];
let nullStudent = student.filter((student) => {
    return student.name !== null;
});

let nullStudent2 = student.some((student) => student.name === null);
// console.log(nullStudent); // 값을 반환
// console.log(nullStudent2); // 불리언 반환


// 9. 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
let arrFive2 = arr.some((fruit) => fruit.length > 5);
// console.log(arrFive2); // true


// 10. kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
var arr = ["banana", "kiwi", "mango"];
arr.splice(2, 0, "apple");
// console.log(arr);
// let newFruits = arr.splice(2, 0, "apple");
// console.log(newFruits); 빈배열

// 11. 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
var arr = [1, 5, -3, 10, 0, 8];
let arrMinus = arr.some(num => num < 0);
// console.log(arr.some(num => num < 0)); // true


// 12. 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
var arr = [1, 5, -3, 10, 0, 8];
let allArrMinus = arr.every((allNum) => allNum < 0);
console.log(allArrMinus); // false

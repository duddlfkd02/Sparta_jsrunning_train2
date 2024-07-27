// 6. 메소드 체이닝

// 주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요.
// 가능하다면 메소드 체이닝으로 풀어주세요.


const students = [
    { name: "이재상", scores: [80, 90] },
    { name: "김준현", scores: [90, 95] },
    { name: "정윤오", scores: [75, 70] },
];

// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]

let studentArr = students.filter((student) => {
    let avg = student.scores.reduce((prev, curr) => prev + curr, 0) / student.scores.length;
    return avg >= 80;
}).map((avgName) => avgName.name);
console.log(studentArr);

function avg(arr) {
    let total = 0;
    for (let i = 0; i < arr, length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}


// ** 숫자, 형태를 모두 바꿔야하는 문제
// .map((student, index) => student.name)
// const newStudent = students
//     .filter((student) => );
// // .filter((element, index) => element !== "정윤오");

// console.log(newStudent);

//student 는 객체 하나씩 들어있음
// element 는 student.name

// ======================================================


// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
const numbers = [5, 10, 15, 20, 25];

// 출력값 : [10, 20, 30]

let newNum = numbers.map(num => num * 2).filter((num) => num <= 30);

console.log(newNum);


// ** 반환값이 배열이면 함수종료 되었을 때 배열!로 반환 -> 배열메소드로 체이닝

// 콜백 안에서 {}를 쓰면 무조건 return문을 써야한다
// 화살표 함수 안에는 return문이 들어있다
// map, filter에서 {}를 사용했다면 return을 작성해줘야 반환이 된다.
// 배열 요소를 그대로  -> map
// 배열 요소를 변형한다 -> filter
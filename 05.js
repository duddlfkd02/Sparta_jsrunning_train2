// 5. forEach로 변환해보기

// 예시


//해당 문제를 forEach로 변경하여 풀어주세요
let arr = [10, 20, 30]
let newArr = [];
// 해당 로직을 작성하세요  
arr.forEach((num) => { newArr.push(num * 10) });
console.log(newArr);

// 결과 값: [100, 200, 300] 출력해주세요 

let arr2 = [10, 22, 33]
let newArr2 = [];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
let arrFive = arr2.forEach(num => {
    if (num % 5 === 0) {
        newArr2.push(num);
    }
})
console.log(newArr2)

// 결과값 [10]



// ** forEach는 반환값이 없으므로 빈 배열(newArr)을 만든 후 결과값을 넣어주어야한다.
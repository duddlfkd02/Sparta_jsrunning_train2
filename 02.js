// 2. 깊은 복사
// 예시
function deepCopy(o) {
    var result = {};
    if (typeof o === "object" && o !== null)
        for (i in o) result[i] = deepCopy(o[i]);
    else result = o;
    return result;
}
// *deepCopy:내가 가지고 있는 모든 프로퍼티를 새로 만들어진 객체/배열이 생성!
var arr1 = [{ a: 1 }, { b: 2 }]

/*깊은 복사 코드를 작성해주세요 
깊은복사 할 때 deepCopy를 사용하시거나 다른 방식도 가능합니다. */
// var arr2 = JSON.parse(JSON.stringify(arr1));
// var arr2 = deepCopy(arr1);
var arr2 = structuredClone(arr1);

/* arr2의 0번째 객체에 c라는 속성을 추가하고 값을 3으로 할당해주세요 */
arr2[0].c = 3;

// 내가 쓴 답: arr2[0] = {c = 3};
// 출력 값 : [ { c: 3 }, { b: 2 } ]

/* arr1을 출력해주세요 출력값 : [{a:1}, {b:2}] */
/* arr2를 출력해주세요 출력값 : [{a:1, c: 3}, {b:2}]*/
console.log(arr1);
console.log(arr2);


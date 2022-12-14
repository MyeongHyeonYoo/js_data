// 배열 비구조화 할당은 객체 비구조화 방식에서 중괄호를 대괄호[]로 변경
let arr = [1, 2, 30, 44, 5];

let [b, c, ...rest] = arr; 
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);
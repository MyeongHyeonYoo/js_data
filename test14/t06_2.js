// ES6에 추가된 화살표
const double = x => x + x;
console.log(double(2));

const add = (a, b) => a + b;
console.log(add(1, 2));

// const printArguments = () => { // 에러
//   console.log(arguments);
// }
// printArguments(1, 2, 3); 

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3));

setTimeout(() => {
  console.log('화살표 함수');
}, 2000);
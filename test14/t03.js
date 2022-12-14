// ES6 이전에는 변수 하나에 값 하나를 일일이 할당해야 했지만
// ES6부터는 비구조화 할당을 통해 손쉽게 할당할 수 있게 되었음.

let obj = {a : 1, b : 2, c : 30, d : 44, e : 5};

let {a, c} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

let {a : newA = 10, f : newF = 5} = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);
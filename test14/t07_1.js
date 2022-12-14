// 예외처리
// throw
function checkNumber(va1) {
  if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
  console.log('숫자를 값으로 확인되었습니다.');
}

checkNumber(100);
checkNumber('Wrong type');
console.log('완료');
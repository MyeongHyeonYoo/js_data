// JSON을 문자열로 바꾸기 - JSON.stringify(값, 리플레이서, 공백 개수)

const testStringify = {
  stringifiedNum : JSON.stringify(13.1),
  stringifiedStr : JSON.stringify('Carnival'),
  stringifiedBln : JSON.stringify(false),
  stringifiedArr : JSON.stringify([2003, 2017])
};

for (let key in testStringify) {
  console.log(`------------------${key}-------------------`);
  console.log(typeof testStringify[key]);
  console.log(testStringify[key]);
}

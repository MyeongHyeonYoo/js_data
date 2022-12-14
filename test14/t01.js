// 변수명으로 속성의 키와 값을 한 번에 정의할 수 있다.

let address = 'Seoul';
let member = {};
let addFamily = function(age, name, role) {
  this.member[role] = {age, name};
};

let getHeadcount = function() {
  return Object.keys(this.members).length;
};

let family = {address, members, addFamily, getHeadcount};

family.addFamily(30, 'chole', 'aunt');
family.addFamily(30, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family.getHeadcount());
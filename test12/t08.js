// switch

var subject = '자바스크립트';

switch (subject) {
  case 'C언어':
    console.log('초보자를 위한 C언어 기초');
    break;
  case '자바스크립트':
    console.log('초보자를 위한 자바스크립트 기초');  
    break;
  case '파이썬':
    console.log('초보자를 위한 파이썬 기초');
    break;

  default:
    console.log('이제 초보가 아님')
    break;
}
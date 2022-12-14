// ES6부터는 function 없이도 함수로 정의할 수 있음.

// ES6 이전방식
var greeting_expression = function(name) {
  console.log('Hi ' + name);
}

function greeting_declaration(name) {
  console.log('Hi, ' + name);
}

greeting_expression('Chole');
greeting_declaration('Chloe');
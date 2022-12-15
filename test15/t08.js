// 진수변환
const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2);
const dexByOct = parseInt(oct, 8);
const dexByHex = parseInt(hex, 16);
const hexByOct = parseInt(oct, 8).toString(16);


console.log(dexByBin);
console.log(dexByHex);
console.log(dexByOct);
console.log(hexByOct);

document.write(`<h1>진수 변환 프로그램</h1>`);
document.write(`<p> ${dexByBin} </p>`);
document.write(`<p> ${dexByHex} </p>`);
document.write(`<p> ${dexByOct} </p>`);
document.write(`<p> ${hexByOct} </p>`);
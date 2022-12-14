// Default - 기본값 할당
function drawChart(width = 200, height = 400) {
  console.log(`${width} x ${height} 차트를 그립니다.`);
}

drawChart(100);
drawChart(100, 100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
  console.log(`${width} x ${height} 차트를 그립니다.`);
}
console.log('');
drawChart2(300);
drawChart2();
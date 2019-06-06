'use strict';

function fib(n) {
    var a = 1,
      b = 1;
    for (let i = 2; i <= n; i++) {
      var result = a + b;
      a = b;
      b = result;
    }
    return b;
  }

for (let i = 0; i <= 3; i++) {
  let fibResult = document.createElement('div');
  fibResult.innerHTML = fib(i);
  fibResult.className = 'matrix2x2-item';
  document.querySelector('.matrix2x2').appendChild(fibResult);
}

for (let i = 4; i <= 12; i++) {
    let fibResult = document.createElement('div');
    fibResult.innerHTML = fib(i);
    fibResult.className = 'matrix3x3-item';
    document.querySelector('.matrix3x3').appendChild(fibResult);
  }

  for (let i = 13; i <= 28; i++) {
    let fibResult = document.createElement('div');
    fibResult.innerHTML = fib(i);
    fibResult.className = 'matrix4x4-item';
    document.querySelector('.matrix4x4').appendChild(fibResult);
  }

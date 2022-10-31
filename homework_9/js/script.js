'use strict'

function makeFibonacciFunction() {
	let prevNum = -1;
	let nextNum = 1;
	let sumFibo;

	return function () {
		sumFibo = prevNum + nextNum;
		prevNum = nextNum;
		nextNum = sumFibo;
		return nextNum;
	};
};

let chowFibo = makeFibonacciFunction();

console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());

'use strict'

let chowFibo = function () {
	let prevNum = -1;
	let nextNum = 1;
	let sumFibo;

	return function () {
		sumFibo = prevNum + nextNum;
		prevNum = nextNum;
		nextNum = sumFibo;
		return nextNum;
	}
}();

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
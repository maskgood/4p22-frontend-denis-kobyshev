'use strict';

const button = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
let divResult = document.getElementById('result');

button.addEventListener('click', (event) => {

	event.preventDefault();

	let numberOne = document.getElementById('number1').value;
	let numberTwo = document.getElementById('number2').value;
	let operatorInput = document.getElementById('operator').value;
	let result;

	if (numberOne === '') {
		console.log('Введите первое число');
		return divResult.innerText = 'Введите первое число';
	} else if (isNaN(numberOne) === true) {
		console.log('Первое число - некорректно');
		return divResult.innerText = 'Первое число - некорректно';
	};
	if (numberTwo === '') {
		console.log('Введите второе число');
		return divResult.innerText = 'Введите второе число';
	} else if (isNaN(numberTwo) === true) {
		console.log('Второе число - некорректно');
		return divResult.innerText = 'Второе число - некорректно';
	};

	switch (operatorInput) {
		case '': console.log('Не введен знак'); return divResult.innerText = 'Не введен знак'; break;
		case '+': result = Number(numberOne) + Number(numberTwo); break;
		case '-': result = Number(numberOne) - Number(numberTwo); break;
		case '*': result = Number(numberOne) * Number(numberTwo); break;
		case '/': result = Number(numberOne) / Number(numberTwo); break;
		default: return divResult.innerText = 'Данная операция не поддерживается';
	}

	if (result === Infinity || result === -Infinity) {
		console.log('На ноль делить нельзя!');
		return divResult.innerText = 'На ноль делить нельзя!';
	};
	if (isNaN(result)) {
		console.log('Результат не определен');
		return divResult.innerText = 'Результат не определен';
	};

	console.log(`${result}`);
	divResult.innerText = `${result}`;

});

resetBtn.addEventListener('click', (event) => {
	divResult.innerText = '';
});
'use strict'

let btn = document.getElementById('btn');
const mailCheck = function validateEmail(email) { const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(String(email).toLowerCase()); }
const userResult = {};


btn.addEventListener('click', (event) => {

	event.preventDefault();

	let emailInput = document.getElementById('email');
	let passwordInput = document.getElementById('password');
	let reasswordInput = document.getElementById('repassword');
	let textAbout = document.getElementById('textarea');
	let emailEmpty = document.getElementById('email-empty');
	let emailError = document.getElementById('email-error');
	let passEmpty = document.getElementById('pass-empty');
	let passError = document.getElementById('pass-error');
	let pass2Error = document.getElementById('pass2-error');

	if (emailInput.value === '' && mailCheck(emailInput.value) === false) {
		emailEmpty.classList.add('error');
		emailInput.classList.add('input-error');
		userResult.email = '';

	} else {
		emailEmpty.classList.remove('error');
		emailInput.classList.remove('input-error');
	}

	if (mailCheck(emailInput.value) === false && emailInput.value !== '') {
		emailError.classList.add('error');
		emailInput.classList.add('input-error');
		userResult.email = '';

	} else {
		emailError.classList.remove('error');
		userResult.email = emailInput.value;
	}

	if (passwordInput.value === '' && passwordInput.value.length < 8) {
		passEmpty.classList.add('error');
		passwordInput.classList.add('input-error');
		passError.classList.remove('error');
		userResult.password = '';
	} else {
		passEmpty.classList.remove('error');
		passwordInput.classList.remove('input-error');
	}

	if (passwordInput.value.length < 8 && passwordInput.value !== '') {
		passError.classList.add('error');
		passwordInput.classList.add('input-error');
		passEmpty.classList.remove('error');
		userResult.password = '';
	} else {
		passError.classList.remove('error');
	}

	if (passwordInput.value !== reasswordInput.value) {
		reasswordInput.classList.add('input-error');
		pass2Error.classList.add('error');
		userResult.password = '';
	} else {
		reasswordInput.classList.remove('input-error');
		pass2Error.classList.remove('error');
		userResult.password = passwordInput.value;
	}

	if (document.getElementById('male').checked) {
		userResult.gender = 'Мужчина';
	}
	else if (document.getElementById('female').checked) {
		userResult.gender = 'Женщина';
	}

	if (document.getElementById('update').checked) {
		userResult.update = 'Yes';
	}
	else {
		userResult.update = 'No';
	}

	userResult.about = textAbout.value;
	if (userResult.email !== '' && userResult.password.length >= 8) {
		for (var key in userResult)
			console.log(key + ': ' + userResult[key]);
	}

})

console.log(userResult);


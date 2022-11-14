'use strict';

fetch('https://reqres.in/api/users?per_page=12')
	.then((res) => {
		return res.json();
	}).then((result) => {
		console.log('-----------');
		console.log('Пункт No1:');
		console.log('-----------');
		console.log(result);
		result.data.forEach(function (item) {
			console.log(item.last_name);
		}
		);

		console.log('-----------');
		console.log('Пункт No2:');
		console.log('-----------');

		result.data.forEach(function (item) {
			if (item.last_name[0] === 'F') {
				for (let key in item) {
					console.log(`${key}: ${item[key]}`);
				}
				console.log('______________________');
			}
		}
		);

		console.log('-----------');
		console.log('Пункт No3:');
		console.log('-----------');

		const newArray = result.data.reduce(function (accumulator, string) {
			let comma;
			if (string.id === result.data.length) {
				comma = '';
			} else {
				comma = ',';
			}
			return `${accumulator} ${string.first_name} ${string.last_name}${comma}`

		}, 'Наша база содержит данные следующих пользователей:');
		console.log(newArray);

		console.log('-----------');
		console.log('Пункт No4:');
		console.log('-----------');

		let firstObject = result.data[0]
		for (let key in firstObject) {
			console.log(`${key}`);
		}
	})
	.catch((error) => {
		console.log(error);
	});







// https://reqres.in/api/users?per_page=12
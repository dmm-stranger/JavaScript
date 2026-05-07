// Array Method reduce():
// sum of numbers:
const numbers = [1, 2, 3, 4];
const sumOf = numbers.reduce((acc, elem) => {
	return acc + elem;
}, 0);
// console.log(sumOf);

// multiply all numbers:
const multiArr = [1, 2, 3, 4];
const sumMul = multiArr.reduce((acc, elem) => {
	return acc * elem;
}, 1);
// console.log(sumMul);

// find maximum value:
const values = [100, 10, 25, 70, 5, 40];
const maximum = values.reduce((acc, elem) => {
	if (acc > elem) return acc;
	return elem;
}, 0);
// console.log(maximum);

// count elements:
const counters = [1, 2, 3, 4, 5, 6, 8];
const totalElem = counters.reduce((acc, elem) => {
	return (acc += 1);
}, 0);
// console.log(totalElem);

// sum of object values:
const cart = [
	{ name: 'item1', price: 100 },
	{ name: 'item2', price: 200 },
];
const totalPrice = cart.reduce((acc, element) => {
	return (acc += element?.price);
}, 0);
// console.log(totalPrice);

// flattern array:
const arry = [1, [2, 3], [4, [8, [55, 88, 99], 9, 6], 5]];
let flat = [];
arry.reduce((acc, element) => {
	flatArr(element);
}, 0);

function flatArr(element) {
	if (Array.isArray(element)) {
		element.forEach((elem) => {
			if (Array.isArray(elem)) {
				flatArr(elem);
			} else {
				flat.push(elem);
			}
		});
	} else {
		flat.push(element);
	}
}
// console.log(flat);

// count occurences:
const arryy = ['apple', 'banana', 'apple', 'orange'];
const countOccurrences = arryy.reduce((accumulator, currentValue) => {
	accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
	return accumulator;
}, {});
// console.log(countOccurrences);

// groupd by user:
const users = [
	{ name: 'A', role: 'admin' },
	{ name: 'B', role: 'user' },
	{ name: 'C', role: 'admin' },
];
const groups = users.reduce((acc, user) => {
	const { role } = user;
	if (!acc[role]) {
		acc[role] = [];
	}
	acc[role].push(user);
	return acc;
}, {});
// console.log(groups);

// remove duplicates:
const arree = [1, 2, 2, 3, 4, 4];
const removeDup = arree.reduce((acc, element) => {
	if (!acc.includes(element)) {
		acc.push(element);
	}
	return acc;
}, []);
// console.log(removeDup);

// 10. Transform array to object:
const data = [
	{ id: 1, name: 'A' },
	{ id: 2, name: 'B' },
];
const exchangeObj = data.reduce((acc, elem) => {
	acc[elem.id] = elem.name;
	return acc;
}, {});
// console.log(exchangeObj);

//

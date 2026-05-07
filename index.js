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

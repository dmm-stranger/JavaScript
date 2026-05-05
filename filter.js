// Array filter?():
// get even numbers:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => {
	return number % 2 === 0;
});
// console.log(evenNumbers);

// filter string only:
const arr = [1, 'hi', 15, 25, 'hello'];
const stringArr = arr.filter((elem) => {
	return typeof elem === 'string';
});
// console.log(stringArr);

// Filter adults:
const users = [
	{ name: 'A', age: 17 },
	{ name: 'B', age: 22 },
	{ name: 'C', age: 15 },
];
const result = users.filter((user) => {
	return user?.age >= 18;
});
// console.log(result);

// Find long words:
const words = ['hi', 'bye', 'libiba', 'jeny', 'mikhail'];
const longWords = words.filter((word) => {
	return word.length >= 3;
});
// console.log(longWords);

// Remove duplicates:
const arry = [1, 2, 2, 3, 4, 4, 100, 100];
const duplicateFree = arry.filter((item, idx) => {
	// console.log(arry.indexOf(item), idx, item);
	return arry.indexOf(item) === idx;
});
// console.log(duplicateFree);

// filter product by price:
const products00 = [
	{ name: 'Phone', price: 1000 },
	{ name: 'Mouse', price: 50 },
	{ name: 'Laptop', price: 1500 },
];
const cheapProducts = products00.filter((product) => {
	return product.price > 500;
});
// console.log(cheapProducts);

// search users(case insensetive):
const users44 = [
	{ name: 'John' },
	{ name: 'Jane' },
	{ name: 'mirJA' },
	{ name: 'Alex' },
];
const matchUser = users44.filter((user) => {
	return user.name.toLowerCase().includes('ja');
});
// console.log(matchUser);

// filter valid users:
const users55 = [
	{ name: 'A', email: 'a@test.com' },
	{ name: '', email: 'b@test.com' },
	{ name: 'C', email: '' },
	{ name: 'jamil', email: 'ja@gmail.com' },
];
const validUsers = users55.filter((user) => {
	return user.name.charAt(0) && user.email.charAt(0);
});
// console.log(validUsers);

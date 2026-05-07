// Array find():
// find the even number:
const ars = [1, 3, 5, 6, 7, 10];
const eventNum = ars.find((elem) => {
	return elem % 2 === 0;
});
// console.log(eventNum);

// find grater then ten number
const numbers = [1, 2, 3, 4, 88, 99, 10, 25];
const graterNum = numbers.find((num) => num > 10);
// console.log(graterNum);

// find specific string:
const fruits = ['apple', 'banana', 'mango'];
const specialWord = fruits.find((word) => word === 'banana');
// console.log(specialWord);

// find nagative number:
const arr = [3, 4, -5];
const nagativeNum = arr.find((num) => Number(num) < 0);
// console.log(nagativeNum);

// find user by name:

const users = [
	{ name: 'A', age: 20 },
	{ name: 'B', age: 25 },
];
const userByName = users.find((user) => user.name === 'B');
// console.log(userByName);

// find first adult:
const userss = [
	{ name: 'A', age: 16 },
	{ name: 'B', age: 17 },
	{ name: 'C', age: 22 },
];
const firstAdult = userss.find((user) => user.age >= 18);
// console.log(firstAdult);

// find long words/ length grater than 3:
const words = ['hi', 'js', 'hello', 'world'];
const longWord = words.find((word) => word.length > 3);
// console.log(longWord);

// find expensive product / less than 1000:
const products = [
	{ name: 'Mouse', price: 50 },
	{ name: 'Phone', price: 1000 },
	{ name: 'Laptop', price: 1500 },
];
const expensivePro = products.find((product) => product.price > 1000);
// console.log(expensivePro);

// find user by id/ id === 2:
const usersss = [
	{ id: 1, name: 'A' },
	{ id: 2, name: 'B' },
];
const userTwo = usersss.find((user) => user.id === 2);
// console.log(userTwo);

// find valid login user:
const usersy = [
	{ email: 'b@test.com', password: 'efgh' },
	{ email: 'b@test.com', password: 'abcd' },
];
const loginUser = usersy.find(
	(user) => user.email === 'b@test.com' && user.password === 'abcd',
);
// console.log(loginUser);

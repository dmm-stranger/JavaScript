// javaScript object methods:
// keys(), values(), entries(), assign():
const user = { name: 'mahmud', age: 36 };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
const update = Object.assign({}, user, { age: 50 });
console.log(update);

const arr = [
	['name', 'John'],
	['age', '30'],
];

console.log(Object.fromEntries(arr));

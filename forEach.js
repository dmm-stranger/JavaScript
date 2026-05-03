// Array.
// array forEach():
const names = ['kamal', 'jamal', 'mohosin'];
names.forEach((element, index, arr) => {
	// console.log(index, element);
});

// Some Problems Solved::
// print all elements: const arr = [1, 2, 3, 4];
const numbers = [1, 2, 3, 4];
numbers.forEach((element) => {
	// console.log(element);
});

// print total some of an array: const arr = [5, 10, 15];
const salaries = [15000, 20000, 60000, 10000];
let sumOfSalary = 0;

salaries.forEach((salary) => {
	sumOfSalary += salary;
});
// console.log(sumOfSalary);

// multiply each element to 2: const arr = [1, 2, 3];
const serviceCharge = [1500, 700, 800, 300, 500];
let newServiceCharge = [];
serviceCharge.forEach((service) => {
	newServiceCharge.push(service * 2);
});
// console.log(newServiceCharge);

// count event numbers: const arr = [1, 2, 3, 4, 6];
const nums = [1, 2, 3, 4, 5, 6, 7];
let countEvent = 0;
nums.forEach((num, index) => {
	if (num % 2 === 0) countEvent += 1;
});
// console.log(`total event numbers: ${countEvent}`);

// convert numbers to string: const arr = [1, 2, 3];
const peoples = [1, 2, 3, 4, 5];
let stringPeoples = [];
peoples.forEach((elem) => {
	elem = String(elem);
	stringPeoples.push(elem);
});
// console.log(stringPeoples);

// find max value: const arr = [10, 25, 5, 40];
const mathNumbers = [1, 40, 50, 22, 333, 559, 878];

mathNumbers.forEach((number, index, arr) => {
	if (index === 0) {
		// console.log(Math.max(...arr));
	}
});

// filter numbers lessThan 10: const arr = [5, 12, 8, 20];
const someNumbuers = [5, 12, 8, 20, 10, 3, 9, 8, 55, 162];
let lessThanTen = [];
someNumbuers.forEach((number) => {
	if (number < 10) lessThanTen.push(number);
});
// console.log(lessThanTen);

// Count occurrences: const arr = ["apple", "banana", "apple", "orange"];
const fruites = ['apple', 'banana', 'apple', 'orange'];
let occurrences = {};
fruites.forEach((fruite) => {
	// console.log(occurrences);
	occurrences[fruite] = (occurrences[fruite] || 0) + 1;
});
// console.log(occurrences);

// nasted Flatten one level array: const arr = [1, [2, 3], [4, 5]];
const multiLevelArr = [
	1,
	[2, 3],
	[4, [2, [2, 6, [100, 200, 300], 5], 6, 5], 5],
];
let flattenArr = [];
multiLevelArr.forEach((element, idx, arr) => {
	mim(element);
});
function mim(element) {
	if (Array.isArray(element)) {
		element.forEach((elem) => {
			if (Array.isArray(elem)) {
				mim(elem);
			} else {
				flattenArr.push(elem);
			}
		});
	} else {
		flattenArr.push(element);
	}
}
// console.log(flattenArr);

// Capitalize words: const words = ["hello", 'world'];
const words = ['hello', 'world'];
let capitalizedWord = [];
words.forEach((word) => {
	capitalizedWord.push(word.toUpperCase());
});
// console.log(capitalizedWord);

// grouped by role: const users = [{ name: "A", role: "admin" },{ name: "B", role: "user" },{ name: "C", role: "admin" }];

const users = [
	{ name: 'A', role: 'admin' },
	{ name: 'B', role: 'user' },
	{ name: 'C', role: 'admin' },
];
const grouped = {};

users.forEach((user) => {
	if (!grouped[user.role]) {
		grouped[user.role] = [];
	}
	grouped[user.role].push(user);
});
// console.log(grouped);

// Total price of cart: const cart = [{ name: "item1", price: 100 },{ name: "item2", price: 200 }];
const cart = [
	{ name: 'trimmer', price: 199 },
	{ name: 'waterPot', price: 123 },
];
let totalPrice = 0;
cart.forEach((product) => {
	totalPrice += product?.price;
});
// console.log(`Total Price: ${totalPrice}$`);

// Remove duplicates: const arr = [1, 2, 2, 3, 4, 4];
const duplicatesNumbers = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9];
let uniqueNumbers = [];
duplicatesNumbers.forEach((number) => {
	if (!uniqueNumbers.includes(number)) {
		uniqueNumbers.push(number);
	}
});
// console.log(uniqueNumbers);

// Create index map: const arr = ["a", "b", "c"];
const arr = ['a', 'b', 'c'];
const newArrObj = {};
arr.forEach((elem, idx) => {
	if (!newArrObj[elem]) {
		newArrObj[elem] = idx;
	}
});
// console.log(newArrObj);

// Find longest word: const words = ["hi", "hello", "world"];
const manyWords = ['hellllllo', 'hello', 'eorlds', 'beastsd'];
let longestWord = '';

manyWords.forEach((word, idx) => {
	if (word.length > longestWord.length) {
		longestWord = word;
	}
});
// console.log(longestWord);

// extract emails@: const users = [{ name: "A", email: "a@test.com" },{ name: "B", email: "b@test.com" }];
const usersSet = [
	{ name: 'marfi', email: 'marfi889@gmail.com' },
	{ name: 'yamen', email: 'yamen334@gmail.com' },
	{ name: 'razib', email: 'razib005@gmail.com' },
];

const emails = [];
usersSet.forEach((user) => {
	emails.push(user?.email);
});
// console.log(emails);

// calculate avarage marks: const students = [{ name: "A", marks: 80 },{ name: "B", marks: 90 }];
const students = [
	{ name: 'khalid', marks: 459 },
	{ name: 'walid', marks: 930 },
	{ name: 'walid', marks: 551 },
	{ name: 'walid', marks: 930 },
];
let totalMarks = 0;
students.forEach((student, idx) => {
	totalMarks += student?.marks;
});
// console.log(totalMarks / students.length);

// Validate data: const users = [{ name: "A", age: 20 },{ name: "", age: 25 }];
const sellerUsers = [
	{ name: 'A', age: 20 },
	{ name: '', age: 25 },
	{ name: 'C', age: null },
	{ name: 'D', age: 30 },
];
let inValidUserCount = 0;
sellerUsers.forEach((user) => {
	if (!user?.name || !user.age) inValidUserCount++;
});
// console.log(inValidUserCount);

// nasted sum: const orders = [{ items: [10, 20] },{ items: [5, 15] }];
const orders = [
	{ items: [10, 20] },
	{ items: [5, 15] },
	{ items: [5, 15, 58, 25] },
];
let totalItems = 0;
orders.forEach((order, idx) => {
	if (Array.isArray(order.items)) {
		order.items.forEach((item) => {
			if (!Array.isArray(item)) {
				totalItems += item;
			}
		});
	} else {
		totalItems += order.items;
	}
});
// console.log(totalItems);

// transform API response: const data = [{ id: 1, name: "A" },{ id: 2, name: "B" }];
const data = [
	{ id: 1, name: 'A' },
	{ id: 2, name: 'B' },
];
const transformData = {};

data.forEach((data) => {
	if (!transformData[data.id]) {
		transformData[data.id] = data.name;
	}
});
// console.log(transformData);

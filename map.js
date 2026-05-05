// Array Method map():
//  Double each number: const numbers = [2,3,4,5]
const numbers = [2, 3, 4, 5, 6];
const doubleArr = numbers.map((eachNum) => {
	return eachNum * 2;
});
// console.log(doubleArr);

// Convert numbers to strings: const spcNumbers = [122, 125, 113, 147]
const specialNumbers = [122, 136, 159, 144, 187];
const stringArr = specialNumbers.map((eachNum) => {
	return String(eachNum);
});
// console.log(stringArr);

// get string length: const string = ["hi", "hello", "world"];
const stringWords = ['hi', 'hello', 'mellanio'];
const lengthArr = stringWords.map((eachString) => {
	return eachString.length;
});
// console.log(lengthArr);

// Add 10 to each number: const numbers = [10,12,24];
const addableNumbers = [10, 12, 24];
const newArr = addableNumbers.map((eachNum) => {
	return eachNum + 10;
});
// console.log(newArr);

// Convert Celsius to Fahrenheit: const celsius = [10,30,45];
const celsiusData = [10, 25, 31];
const Fahrenheit = celsiusData.map((eachTemp) => {
	return (eachTemp * 9) / 5 + 32;
});
// console.log(Fahrenheit);

// filter adults: const candidate = [{name: "hujaifa", age: 25}, {name: "siddik", age: 15},{name: "hafiz", age: 17}]

const candidates = [
	{ name: 'hujaifa', age: 25 },
	{ name: 'siddik', age: 15 },
	{ name: 'hafiz', age: 17 },
];
const adultsCandidate = candidates.map((eachMember) => {
	return eachMember?.age >= 18;
});
// console.log(adultsCandidate);

// extract names: const users = [{ name: "A", age: 20 },{ name: "B", age: 25 }];
const employeNames = [
	{ name: 'kamal', age: 30 },
	{ name: 'jamal', age: '32' },
];
const names = employeNames.map((employe) => {
	return employe?.name;
});
// console.log(names);

// Add fullName: const users = [{ first: "John", last: "Doe" },{ first: "Jane", last: "Smith" }];
const users = [
	{ firstName: 'ashruf', lastName: 'uddin' },
	{ firstName: 'jolil', lastName: 'molla' },
];
const employeNamess = users.map((user) => {
	return `${user.firstName} ${user.lastName}`;
});
// console.log(employeNamess);

// Square numbers: const arr = [2, 3, 4];
const numbers2 = [2, 3, 12];
const squareRoot = numbers2.map((number) => {
	return number ** 2;
});
// console.log(squareRoot);

// Convert prices with tax: const prices = [100, 200];
const prices = [300, 625];
const taxRate = 0.15; // 25%
const taxPrices = prices.map((price) => {
	return price * (1 + taxRate);
});
// console.log(taxPrices);

// 10. Boolean mapping: const arr = [1, 2, 3, 4];
const mature = [1, 2, 3, 4, 5];
const booleanMatch = mature.map((element) => {
	if (element % 2) {
		return true;
	}
	return false;
});
// console.log(booleanMatch);

// 11. Transform object structure:
const usersss = [
	{ name: 'baten', id: 1659, age: 60 },
	{ name: 'maruf', id: 1660, age: 40 },
];
const transform = usersss.map((user) => {
	return { userID: user.id, userNAME: user.name };
});
// console.log(transform);

// Nested array mapping:
const arr = [
	[1, 2],
	[2, 3],
];
const double = arr.map((subArr) => {
	return subArr.map((elem) => {
		return elem * 2;
	});
});
// console.log(double);

// Add index to each element:
const arr2 = ['a', 'b', 'c'];
const indexArr = arr2.map((element, idx) => {
	return { value: element, index: idx };
});
// console.log(indexArr);

// Normalize data:
const users2 = [{ name: 'tanisah' }, { name: 'mim' }];
const normalizeArr = users2.map((user) => {
	return {
		...user,
		name: user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase(),
	};
});
// console.log(normalizeArr);

// formate phone numbers:
const phones = ['01640677464', '01375889524'];
const bdContact = phones.map((phone) => {
	return '+880' + phone.slice(1);
});
// console.log(bdContact);

// Extract emails:
const usersAll = [{ email: 'a@test.com' }, { email: 'b@test.com' }];
const emails = usersAll.map((user) => {
	return user.email;
});
// console.log(emails);

// add is adult fields:
const users32 = [
	{ name: 'A', age: 17 },
	{ name: 'B', age: 22 },
];
const newUsersAll = users32.map((user) => {
	return { ...user, isAdult: user.age >= 18 };
});
// console.log(newUsersAll);

// api response cleanup:
const data = [
	{ id: 1, title: '  hello ' },
	{ id: 2, title: ' world  ' },
];
const smoothData = data.map((eachElem) => {
	return { ...eachElem, title: eachElem.title.trim() };
});
// console.log(smoothData);

// currency conversion:
const pricesUSD = [10, 20, 30];
const priceBD = pricesUSD.map((amount) => {
	return amount * 110;
});
// console.log(priceBD);

// build UI list data:
const products = [{ id: 1, name: 'Phone', price: 1000 }];
const result = products.map((product) => {
	return { key: product.id, level: `${product.name}: ${product.price}` };
});
// console.log(result);

// ARRAY METHODS:
// map(), transformed array_UI rendering_API formatting => const doubled = arr.map(n => n * 2);
// filter(), matching items_searching_removing unwanted_filtering array => const even = arr.filter(n => n % 2 === 0);
// reduce(), calculate totals_analytics_counting_grouping => const total = arr.reduce((sum, n) => sum + n, 0);
// find(), first matching_login systems_product lookup_finding user => const user = arr.find(n => n.id === 2);
// findIndex(), first matching index_update/delete item_locate position => const index = arr.findIndex(n => n.id === 2);
// forEach(), Loop array_logging_side effects_no return => [1,2,3].forEach(n => {console.log(n)});
// some(), Check only one matches_permission checks_stock checks_validation => const hasEven = arr.some(n => n % 2 === 0);
// every(), Check all matches_all permissions checks_validation => const allEven = arr.every(n => n % 2 === 0);
// includes(), Check value exists_primitive values_tags_permissions => arr.includes("admin");
// toSorted(), ⭐ immutable sorting_Sort items => const sorted = arr.toSorted((a,b) => a - b);
// toReversed(), ⭐	immutable reverse => const reversed = [1,2,3].toReversed();
// slice(), Copy/extract array portion_pagination_copying arrays => arr.slice(1, 3);
// toSpliced(), ⭐	immutable splice_Modify original array => arr.splice(1, 2);
// concat(), Merge arrays => [1, 2].concat([3, 4]);
// flat(), Flatten nested arrays => const flatArr = [1, [2, 3]].flat();
// flatMap(), Map + flatten together => const flatMap = [1, 2].flatMap(n => [n, n * 2]);
// join(), Convert array to string. => const arrString = ["a", "b", "c"].join("-");
// at(), Access items using negative index => const position = arr.at(-1);

// STRING METHODS:
// includes(), Check text_search_keyword check_validation_filter => const search = str.includes("awesome");
// startsWith(), Check text in start_route check_file validation_URL check => const check = str.startsWith("Hello");
// endsWith(), ends check_image/file extensions_URL checking => const isFile = file.endsWith(".png");
// replace(), Replace first match_fixing text_URL slug cleanup_formatting => str.replace("World", "JavaScript");
// replaceAll(), replace all match_slug generation_cleanup_formatting =>  str.replaceAll("-", " ");
// split(), Convert string to array_CSV parsing_tokenizing_tags processing => str.split(",");
// slice(), Extract part of string_previews_trimming text_pagination => str.slice(0, 4);
// trim(), Remove spaces from both sides_form validation_login/email_cleanup =>  ("  dulon@gmail . com  ").trim();
// trimStart(), remove left spaces =>  ("  dulon@gmail . com  ").trimStart();
// trimEnd(), remove right spaces => ("  dulon@gmail . com  ").trimEnd();
// toLowerCase(), Convert to lowercase_search systems_email comparison_login systems => str.toLowerCase();
// toUpperCase(), Convert to uppercase => str.toUpperCase();
// match(), regex matching_validation_extracting patterns_searching numbers/emails =>  str.match(/\d+/);
// matchAll(), all regex matches_advanced parsing_extracting all patterns => ...str.matchAll(/\d/g);
// repeat(), Repeat string multiple times_formatting_loaders_patterns => "*".repeat(5);
// padStart(), Add characters at start =>  num.padStart(3, "0");
// padEnd(), Add characters at end =>  num.padEnd(3, "0");
// at(), Access character using negative index => str.at(-1);

// OBJECT METHODS:
// Object.keys(), object keys array_looping_dynamic forms_validation systems => Object.keys({name: "a", age: 30});
// Object.values(), object values array_analytics_chart systems_extracting data => Object.values({name: "a", age: 30});
// Object.entries(), object key-value pairs_looping_converting_rendering UI =>  Object.entries({name: "a", age: 30});
// Object.fromEntries(), array to object_transforming API_rebuilding_filtering object => Object.fromEntries(["name", "John"])
// Object.assign(), merge/copy objects_cloning_updating state_merging settings => const result = Object.assign({},obj1);
// update objects, => setUser({...user, name: "Updated"});
// Object.freeze(), immutable object_constants_app config_security sensitive data => Object.freeze({api: "/v1"});
// Object.seal(), Prevent adding/removing properti_controlled object structure_forms/settings => Object.seal({name: "John"});
// Object.hasOwn(), ⭐	Check if object has property_validation_checking safe properties => Object.hasOwn(user, "name");
// structuredClone(), ⭐	deep clone_React state_objects_avoiding mutation => const copy = structuredClone({name: "John"});

// MODERN OBJECT FEATURES:
// Object Destructuring, cleaner code => const { name: firstName, age } = {name: "John", age: 25};
// Array Destructuring, cleaner code => const [first, "", third] = ["red", "blue", "green"];
// Spread ..., Clone_merge_expand arrays/objects => const copyArr = [...arr1, ...arr2]; / const copyObj = [...obj1, ...obj2];
// Rest ..., collect remaining => const [first, ...rest] = arr; / const { password, ...safeUser } = user;
// Optional chaining ?., safe access => const city = obj?.address?.city;
// Nullish coalescing ??, default fallback_null/undefined_left true is true => const name = null ?? "allow" //output: allow
// Nullish coalescing ||, falsy values_left true is true => const money = 0 || 100 //output: 100
// Dynamic keys [], dynamic objects => const field = "email"; + const user = {[field]: "test@gmail.com"};

// JSON METHODS:
// JSON.stringify(), object to JSON => const jsonData = JSON.stringify({name: "John", age: 25});
// JSON.stringify(), JSON.stringify(value, replacer, space) =>  JSON.stringify(data, null, 2); // Pretty Formatting JSON
// JSON.parse(), JSON to object => const user = JSON.parse('{"name":"John","age":25}');

// NUMBER METHODS:
// Number(), convert value to number_form input conversion_API data conversion_calculations => const num = Number("100");
// Number(), convert value to number => const num = Number(true); //output: 1 // Number("hello"); //output: NaN
// parseInt(), Convert string to integer_removing decimals => parseInt("100"); // parseInt("99.99px");
// parseFloat(), Convert string to decimal number => parseFloat("99.99"); // parseFloat("12.5kg");
// toFixed(), Format decimal places_currency_finance_prices_percentages => 99.3654.toFixed(2);
// isNaN(), Check if value is NOT a valid number_form validation_validation => isNaN("hello"); //output: true
// Number.isInteger(), Check if number is integer_quantity check_pagination => Number.isInteger(10.5); //output: false

// MATH METHODS:
// Math.random(), Generate random decimal number_OTP_random colors => Math.floor(Math.random() * 10) + 1; // 1 to 10
// Math.random(), Generate random decimal number_OTP_random colors => Math.floor(1000 + Math.random() * 9000); // otp create
// Math.floor(), Round DOWN to nearest integer => Math.floor(4.9); //output: 4
// Math.ceil(), Round UP to nearest integer => Math.ceil(4.1); //output: 5
// Math.round(), Round to nearest integer => Math.round(4.4); //output: 4
// Math.max(), Get largest number => Math.max(5, 10, 2);
// Math.min(), Get smallest number => Math.min(...arrNumbers);
// Math.abs(), Get absolute positive value => Math.abs(-10); //output: 10

// DATE METHODS:
// Date.now(), Get current timestamp in miliseconds_unique IDs_timers_JWT expiration_analytics => const id = Date.now();
// new Date(), Create Date object_current time_date calculations_formatting_scheduling => const now = new Date();
// new Date(), Create Date object => const date = new Date("2026-01-01");
// toISOString(), API date format_Convert date to ISO string format_mongoDB_API => const now = new Date().toISOString();
// toLocaleDateString(), Display readable local date format_UI display => const now = new Date().toLocaleDateString("en-US");

// PROMISE & ASYNC METHODS:(pending -> fulfilled -> rejected):
// fetch(), make API request_frontend API calls_backend communication_external services =>
// fetch('https://jsonplaceholder.typicode.com/users')
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data);
// 	});
// async/await, async handling_cleaner API calls_readable backend code_database queries =>
// async function getUsers() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	const data = await res.json();
// 	console.log(data);
// }
// getUsers();
// Promise.all(), multiple async tasks IN PARALLEL_multiple API calls_dashboard data_loading many resources_Runs together ✅ faster =>
// const p1 = fetch('/api/users');
// const p2 = fetch('/api/products');
// Promise.all([p1, p2]).then((responses) => {
// 	console.log(responses);
// });

// const [users, products] = await Promise.all([
// 	fetch('/api/users'),
// 	fetch('/api/products'),
// ]);

// Promise.allSettled(), Wait for ALL promises_dashboards_analytics_independent API calls =>
// const promises = [Promise.resolve('Success'), Promise.reject('Failed')];
// Promise.allSettled(promises).then((results) => {
// 	console.log(results);
// });

// try/catch, Handle errors safely_API calls_database queries_authentication_preventing crashes =>
// try {
// 	const res = await fetch('/api/users');
// 	const data = await res.json();
// 	console.log(data);
// } catch (error) {
// 	console.log(error);
// }

// try {
// 	const res = await fetch('/api/users');
// 	const data = await res.json();
// 	console.log(data);
// } catch (error) {
// 	console.log(error);
// }

// SET & MAP:
// new Set([1, 1, 2]), Unique values only  => const unique = new Set([1,1,2]);
// new Map(), Better key-value storage => const map = new Map();

// MODULE SYSTEM:
// import	import, module => import {add, sub} from "./math.js"; // import {add as sum} from "./math.js";
// export	export, module => export const add = (a, b) => {return a + b;};
// export default, export	default => export default function getUser() {return "John";}

// REGEX METHODS: form validation_authentication_search systems_email validation:
// test(), true/false regex => "/hello/i".test("Hello World"); //output: true
// match(), matching => "My number is 123".match(/\d+/); //output: ["123"] || if not + //output: ["1", "2", "3"]
// replace(), regex replace => "Hello World".replace(/World/, "JavaScript"); //output: Hello javaScript

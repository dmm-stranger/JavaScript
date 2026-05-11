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
// Object.keys(), object keys =>
// Object.values(), values =>
// Object.entries(), key-value pairs =>
// Object.fromEntries(), array → object =>
// Object.assign(), merge objects =>
// Object.freeze(), immutable object =>
// Object.seal(), prevent add/remove =>
// Object.hasOwn(), ⭐	property check =>
// structuredClone(), ⭐	deep clone =>

// MODERN OBJECT FEATURES:
// Destructuring, xtract properties  =>
// Spread ..., clone/merge =>
// Rest ..., collect remaining =>
// Optional chaining ?., safe access =>
// Nullish coalescing ??, default fallback =>
// Dynamic keys [], dynamic objects =>

// JSON METHODS:
// JSON.stringify(), object to JSON =>
// JSON.parse(), JSON to object =>

// NUMBER METHODS:
// Number(), convert number =>
// parseInt(), integer parse =>
// parseFloat(), float parse =>
// toFixed(), decimal format ting =>
// isNaN(), check invalid number =>
// Number.isInteger(), integer check =>

// MATH METHODS:
// Math.random(), random =>
// Math.floor(), round down =>
// Math.ceil(), round up =>
// Math.round(), nearest =>
// Math.max(), max value =>
// Math.min(), min value =>
// Math.abs(), absolute =>

// DATE METHODS:
// Date.now(), timestamp =>
// new Date(), current date =>
// toISOString(), API date format =>
// toLocaleDateString(), display date =>

// PROMISE & ASYNC METHODS:
// fetch(), API request =>
// async/await, async handling =>
// Promise.all(), parallel tasks =>
// Promise.allSettled(), all results =>
// try/catch, error handling =>

// SET & MAP:
// new Set([1, 1, 2]), Unique values only  =>
// new Map(), Better key-value storage =>

// MODULE SYSTEM:
// import	import, module =>
// export	export, module =>
// export default, export	default =>

// MODERN ES2022–ES2026:
// at(), negative indexing  =>
// toSorted(), immutable sort =>
// toReversed(), immutable reverse =>
// toSpliced(), immutable splice =>
// structuredClone(), deep clone =>
// Top-level await, cleaner async =>
// Private class fields #, secure properties =>

// REGEX METHODS:
// test(), true/false regex =>
// match(), matching =>
// replace(), regex replace =>

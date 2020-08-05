//* Factorial Recursive
function factorial(num) {
	if (num === 1) return 1;
	while (num > 1) {
		return num * factorial(num - 1);
	}
}
//console.log(factorial(8));

// * Recursive Fibonacci

function fibonacciRecursive(num) {
	if (num <= 2) return 1;
	return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
//console.log(fibonacciRecursive(30));
//! fibonacci one line
const oneLineFibonacci = (num) =>
	num <= 2 ? 1 : oneLineFibonacci(num - 1) + oneLineFibonacci(num - 2);
// * Memoized fibonacci
let memo = { 1: 1, 2: 1 };
function fibonacci(num) {
	if (num in memo) return memo[num];

	memo[num] = fibonacci(num - 1) + fibonacci(num - 2);

	return memo[num];
}
//console.log(fibonacci(7));

//* Recusive Math.pow()

function Power(num, pow) {
	if (pow === 0) return 1;
	return num * Power(num, pow - 1);
}
//! One line Power
const OneLinePower = (num, pow) =>
	pow === 0 ? 1 : num * OneLinePower(num, pow - 1);
//console.log(Power(100, 10));
// *recursive Factorial repeated
function Factorial(num) {
	if (num === 0) return 1;
	return num * Factorial(num - 1);
}
//console.log(Factorial(8));

//*function ProductOfArray

function ProductOfArray(arr) {
	if (arr.length === 0) return 'empty array';
	if (arr.length === 1) return arr[0];
	return arr[0] * ProductOfArray(arr.slice(1));
}
//console.log(ProductOfArray([ 1, 2, 3, 4, 5 ]));

// * recursive range
function RecursiveRange(num) {
	if (num === 0) return 0;
	return num + RecursiveRange(num - 1);
}
//console.log(RecursiveRange(90))

//* fibonacci Recursive repeated
function Fibonacci(num) {
	if (num <= 2) return 1;
	return Fibonacci(num - 1) + Fibonacci(num - 2);
}
//console.log(Fibonacci(8));

//? Advanced Recursion Questions

//*helper string  reverse string

function Reverse(str) {
	let revStr = '';
	function helper(helperStr) {
		if (helperStr.length === 1) {
			revStr = revStr.concat(helperStr[0]);
			return;
		}
		revStr = revStr.concat(helperStr.slice(-1));
		helper(helperStr.slice(0, -1));
		//	console.log(helperStr);
	}
	helper(str);

	return revStr;
}
//console.log(Reverse('hello'));
//! Short Reverse
const reverse = (string) => string.split('').reverse().join('');

//* Pure Recursion Reverse

function pureReverse(str) {
	let revStr = '';
	if (str.length === 0) {
		return revStr;
	}
	revStr = revStr.concat(str.slice(-1));
	revStr = revStr.concat(pureReverse(str.slice(0, -1)));
	return revStr;
}
//console.log(pureReverse('hello'));

//* isPalindrome single line
const isPalindromeSingleLine = (str) =>
	str === str.split('').reverse().join('');
//* isPalindrome recursion
function isPalindrome(str) {
	if (str.length <= 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
	return false;
}
//console.log(isPalindrome("helloolleh"));
const isOdd = (num) => num % 2 !== 0;

//*somRecursive
function someRecursive(arr, callback) {
	if (arr.length === 0) {
		return 'empty array';
	}
	if (callback(arr[0])) {
		return true;
	}
	if (arr.length === 1) {
		return callback(arr[0]);
	}

	someRecursive(arr.slice(1), callback);
}
//console.log(someRecursive([1,3,4], isOdd));

//* flattenArray
let newarray = [];
function flatten(arr) {
	if (arr.length === 0) return;
	if (Array.isArray(arr[0])) {
		flatten([ ...arr[0], ...arr.slice(1) ]);
	}
	else {
		newarray.push(arr[0]);
		flatten(arr.slice(1));
	}
	return newarray;
}
console.log(flatten([1,[2,4,5,[[3],[[[[7,6]]]]]]]));
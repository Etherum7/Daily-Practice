//    1
'use strict';
function sameArr(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	let freqCounter1 = {};
	let freqCounter2 = {};
	for (let i of arr1) {
		freqCounter1[i] = (freqCounter1[i] || 0) + 1;
	}
	console.log(freqCounter1);
	for (let i of arr2) {
		freqCounter2[i] = (freqCounter2[i] || 0) + 1;
	}
	console.log(freqCounter2);
	for (let i of arr1) {
		if (!(i ** 2 in freqCounter2)) return false;
		if (freqCounter1[i] !== freqCounter2[i ** 2]) return false;
	}
	return true;
}
// console.log(sameArr([ 1, 2, 3 ], [ 4, 9, 1 ]));
// console.log(sameArr([ 1, 2, 1 ], [ 4, 4, 1 ]));
// console.log(sameArr([ 1, 2 ], [ 1 ]));
//    2
function checkAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	let freqCounter1 = {};
	let freqCounter2 = {};
	for (let i of str1) {
		freqCounter1[i] = (freqCounter1[i] || 0) + 1;
	}
	console.log(freqCounter1);
	for (let i of str2) {
		freqCounter2[i] = (freqCounter2[i] || 0) + 1;
	}
	console.log(freqCounter2);
	for (let i of str1) {
		if (!(i in freqCounter2)) return false;
		if (freqCounter1[i] !== freqCounter2[i]) return false;
	}
	return true;
}
// console.log(checkAnagram('aaz', 'zza'));
// console.log(checkAnagram('qwerty', 'wertyq'));
// console.log(checkAnagram('awesome', 'awesom'));
//    3
function sumZero(sortedArr) {
	if (sortedArr.length < 1) return undefined;
	let [ i, j ] = [ 0, sortedArr.length - 1 ];

	while (i < j) {
		if (sortedArr[i] + sortedArr[j] > 0) {
			j -= 1;
		}
		else if (sortedArr[i] + sortedArr[j] < 0) {
			i += 1;
		}
		else return [ sortedArr[i], sortedArr[j] ];
	}
	return undefined;
}
// console.log(sumZero([ -1, 0, 1,2 ]));
// console.log(sumZero([ 0, 1 ]));
// console.log(sumZero([ 0 ]));
// console.log(sumZero([ -3, -2, 0, 1, 2, 3 ]));
//    4
function countUniqueValue(sortedArr) {
	switch (sortedArr.length) {
		case 0:
			return 'empty array';

		case 1:
			return 1;

		default:
			let [ first, second ] = [ 0, 1 ];

			while (second <= sortedArr.length - 1) {
				if (sortedArr[first] === sortedArr[second]) {
					second += 1;
				}
				else {
					first = first + 1;
					// if we have 1,2,3 then we replace  same value by same number
					sortedArr[first] = sortedArr[second];
					second += 1;
				}
			}
			return first + 1;
	}
}
// console.log(countUniqueValue([ -1, 0, 1, 1, 2, 3, 5, 6 ]));
// console.log(countUniqueValue([ 0, 1, 6, 90 ]));
// console.log(countUniqueValue([]));

//   5 slidingWindow
function maxSum(arr, num) {
	if (arr.length < num) return 'Array length is less than minimum required';
	let temp = 0;
	for (let i = 0; i < num; i++) {
		temp += arr[i];
	}
	let max = temp;
	for (let j = num; j < arr.length; j++) {
		temp = temp - arr[j - num] + arr[j];
		if (max < temp) max = temp;
	}
	return max;
}
// console.log(maxSum([ -1, 0, 1, 1, 2, 3, 5, 6 ], 3));
// console.log(maxSum([ 0, 1, 6, 90 ], 2));
// console.log(maxSum([ -2, -3, 90, 1000, -232, 10000 ], 3));
// console.log(maxSum([ -2, -3, 90, 1000, -232, 10000 ], 8));

// 6 sortNamesByLength also executing POLE
// sortNamesByLength([
//     "Sally",
//     "Suzy",
//     "Frank",
//     "John",
//     "Jennifer",
//     "Scott"
// ]);
// [ "John", "Suzy", "Frank", "Sally",
//   "Scott", "Jennifer" ]

function sortNamesByLength(arr) {
	var pureBuckets = [];
	if (arr.length == 0) return 'empty array';
	{
		let buckets = [];
		//[['scott', 'frank'],['franky', 'scitty']];
		for (let name of arr) {
			if (buckets[name.length] == null) {
				buckets[name.length] = [];
			}
			buckets[name.length].push(name);
		}

		for (let bucket of buckets) {
			if (bucket) {
				pureBuckets.push(bucket);
			}
		}
	}
	{
		let sortedNames = [];
		for (let bucket of pureBuckets) {
			sortedNames.push(...bucket.sort().map((name) => name));
		}
		return sortedNames;
	}
}
// console.log(
// 	sortNamesByLength([ 'Sally', 'Suzy', 'Frank', 'John', 'Jennifer', 'Scott' ])
// );
// console.log(sortNamesByLength([]));
//'Fira Code iScript', 'Fira Code',

// 6 Divide And conquer Searchong in an array
function binarySearch(arr, num) {
	if (arr.length === 0) return 'empty array';
	if (arr.length === 1 && arr[0] === num) return 0;
	let [ first, last ] = [ 0, arr.length - 1 ];
	if (arr[last] === num) return last;

	while (first < last) {
		let middle = Math.floor((first + last) / 2);
		if (num > arr[middle]) {
			first = middle;
		}
		else if (num < arr[middle]) {
			last = middle;
		}
		else if (num === arr[middle]) return middle;
	}

	return -1;
}
console.log(binarySearch([ -1, 0, 1, 1, 2, 3, 5, 6 ], 5));
console.log(binarySearch([ 0, 1, 6, 90 ], 0));
console.log(binarySearch([ -2, -3, 90, 1000, -232, 10000 ], 90));
console.log(binarySearch([ -2, -3, 90, 1000, -232, 10000 ], 10000));

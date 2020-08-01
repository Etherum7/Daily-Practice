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
	//if (arr[last] === num) return last;
	//or

	while (first <= last) {
		let middle = Math.floor((first + last) / 2);
		if (num > arr[middle]) {
			first = middle + 1;
		}
		else if (num < arr[middle]) {
			last = middle - 1;
		}
		else return middle;
	}

	return -1;
}
// console.log(binarySearch([ -1, 0, 1, 1, 2, 3, 5, 6 ], 5));
// console.log(binarySearch([ 0, 1, 6, 90 ], 0));
// console.log(binarySearch([ -2, -3, 90, 1000, -232, 10000 ], 90));
// console.log(binarySearch([ -2, -3, 90, 1000, -232, 10000 ], 10000));

// 7 areThereDuplicates by frequencyCounter
function areThereDuplicates(...args) {
	let counter = {};
	for (let i of args) {
		counter[i] = (counter[i] || 0) + 1;
		if (counter[i] > 1) return true;
	}
	return false;
}
//console.log(areThereDuplicates(1, 2, 3, 2));
// 8 areThereDuplicates by multiplePointer
function areThereDuplicates1(...args) {
	args = args.sort((a, b) => a - b);
	let [ i, j ] = [ 0, 1 ];
	while (j < args.length) {
		if (args[i] !== args[j]) {
			i++;
			j++;
		}
		else {
			return true;
		}
	}
	return false;
}

//console.log(areThereDuplicates());

// 9 averagePair by multiple Pointer
function averagePair(arr, num) {
	//arr is sorted
	let [ i, j ] = [ 0, arr.length - 1 ];
	while (i < j) {
		let average = (arr[i] + arr[j]) / 2;
		if (average < num) {
			i++;
		}
		else if (average > num) {
			j--;
		}
		else {
			return num !== undefined;
		}
	}
	return false;
}
//console.log(averagePair([1,2,3],2));
// 10 is Subsequence Multiple Pointer
function isSubsequence(str1, str2) {
	let ptr1 = 0;
	let ptr2 = 0;
	while (ptr2 < str2.length) {
		if (str1[ptr1] === str2[ptr2]) {
			ptr1 += 1;
			ptr2 += 1;
		}
		else {
			ptr2 += 1;
		}
	}
	if (ptr1 === str1.length && ptr1 !== 0) {
		return true;
	}
	return false;
}
//console.log(isSubsequence('hel', 'hello'));
//* 11 maxSubArraySum sliding Window
function maxSubArraySum(arr, num) {
	if (num === 0 || arr.length < num) return 0;
	let temp = 0;
	let [ first, second ] = [ 0, num ];
	for (let i = 0; i < num; i++) {
		temp += arr[i];
	}
	let max = temp;
	let i;
	while (second < arr.length) {
		temp = temp + arr[second] - arr[first];
		first++;
		if (temp > max) {
			i = first;
			max = temp;
		}

		second++;
		// console.log(i, 'i');
		// console.log(temp, 'temp');
		// console.log(max, 'max');
	}
	return arr.slice(i, i + num);
}
// console.log(maxSubArraySum([], 9));

//TODO: Optimizations 12 LongestSubstringWithUniqueCharecters returns length
function findLongestSubstring(str) {
	if (str.length > 0) {
		let [ first, second ] = [ 0, 1 ];
		let subStr = str[first];
		let subStrLen = 1;
		while (second < str.length) {
			if (!subStr.includes(str[second])) {
				subStr = subStr.concat(str[second]);
				subStrLen =
					subStr.length > subStrLen ? subStr.length : subStrLen;
			}
			else {
				subStr = subStr
					.slice(subStr.indexOf(str[second]) + 1)
					.concat(str[second]);
				first++;
			}
			second++;
			console.log(subStr);
		}
		return subStrLen;
	}
}
//console.log(findLongestSubstring('thisishowwedoit'));
// *12 minSubArrayLen slidingWindow
// ! My Code 😢🤣 4 ghante mehnet karne ke liye thanks vasudev shri vishnu.
// function minSubArrayLen(arr, num) {
// 	//    if(arr.length===1 && arr[0]>=num) return 1;
// 	//    else return

// 	if (arr.includes(num)) return 1;
// 	if (arr.length > 1) {
// 		let [ first, second ] = [ 0, 1 ];
// 		let initSum = arr[0];
// 		while (initSum < num && second < arr.length) {
// 			initSum += arr[second];
// 			if (initSum < num) {
// 				second++;
// 			}
// 		}
// 		if (initSum<num) {
// 			return 'Not Possible';
// 		}
// 		let minLen = second + 1;
// 		while (second < arr.length) {
// 			if (initSum - arr[first] >= num) {
// 				initSum = initSum - arr[first];
// 				first++;
// 				minLen = minLen - 1;
// 			}
// 			else {
// 				initSum = initSum - arr[first] + arr[second];
// 				if (initSum >= num) {
// 					// && second - first + 1 <= minLen
// 					//minLen = second - first + 1;
// 					first++;
// 					second++;
// 				}
// 				else {
// 					second++;
// 				}
// 			}
// 			//console.log(minLen)
// 		}

// 		return minLen;
// 	}
// 	else if (arr[0] >= num) {
// 		return 1;
// 	}
// 	else if (arr[0] < num) {
// 		return 'Nothing';
// 	}
// 	else {
// 		return 'empty array';
// 	}
// }
// console.log(minSubArrayLen([ 1, 3, 7, 4, 2, 7, 10 ], 5));

//*12 minSubArrayLen sliding Window
minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([ 1, 3, 7, 4, 2, 7, 10 ], 5));
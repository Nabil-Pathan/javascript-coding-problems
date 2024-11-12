// Two Sum problem 

function twoSum(arr, target) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const nextElement = arr[i + 1];
        const sum = element + nextElement;
        if (sum === target) {
            result.push(i, i + 1)
        }
    }
    return result
}

// const outPut = twoSum([2, 7, 11, 15], 18)
// console.log(outPut)


function lengthOfLongestSubstring(s) {
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        const map = {}
        for (let j = i; j < s.length; j++) {
            if (map[s.charAt(j)] != undefined) {
                break;
            }
            else {
                map[s.charAt(j)] = 1;
                let len = j - i + 1;
                maxLength = Math.max(len, maxLength);
            }
        }
    }
    return maxLength
}

// console.log(lengthOfLongestSubstring("abcabcbb"));

// Count repeated Items in string


// Remove Duplicates

// const arr = [1, 2, 2, 3, 4, 4, 5]

function removeDuplicates(arr) {
    const coutMap = {}
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        if (coutMap[currentValue] > 0) {
            continue;
        }
        else {
            coutMap[currentValue] = 1;
            result.push(arr[i]);
        }
    }
    return result
}

// console.log(removeDuplicates(arr));



// const twoDArray = [
//     [1, 2,],
//     [2, 1],
//     [3 , 2],
//     [4,1],
//     [5, 3]
// ];

// const result = twoDArray.sort((a,b)=>{
//     return b[1] - a[1]
// }).flatMap((num)=>{
//     return num[0];
// })

// console.log(result);


function firstNonRepeatingCharacter(str) {
    const count = {}

    for (let char of str) {
        count[char] = (count[char] || 0) + 1
    }

    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }
    return null
}

// console.log(firstNonRepeatingCharacter("swiss"));

function findCommonElements(arr1, arr2) {
    const result = []

    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i]
        if (arr2.includes(element) && !result.includes(element)) {
            result.push(element);
        }

    }
    return result
}

// console.log(findCommonElements([1, 2, 3], [3, 4, 5]));


function moveZerosToEnd(arr) {
    let nonZeros = arr.filter((num) => num !== 0);
    let zeros = arr.filter((num) => num === 0);
    return [...nonZeros, ...zeros]
}
// console.log(moveZerosToEnd([0, 1, 0, 3, 12]));

function areAngrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const frequency1 = {}
    const frequency2 = {}

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1[i];
        const char2 = str2[i];
        frequency1[char1] = (frequency1[char1] || 0) + 1
        frequency2[char2] = (frequency2[char2] || 0) + 1
    }

    // Compare both the maps

    for (let char in frequency1) {
        if (frequency1[char] !== frequency2[char]) {
            return false
        }
    }

    return true

}

// console.log(areAngrams("listen", "silent")); // Output: true
// console.log(areAngrams("hello", "world")); // Output: false

function removeVowels(str) {
    const vowels = "aeiouAEIOU";

    let result = ""

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (vowels.indexOf(char) === -1) {
            result += char;
        }
    }
    return result
}

// console.log(removeVowels("Hello World")); // Output: "Hll Wrld"
// console.log(removeVowels("JavaScript is fun")); // Output: "JvScrpt s fn"


function findLongestWord(str) {
    const strArray = str.split(" ");

    let longestString = strArray[0];

    for (let i = 0; i < strArray.length; i++) {
        const word = strArray[i];

        if (word.length > longestString.length) {
            longestString = word;
        }
    }

    return longestString
}


// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord("JavaScript is fun")); // Output: "JavaScript"
// console.log(findLongestWord("So Hey Everyone this is Nabil Khan and I am a FullStackDeveloper")); // Output: "JavaScript"


function mergeTwoSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = []

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }


    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }
    return result
}

// console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeTwoSortedArrays([1, 3, 5], [])); // Output: [1, 3, 5]



function secondLargest(arr) {
    let largest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > largest) {
            secondLargest = largest
            largest = element
        }
        else if(element > secondLargest && element !== largest) {
            secondLargest = element
        }
    }
    return secondLargest
}

// console.log(secondLargest([1, 3, 7, 2, 5]));


function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
        sum += Math.floor(num % 10);
        num = num / 10;
    }
    return sum;
}

// console.log(sumOfDigits(123));

function removeVowels(str) {
    let result = '';
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result
}

// console.log(removeVowels("hello world"));


// Find the frequency of elements in array

// 1. Using Reduce Method


let arr = ["hello", "how", "hello", "are", "you", "hello", "how", "are"]


// let result = arr.reduce((acc,ele)=>{
//      if(acc[ele] > 0){
//         acc[ele]++;
//      }
//      else {
//         acc[ele] = 1;
//      }
//      return acc;
// },{})

// console.log(result);



// 2. Group items on the basis of age of given array of object


let peoples = [
    { name: "Alice", age: 20 },
    { name: "Max", age: 21 },
    { name: "Jane", age: 18 },
    { name: "John", age: 20 },
    { name: "Tony", age: 21 },
    { name: "Stark", age: 18 },
]

let check = {}

peoples.forEach((people) => {
    if (!check[people.age]) {
        check[people.age] = [people]
    }
    else {
        check[people.age].push(people);
    }
})

// console.log(check);


const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 }
const input2 = { a: 3, e: 12, f: 6, d: 10 }

// output : comman key as well as its comman values {d : 10 , e : 12} order is important 

// First Approach

function commanElementsInObjects(input1, input2) {
    let result = {}
    for (let i in input1) {
        if (input1[i] === input2[i]) {
            result[i] = input1[i]
        }
    }
    return result
}
// console.log(commanElementsInObjects(input1,input2));



// for (const key in input2) {
//     if (input1.hasOwnProperty(key) && input1[key] === input2[key]) {
//         result[key] = input2[key];
//     }
// }

// console.log(result); // Output: { d: 10, e: 12 }


// const arr1 = [1,2,-2,11,7,1];
// const arr2 = [1,4,7,2,4,7]

// function secondLargest(input){
//     let result = [...new Set(input)].sort((a,b)=> a-b)
//     return result[result.length - 2]
// }
// console.log(secondLargest(arr1));
// console.log(secondLargest(arr2));

// Rotate the array

// const input  = [2,7,11,4,-2]
// const outPut = [11,4,-2,2,7,]

function rotateArrayByK(input, k) {
    let result = input.slice(k).concat(input.slice(0, k))
    return result
}

function rotateArrayByK2(input, k) {
    let result = []

    for (let i = k; i < input.length; i++) {
        result.push(input[i]);
    }

    for (let i = 0; i < k; i++) {
        result.push(input[i])
    }
    return result
}
// console.log(rotateArrayByK(input,2));

const input = [2, 7, 11, 4, -2]
// Sum of all other elements expect the current one 
// const output = [20 ,15 , 11 ,18 ,24]


const totalSum = input.reduce((acc, num) => {
    return acc + num
}, 0)

// const result = input.map((num)=>{
//     return totalSum - num
// })

// console.log(result);

const str = "This is javascript Code and you to find max char"

// const result = str.split(" ").map((s)=>{
//     return s.split('').reverse().join('')
// }).join(" ")

// console.log(result);


function findMaximumChar(str) {
    const charMap = {}
    let maxChar = ''
    let maxCount = 0

    for (let char of str) {
        if (char !== ' ') {
            charMap[char] = (charMap[char] || 0) + 1
            if (charMap[char] > maxCount) {
                maxCount = charMap[char];
                maxChar = char
            }
        }
    }
    return maxChar
}

// console.log(findMaximumChar(str));


function mostFrequentChar(arr) {
    const mapping = arr.reduce((acc, ele) => {
        acc[ele] = acc[ele] ? acc[ele] + 1 : 1
        return acc
    }, {})

    return Object.entries(mapping).reduce((acc, ele) => {
        return ele[1] > acc[1] ? ele : acc
    }, [null, 0])[0]
}

// console.log(mostFrequentChar(["a","a","b","c","d","a","c","e"]));


const users = [
    {
        id: 1,
        name: "user1",
        isActive: true
    },
    {
        id: 2,
        name: "user2",
        isActive: false
    }, {
        id: 3,
        name: "user3",
        isActive: true
    },
]

// const result = users.reduce((acc,ele)=>{
//     acc.push(ele.name);
//     return acc
// },[])

// console.log(result);

const strings = ["nabil", "khan", "pathan", "coder"]

const result = strings.reduce((acc, str) => {
    // const upperStr = str[0].toUpperCase().concat(str.split('').slice(1).join(''))
    const upperStr = str[0].toUpperCase() + str.slice(1)
    acc.push(upperStr);
    return acc
}, [])

// console.log(result);

const sentence = "hello world this is a test";

let resultStr = ""

// const capitlize = sentence.split(' ').map((str)=>{
//     const upperStr = str[0].toUpperCase().concat(str.split('').slice(1).join(''))
//     resultStr += upperStr 
// }).join(' ')


// const capitalizedSentence = sentence
//   .split(' ')
//   .map((str) => str[0].toUpperCase() + str.slice(1))
//   .join(' ');

const fruits = ["apple", "banana", "apple", "orange", "banana"];

const resultFruits = fruits.reduce((acc, ele) => {
    if (!acc.includes(ele)) {
        acc.push(ele)
    }
    return acc
}, [])

// console.log(resultFruits);


const sentence1 = "The quick brown fox jumped over the lazy dog";

let longestWord = ""

let maxLength = 0

sentence1.split(' ').forEach((str) => {
    if (str.length > maxLength) {
        maxLength = str.length;
        longestWord = str
    }
})

// console.log(longestWord);

const sentence3 = "apple orange banana apple apple orange banana";

let mostFrequentWord = ""

let wordCount = {}

sentence3.split(" ").forEach((str) => {
    if (wordCount[str]) {
        wordCount[str] += 1;
    }
    else {
        wordCount[str] = 1
    }
})


let maxCount = 0

for (let word in wordCount) {
    if (wordCount[word] > maxCount) {
        maxCount = wordCount[word]
        mostFrequentWord = word
    }
}

// console.log(mostFrequentWord);

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const numsMap = {}

const duplicates = []

nums.forEach((num) => {
    if (numsMap[num]) {
        duplicates.push(num)
    }
    else {
        numsMap[num] = 1
    }
})
// console.log(duplicates);


function productOfArrayExpectSelf(arr) {
    const totalProduct = arr.reduce((acc, num) => {
        return acc * num
    })

    const result = arr.map((num) => {
        return totalProduct / num
    })

    return result
}

const nums1 = [1, 2, 3, 4];

// console.log(productOfArrayExpectSelf(nums1));


function rotateArray(nums, steps) {
    let slicedArray = nums.slice(-steps).concat(nums.slice(0, steps + 1))
    return slicedArray
}


// console.log(
//  rotateArray([1,2,3,4,5,6,7], 3)) // Output: [5,6,7,1,2,3,4]


function isValidParentheses(str) {
    let strArray = str.split("")

    const matchingPairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    let stack = []

    for (let char of strArray) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        }
        else if (char === ")" || char === "}" || char === "]") {
            if (stack.length === 0 || stack.pop() !== matchingPairs[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}

// console.log(isValidParentheses("()[]{}"))// Output: true
// console.log(isValidParentheses("(]"))// Output: false





function stockBuySell(arr) {
    let minPrice = Infinity
    let maxProfit = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minPrice) {
            minPrice = arr[i]
        }

        let currProfit = arr[i] - minPrice

        if (maxProfit < currProfit) {
            maxProfit = currProfit
        }
    }
    return maxProfit
}


// console.log(stockBuySell([7,1,5,3,6,4]));

function maxSumSubArray(arr) {
    let currSum = arr[0]
    let maxSum = arr[0]

    for (let i = 0; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);

        maxSum = Math.max(currSum, maxSum)
    }

    return maxSum
}

// console.log(maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4]));





function containesNearByDuplicates(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k) {
                return true
            }
        }

        map.set(nums[i], i)
    }
    return false
}

// console.log(containesNearByDuplicates([1,2,3,1,2,3],2));
// console.log(containesNearByDuplicates([1,2,3,1],3));
// console.log(containesNearByDuplicates([1,0,1,1],1));

function nextGraterElement(nums1, nums2) {
    let map = new Map()
    let result = []

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) continue

        let nextGreater = -1
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[j] > nums2[i]) {
                nextGreater = nums2[j]
                break
            }
        }
        map.set(nums2[i], nextGreater)
    }


    for (let num of nums1) {
        result.push(map.get(num))
    }
    return result
}

// console.log(nextGraterElement([4,1,2],[1,3,4,2]));
// console.log(nextGraterElement([2,4],[1,2,3,4]));

function searchInRotatedSortedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) return mid

        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }

        else {
            if (arr[mid] <= target && target <= arr[right]) {
                left = mid + 1
            }
            else {
                right = mid - 1
            }    
        }
    }

    return -1;

}

// console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2],3));

function searchRange(arr , target){
    let left = 0
    let right = arr.length - 1
    let result = [-1 ,-1]

    if(arr.length === 0) return result

    while(left < right){
        let mid = Math.floor((left + right) /2)

        if(arr[mid] >= target){
            right = mid
        }
        else{
            left = mid + 1
        }
    }
    if(arr[left] !== target){
        return result
    }

    result[0] = left

    right = arr.length -1

    while(left < right){
        let mid = Math.floor((left + right) /2) + 1

        if(arr[mid] > target){
            right= mid - 1
        }
        else{
            left = mid 
        }
    }
    result[1] =  right
    return result
}

// console.log(searchRange([5,7,7,8,8,10],8));


function findRelativeRanks(score){
    let n = score.length;
    let result = []
    let rankMap = new Map();

    let sortedScore = [...score].sort((a,b)=> b - a)

    for (let i = 0; i < n; i++) {
        if(i === 0){
            rankMap.set(sortedScore[i], "Gold Medal");
        }
        else if(i === 1){
            rankMap.set(sortedScore[i], "Silver Medal");
        }
        else if(i === 2){
            rankMap.set(sortedScore[i], "Bronze Medal");
        }
        else{
            rankMap.set(sortedScore[i], (i+1).toString())
        }
    }

    for(let i =0 ; i<n ; i++){
        result.push(rankMap.get(score[i]))
    }
    return result
}

// console.log(findRelativeRanks([5,4,3,2,1]));
// console.log(findRelativeRanks([10,3,8,9,4]));


// Using Division operator 
// function productOfArrayExpectSelf(arr){
//     let totalProduct = 1
//     let result = []

//     for(let num of arr){
//         totalProduct = totalProduct * num
//     }

//     for(let num of arr){
//         result.push(totalProduct/num)
//     }

//     return result
// }


function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // Step 1: Calculate left product for each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;  // store the product of  to elementsthe left of index i
        leftProduct *= nums[i];   // update leftProduct for the next element
    }

    // Step 2: Calculate right product for each element and multiply with the left product
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct; // multiply the stored left product with the right product
        rightProduct *= nums[i];   // update rightProduct for the next element
    }

    return answer;
}

// console.log(productExceptSelf([1,2,3,4]));

function subarraySum(arr, k){
    let count = 0;
    let n = arr.length;

    for(let i =0 ; i< n ; i++){
        let currentSum = 0;

        for (let j = i; j < n; j++) {
            currentSum += arr[j]

            if(currentSum === k){
                count ++;
            }
        }
    }
    return count
}

// console.log(subarraySum([1,1,1],2));


function findTheDifference(s ,t){
    let charCount = new Map()

    for(let char of s){
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    for(let char of t){
        charCount.set(char, (charCount.get(char) || 0) - 1)

        if(charCount.get(char) < 0){
            return char
        }
    }

    return ' ';
}

// console.log(findTheDifference("abcd", "abcde"));

function numIdenticalPairs (arr){
    let countMap = new Map()
    
    let pairs = 0

    for(let num of arr){
        countMap.set(num , (countMap.get(num) || 0) + 1);
    }

    let values = countMap.values()

    for(let val of values){
        let currentNumPair = 0
        if(val > 1){
            currentNumPair =  val * (val - 1) / 2
            pairs += currentNumPair 
        }
    }

    return pairs
    
}

// console.log(numIdenticalPairs([1,2,3,1,1,3]));
// console.log(numIdenticalPairs([1,1,1,1]));


function maximumWealth(accounts){
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let currWealth = 0;
        for (let j = 0; j <  accounts[i].length ; j++) {
            currWealth += accounts[i][j]
        }
        maxWealth = Math.max(maxWealth,currWealth)
    }

    return maxWealth
}

// console.log(maximumWealth([[1,2,3],[3,2,1]]));
// console.log(maximumWealth([[1,5],[7,3],[3,5]]));



function findWords (words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    let result = []

    for(let word of words){
        let currentWord = word.toLowerCase();
        let row;
        if(row1.has(currentWord[0])){
            row = row1
        }

        else if(row2.has(currentWord[0])){
            row = row2
        }
        else if(row3.has(currentWord[0])){
            row = row3
        }
        if([...currentWord].every(char => row.has(char))){
            result.push(word)
        }
    }
    return result
}

// console.log(findWords(["Hello","Alaska","Dad","Peace"]));
// console.log(findWords(["adsdf","sfd"]));


function findMaxConsecutiveOnes(nums){
    let maxCount = 0;
    let currentCount = 0;


    for(let num of nums){
        if(num === 1){
            currentCount ++;
        }
        else{
            maxCount = Math.max(currentCount, maxCount)
            currentCount = 0;
        }
    }
    maxCount = Math.max(currentCount,maxCount)
    return maxCount
}

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
// console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));

function minElement (arr){
    let min = Number.MAX_VALUE;

    for(let num of arr){
        let currSum = 0;
        while(num !== 0){
            let digit = num % 10;
            currSum+=digit;
            num = Math.floor(num / 10);
        }
        
        if(currSum < min){
            min = currSum
        }
    }

    return min
}

// console.log(minElement([10,12,13,14]));

function stableMountains (height , threshold){

    if(height.length < 2){
        return []
    }

    let result = []

    for (let i = 0; i < height.length; i++) {
        if(i > 0){
            let prev = height[i-1];
            if(prev > threshold){
                result.push(i);
            }
        }
    }
    return result
}
// console.log(stableMountains([1,2,3,4,5], 2));
// console.log(stableMountains([10,1,10,1,10],3));
// console.log(stableMountains([10,1,10,1,10],10));


function getSneakyNumbers (arr){
    let numMap = new Map();
    let result = []

    for(let num of arr){
        numMap.set(num , (numMap.get(num) || 0) + 1);
    }

    for(let num of arr){
        if(numMap.get(num) > 1){
            result.push(num)

            if(result.length === 2){
                break;
            }
        }
    }
    return result
}
// console.log(getSneakyNumbers([0,1,1,0]));
// console.log(getSneakyNumbers([0,3,2,1,3,2]));



function rotate(matrix){
    const n = matrix.length;
    let result_matrix = Array.from({length : n}, ()=> Array(n).fill(0))

    for(let i = 0 ;i<n ;i++){
        for(let j = 0 ; j<n ; j++){
            result_matrix[j][n-1-i] = matrix[i][j];
        }
    }
    return result_matrix
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// console.log(rotate(matrix));

// const x = (4,6,5)
// console.log('x : ', x);

// var abc ;

// function abc (){

// }

// console.log(abc);

// var abc = 100
// let xyz = 200
// console.log(window.abc)
// console.log(window.xyz);


// function abc (n1 , n2){
//     "use strict"
//     n1 = 300
//     n2 = 400
//     return arguments[0] + arguments[1]
// }

// console.log(abc(100,200));

// "use strict"

// {
//     function abc (){
//         console.log("abc");
//     }
// }


// abc()

// class abc {

// }

// console.log(typeof abc);

// const abc = 10 + isNaN(2) ? 100 : 200

// console.log(abc);


// console.log(10 == 10); // true
// console.log(10 == 10 == 10); // false
// console.log(10 == 10 == 10 == 0); // true



// console.log([] == [])
// console.log([] == '')

// const  arr = [2,5,1,3,6,7,4]
// arr.sort((a,b)=>  a - b)

// console.log(arr);


// const arr = [[5,6], [4,3]] // [5,6,4,3] without using in built functions

// function flatarray (arr){
//     let result = []

//     for(let ele of arr){
//         if(Array.isArray(ele)){
//             result = result.concat(flatarray(ele))
//         }
//         else{
//             result.push(ele)
//         }
//     }

//     return result
// }


// console.log(flatarray(arr));



// const arr = [1,2,3]

// delete arr[1]

// console.log(arr);

// console.log(arr.length);

function maxDifference(arr) {
    let maxDiff = -1

    let minElement = arr[0]

    let length = arr.length - 1

    for (let i = 0; i < length; i++) {
        if (arr[i] > minElement) {
            maxDiff = Math.max(maxDiff, arr[i] - minElement)
        }
        minElement = Math.min(minElement, arr[i])
    }
    return maxDiff
}

// console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]));  // Output: 8

let str = "sdkjksdjkjldjlkjfldfld"


function countCharFrequency(str) {
    let countMap = {}
    str.split("").map((char) => {
        if (countMap[char]) {
            countMap[char]++
        }
        else {
            countMap[char] = 1
        }
    })

    return countMap
}

// console.log(countCharFrequency(str));

// Infinite Currying 
const sum = (a) => {
    const inner = (b) => {
        if (b === undefined) return a;
        return sum(a + b)
    }

    inner.toString = () => a
    return inner
}

// console.log(sum(2)(4)(6)());

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

// console.log(Object.entries(obj));

// const weakMap = new WeakMap()
// const person1 = { name : "Nabil"}
// weakMap.set(person1,"Developer")
// console.log(weakMap.get(person1));


const original = {
    name: 'Alice',
    details: {
        age: 25,
        city: 'New York'
    }
};

// Shallow copy using Object.assign or spread operator
const shallowCopy = { ...original };

const deepCopy = structuredClone(original)

// Modify the nested object in the shallow copy
//   shallowCopy.name = "Nabil";
//   shallowCopy.details.age = 21;

deepCopy.name = "Nabil";
deepCopy.details.age = 21;


// console.log(original.name); // Output: 30 (original object is also affected)
// console.log(original.details.age);


function findLongestWord(str) {
    const strArray = str.split(' ')
    let longestStringLength = strArray[0].length
    let longestString = ""

    for (let s of strArray) {
        if (s.length > longestStringLength) {
            longestStringLength = s.length;
            longestString = s
        }
    }
    return longestString
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

function findPairs(arr , target){
    let result = []
    for(let i =0 ; i < arr.length ; i++){
        for(let j = i+1 ; j< arr.length ; j++){
            if(arr[i] + arr[j] === target){
                result.push([arr[i] , arr[j]])
            }
        }
    }
    return result
}

// console.log(findPairs([1, 2, 3, 4, 5], 5));

function rotateArray (arr , n){
    const result = arr.slice(-n).concat(arr.slice(0,n+1))
    return result
}


// console.log(rotateArray([1, 2, 3, 4, 5], 2));

function hasUniqueCharacters (str){
    const charMap = {}
    const charArray = str.split('') 
    for (let char of charArray){
        if(charMap[char] > 0){
            return false
        }
        else{
            charMap[char] = 1
        }
    }
    return true
}

// console.log(hasUniqueCharacters('abcdef'));
// console.log(hasUniqueCharacters('hello'));


function flatten(arr){
    let result = []
    for(let ele of arr){
        if(Array.isArray(ele)){
            result = result.concat(flatten(ele))
        }
        else{
            result.push(ele)
        }
    }
    return result
}


// console.log(flatten([1, [2, [3, 4], 5], 6]));

function areAnagrams (str1 , str2){
    if(str1.length !== str2.length){
        return false
    }

    const sortedStr1 = str1.split('').sort().join('')
    const sortedStr2 = str2.split('').sort().join('')

    return sortedStr1 === sortedStr2
}

// console.log(areAnagrams('listen', 'silent'));
 
// console.log(areAnagrams('hello', 'world'));

function top3Words (str){
    const countMap = {}
    const strArray = str.split(' ')

    for(let s of strArray){
        if(countMap[s]){
            countMap[s]++
        }
        else{
            countMap[s] = 1
        }
    }

    return Object.entries(countMap).sort((a ,b)=> b[1] - a [1]).slice(0,3).map((entry)=> entry[0])
}

// const mystr = "hello world hello everyone world world hello";
// console.log(top3Words(mystr)); 
// Output: ['hello', 'world', 'everyone']

function arrayToObject(arr){
    let result = arr.reduce((acc,ele)=>{
        acc[ele.id] = {name : ele.name}
        return acc
    }, {})

    return result
}


const people = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
  
// console.log(arrayToObject(people, 'id'))


  // Output: { 1: {name: "Alice"}, 2: {name: "Bob"}, 3: {name: "Charlie"} }

//   First Approach

//   function sumOfMultiples(n) {
//         let sum = 0
//         for(let i =0 ; i<n ; i++){
//             if(i % 3 === 0 || i % 5 == 0){
//                 sum += i;
//             }
//         }
//         return sum
// }

// Second Approach

function sumOfMultiples(n){
    let multiples = new Set()

    for(let i = 3 ; i<n ; i+=3){
        multiples.add(i);
    }
    
    for(let i = 5 ; i<n ; i+=5){
        multiples.add(i);
    }

    let sum = 0;

    for(let num of multiples){
        sum += num
    }
    return sum
}

// console.log(sumOfMultiples(10));

function subArraySumEqualsK(arr ,k){
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i ; j < arr.length; j++) {
            sum += arr[j]

            if(sum === k){
                result++;
            }
        } 
    }

    return result
}

// console.log(subArraySumEqualsK([1, 1, 1], 2));

function maxProductSubArray(arr){
    if(arr.length === 0) return 0

    let minProd = arr[0]
    let maxProd = arr[0]
    let result = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]

        if(curr < 0){
            [maxProd , minProd] = [minProd , maxProd] 
        }

        minProd = Math.min(curr , minProd * curr)
        maxProd = Math.max(curr , maxProd * curr)

        result = Math.max(result , maxProd)
    }
    return result
}


// console.log(maxProductSubArray([2, 3, -2, 4])); // Output: 6
// console.log(maxProductSubArray([-2, 0, -1]));   // Output: 0
// console.log(maxProductSubArray([-2, 3, -4]));   // Output: 24


function longestConsecutive(nums) {

    if(nums.length === 0) return 0

    let longestStreak = 0

    let numSet = new Set(nums)

    for(let num of numSet){
        if(!numSet.has(num -1)){
            let currNum = num;
            let currStreak = 1

            while(numSet.has(currNum+1)){
                currNum +=1;
                currStreak+= 1
            }
            longestStreak = Math.max(longestStreak, currStreak)
        }
    }
    return longestStreak
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9


const arr = [1,2,3,4,5,6,7,8]

Array.prototype.myForEach = function(cb){
    for(let i =0 ; i <this.length ; i++){
        cb(this[i])
    }
}

// arr.myForEach((ele)=>{
//     ele + 1
// })

Array.prototype.myMap = function (cb){
    let result = []
    for(let i =0 ; i <this.length ; i++){
        result.push(cb(this[i]))
    }
    return result
}

Array.prototype.myFilter = function (cb){
    let result = []
    for(let i =0 ; i <this.length ; i++){
        if(cb(this[i])){
            result.push(this[i])
        }
    }
    return result
}


Array.prototype.myFilter = function (cb, initialValue){
    let acc = initialValue
    for(let i =0 ; i <this.length ; i++){
       acc = acc ? cb(acc,this[i]) : this[i]
    }
    return acc
}


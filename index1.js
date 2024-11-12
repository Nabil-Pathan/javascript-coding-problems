// const obj = {
//     a : 10,
//     b : 20,
//     c : {
//       d : 40   
//     }
// }
// const shalllowcopied = {...obj}
// // shalllowcopied.a = 5
// // shalllowcopied.c.d = 5

// const deepCopy = JSON.parse(JSON.stringify(obj))

// deepCopy.c.d = 5

// console.log(obj);
// console.log(shalllowcopied);
// console.log(deepCopy);




// for(let i = 0 ; i < 3 ; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
// }



// function a (){
//     let b = 10
//     function c(){
//         console.log(b);
//     }
//     return c
// }


const arr = [3, 0, 1];

function missingNumber(arr) {
    const n = arr.length
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((acc, num) => {
        acc = acc + num
        return acc
    }, 0)

    return expectedSum - actualSum
}
// console.log(missingNumber(arr));


// let str = "swiss"

function firstNonRepeatingChar(str) {
    let charCount = {}
    let strArr = str.split('')


    strArr.forEach((char) => {
        if (charCount[char]) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    })

    for (let char of strArr) {
        if (charCount[char] == 1) {
            return char
        }
    }
    return null
}

// console.log(firstNonRepeatingChar(str));


// let str = "racecar"
// let reverse = str.split("").reverse().join("")
// console.log(str === reverse);



// let arr1 = [1,2]
// let arr2 = [1,2]

// console.log(arr1 === arr2);


const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    getSum: function () {
        return this.a + this.b + this.c;
    }
};

// console.log(obj1.getSum());

const obj2 = {
    name: 'Alice',
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// const greetFunc = obj2.greet;
// greetFunc(); // Output?

function first() {
    console.log("First");
    second();  // Call to second
}

function second() {
    console.log("Second");
}

// first();  // Start execution


function lengthOfLongestSubstring(str) {
    let maxLength = 0;

    for (let i = 0; i < str.length; i++) {
        let seen = new Set();
        let currLength = 0;
        for (let j = i; j < str.length; j++) {
            if (seen.has(str[j])) {
                break
            }
            seen.add(str[j])
            currLength++;
        }
        maxLength = Math.max(maxLength, currLength);
    }

    return maxLength
}


// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
// console.log(lengthOfLongestSubstring(""));         // Output: 0

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj
    }

    // Check for Date

    if (obj instanceof Date) {
        return new Date(obj.getTime())
    }

    // Check for Array

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item))
    }

    // Handle for Objects

    const result = {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}

const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "gaming"],
    birthDate: new Date(1990, 1, 1)
};

const clone = deepClone(original);

clone.address.city = "London"

// console.log("Original :",original);
// console.log("Copied :",clone);

const chars = ['b', 'c', 'd', 'a', 'e']

const sortedChars = chars.sort()
// console.log(sortedChars);


function sortCharArray(chars) {
    const length = chars.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            if (chars[j] > chars[j + 1]) {
                const temp = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = temp
            }
        }
    }
    return chars
}

// console.log(sortCharArray(chars));

const sentence = "Hello Pathan my name is Nabil "

function getLongestWord(str) {
    const strArray = str.split(" ");
    let maxLength = 0;
    let longestWord = ""

    for (let str of strArray) {
        if (str.length > maxLength) {
            maxLength = str.length
            longestWord = str
        }
    }
    return longestWord
}

// console.log(getLongestWord(sentence));

function squareOddNumbers(arr) {
    const result = arr.filter((ele) => {
        return ele % 2 !== 0
    }).map((num) => num * num)

    return result
}
// console.log(squareOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 9, 25]


function countStrings(arr) {
    const result = {}

    arr.forEach((fruit) => {
        if (result[fruit]) {
            result[fruit]++;
        }
        else {
            result[fruit] = 1
        }
    })
    return result
}
// console.log(countStrings(['apple', 'banana', 'apple', 'orange', 'banana', 'banana']));


// function averageAge(people) {
//     // const ages = []
//     // let result = 0

//     // people.forEach((p)=>{
//     //     if(p.age > 18){
//     //         ages.push(people.age)
//     //     }
//     // })
//     // return ages

//     const adults = people.filter((person)=> person.age > 18)
//     const totalAges = adults.reduce((acc,p)=>  acc + p.age, 0)
//     return totalAges / adults.length
// }
// console.log(averageAge([{ name: 'Alice', age: 22 }, { name: 'Bob', age: 17 }, { name: 'Charlie', age: 25 }])); 



function extractNames(people) {
    const result = []

    people.map((person) => {
        result.push(person.name)
    })
    return result
}
// console.log(extractNames([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }])); 
// Output: ['Alice', 'Bob', 'Charlie']


function calculateTotalPrice(cart) {
    const prices = cart.map((product) => {
        return product.price * product.quantity
    }).reduce((acc, price) => acc + price, 0)

    return prices
}
// console.log(calculateTotalPrice([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }])); 
// Output: 40

function flatten(arrays) {
    return arrays.reduce((acc, arr) => acc.concat(arr), [])
}
// console.log(flatten([[1, 2], [3, 4], [5, 6]])); 

function removeDuplicates(arr) {
    return arr.reduce((acc, num) => {
        !acc.includes(num) && acc.push(num)
        return acc
    }, [])
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]
function getTopStudents(students) {
    const result = students.filter((student) => student.score > 70).map((stu) => stu.name)
    return result
}
// console.log(getTopStudents([{ name: 'Alice', score: 85 }, { name: 'Bob', score: 65 }, { name: 'Charlie', score: 95 }])); 
// Output: ['Alice', 'Charlie']


function groupByProperty(arr, property) {
    const result = arr.reduce((grouped, item) => {
        const key = item[property];

        if (!grouped[key]) {
            grouped[key] = []
        }

        grouped[key].push(item)

        return grouped
    }, {})

    return result
}
// console.log(groupByProperty(
//     [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }, { type: 'fruit', name: 'banana' }],
//     'type'
// ));


function frequencyMap(str) {
    const result = str.split('').reduce((freqMap, char) => {
        freqMap[char] = (freqMap[char] || 0) + 1
        return freqMap
    }, {})
    return result
}
// console.log(frequencyMap('hello world'));



function arrayToObject(arr) {
    return arr.reduce((obj, item) => {
        obj[item.key] = item.value
        return obj
    }, {})
}
// console.log(arrayToObject([{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }])); 
// Output: { a: 1, b: 2, c: 3 }

// setTimeout(function(){
//     console.log('Settimeout');
// })

// Promise.resolve(6).then(function(){
//     console.log('Promise resolver');
// })


let fruits = ['apple', 'date'];

fruits.splice(2, 0, "Banana", "Mango");

// console.log(fruits);


const nums = [1, 3, 2]

nums.splice(1, 1, 5)
// console.log(nums);


// console.log(isNaN("Hi"))
// console.log(isNaN(console.log(2)))

// const myarr = {1 : 'a',2 : 'b',3 :'c',4 : 'd'}

const myarr = [1, 2, 3, 4]

// console.log(Array.isArray(myarr));


const twodArray = [[1, 2], [3, 4], [5, 6]]

const result = twodArray.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
        acc = acc.concat(ele);
    }
    else {
        acc.push(ele)
    }

    return acc
}, [])

// console.log(result);

// x = 10
// console.log(this.x);
// let x ;

// const obj  = {
//     name : "Nabil",
//     age : 21,
//     city : "Anand"
// }

// const { name , age , city} = obj
// console.log(name,age ,city);




// function moveZeros(arr){
//     let result = []
//     let zeros = []

//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element !== 0){
//             result.push(element)
//         }
//         else{
//             zeros.push(element)
//         }
//     }
//     result = result.concat(zeros)
//     return result
// }


function moveZeros(arr) {
    let nonZeroIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i]
            nonZeroIndex++
        }
    }

    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0
    }

    return arr
}

// console.log(moveZeros([0,1,0,3,12]));

function reverseVowels(s) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    let charArray = s.split("")

    let left = 0;
    let right = charArray.length;


    while (left < right) {
        if (!vowels.includes(charArray[left])) {
            left++;
            continue;
        }

        if (!vowels.includes(charArray[right])) {
            right--;
            continue;
        }

        else {
            let temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp
            left++;
            right--;
        }
    }

    return charArray.join("")
}

// console.log(reverseVowels("IceCreAm"));

function numberOfSubstrings(s, k) {

    let count = 0;

    for (let start = 0; start < s.length; start++) {
        let freqMap = new Map();

        for (let end = start; end < s.length; end++) {
            let endChar = s[end];
            freqMap.set(endChar, (freqMap.get(endChar) || 0) + 1)

            if (freqMap.get(endChar) > k) {
                break;
            }

            if (allCharactersMatch(freqMap, k)) {
                count++;
            }
        }
    }

    return count

}

function allCharactersMatch(freqMap, k) {
    for (let freq of freqMap.values()) {
        if (freq >= k) {
            return true
        }
    }

    return false
}

// console.log(numberOfSubstrings("abacb", 2));
// console.log(numberOfSubstrings("abcde", 1));


function findRestaurant(list1, list2) {
    let result = []

    let indexMap = new Map();

    let leastSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        indexMap.set(list1[i], i);
    }

    for (let i = 0; i < list2.length; i++) {
        let currSum = i + indexMap.get(list2[i]);
        if (currSum < leastSum) {
            leastSum = currSum;
            result = [list2[i]]
        }

        else if (currSum === leastSum){
            result.push(list2[i]);
        }
    }
    return result

}

// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));

// const arr = [1, 2, 3, 4, 5, 6, 7]


Array.prototype.myForEach = function (cb) {
    for (let index = 0; index < this.length; index++) {
        cb(this[index])
    }
}
// arr.myForEach((ele)=>{
//     console.log(ele);
// })


Array.prototype.myMap = function (cb) {
    let result = []
    for (let index = 0; index < this.length; index++) {
        result.push(cb(this[index]))
    }
    return result
}
//  const result = arr.map((ele)=>{
//     return ele * 2
//  })
//  console.log(result);

Array.prototype.myFilter = function (cb) {
    let result = []
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index])) {
            result.push(this[index])
        }
    }
    return result
}

// const result = arr.myFilter((ele)=>{
//     return ele % 2 === 0
// })
// console.log(result);

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue

    for (let index = 0; index < this.length; index++) {
        acc = acc ? cb(acc, this[index]) : this[index]
    }
    return acc
}

// const result = arr.myReduce((acc,num)=> acc + num)
// console.log(result);


const obj = {
    name: "Nabil"
}

function message(city) {
    console.log(`Helllo ${this.name} you are from ${city}`);
}

// message.call(obj,"Anand")


Function.prototype.myCall = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Not a Function')
    }
    obj.fun = this
    obj.fun(...args)
}

// message.myCall(obj,"Anand")


Function.prototype.myApply = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Not a Function')
    }

    if (!Array.isArray(...args)) {
        throw new Error('Arguments Should be passed in a list')
    }
    obj.fun = this
    obj.fun(...args)
}

Function.prototype.myBind = function (obj = {}, ...args1) {
    if (typeof this !== 'function') {
        throw new Error('Not a Function')
    }

    obj.fun = this
    return function (...args2) {
        obj.fun(...args1, ...args2)
    }
}

// message.myApply(obj,["Anand"])

// const res = message.myBind(obj)
// res("Anand")

const obj1 = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd'
}

// console.log(Object.entries(obj1))

// var a = ""
// var b = ""

// console.log(a==b);
// console.log(a===b);


// console.log(a);
// console.log(b);

// var b = a = 10

// {
//     var a=  10
//     console.log(a);
// }

// console.log(a);

const names = [
    {
        name: "user1",
        age: 20,
        gender: "M"
    },

    {
        name: "user2",
        age: 21,
        gender: "F"
    },

    {
        name: "user3",
        age: 23,
        gender: "M"
    },
]

// const result = names.filter((user)=>{
//     return user.gender === 'F'
// })
// console.log(result);

// console.log("abc"/2);
// console.log(NaN == NaN);
// console.log(NaN === NaN);

function validParantheses(str) {
    const stack = []

    const combinations = {
        '}': '{',
        ')': '(',
        ']': '[',
    }

    for (let char of str) {
        if (char === '{' || char === '(' || char === '[') {
            stack.push(char);
        }
        else if (char === '}' || char === ')' || char === ']') {
            if (stack.length === 0 || stack.pop() !== combinations[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}

// console.log(validParantheses("{[()]}"));

// let x = {
//     name : "Nabil",
//     age : 21
// }
// let y = {
//     name : "Nabil",
//     age : 21
// }

// console.log(x===y);

// console.log(JSON.stringify(x)===JSON.stringify(y));


const arr = [1, 2, 1, 4, 5, 6, 2, 3, 1, 1, 3, 4, 5, 1, 2, 4, 5, 1, 2, 3, 3]

function sortByFrequency(arr) {
    const freqMap = new Map()

    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    const result = arr.sort((a, b) => {
        if (freqMap.get(a) === freqMap.get(b)) {
            return a - b
        }
        return freqMap.get(b) - freqMap.get(a)
    })

    return result
}

// console.log(sortByFrequency(arr));


// for (var i = 0; i < 3; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }


// let a = 10
// let b = 20
// console.log("before a : ",a);
// console.log("before b: ",b);
// [b,a] = [a,b]
// console.log("after a : ",a);
// console.log("after b : ",b);

// const arr1  = [1,2,1,3,4,5,1,2,3,6,7,8]

// const result = []

// arr1.forEach((num)=>{
//     if(!result.includes(num)){
//         result.push(num)
//     }
// })
// console.log(result);
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// // [1,2,3,4,5,6]

// // console.log(arr1.concat(arr2));

// function mergeTwoArrays(arr1,arr2){
//     const result = []
//     let i =0; let j =0;
//     while(i < arr1.length && j <arr2.length){
//         result.push(arr1[i])
//         result.push(arr2[j])
//         i++;
//         j++;
//     }

//      return result.sort((a,b)=> a-b)
// }

// console.log(mergeTwoArrays(arr1,arr2));

// const sentence = "ansna mamsnamsn asnmndm dlkfflkdf eereiorp"

// const countMap={}

// const chars = sentence.split(" ").join("").split("")

// chars.map((char)=>{
//     if(countMap[char]){
//         countMap[char]++
//     }
//     else{
//         countMap[char] = 1
//     }
// })

// console.log(countMap);


// const arr1 = [1,2,3,1,1,2,5,6,2,3,1,6,5,4]

// const result = arr1.reduce((acc,num)=>{
//     if(!acc.includes(num)){
//         acc.push(num)
//     }
//     return acc
// },[])
// console.log(result);


function titleCaseSentence(str) {
    return str.split(" ").map((word) => word[0].toUpperCase().concat(word.slice(1))).join(" ")
}

// // Example:
// console.log(titleCaseSentence("i am learning javascript")); 

function secondLargest(arr) {
    let largest = arr[0]
    let secondlargest = 0;

    arr.forEach((num) => {
        if (num > largest) {
            secondlargest = largest
            largest = num
        }
        else if (num > secondlargest && num !== largest) {
            secondlargest = num
        }

    })
    return secondlargest
}

// Example:
// console.log(secondLargest([10, 5, 20, 8])); // Output: 10


function mostFrequentElement(arr) {
    let maxCount = 0
    let maxNum = 1
    let countMap = {}

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (countMap[num]) {
            countMap[num]++;
        }
        else {
            countMap[num] = 1
        }

        if (countMap[num] > maxCount) {
            maxCount = countMap[num]
            maxNum = num
        }
    }
    return maxNum
}

// Example:
// console.log(mostFrequentElement([1, 3, 1, 3, 2, 1]));
// Output: 1

function removeElements(arr, value) {
    return arr.filter((num) => num !== value)
}

// Example:
// console.log(removeElements([1, 2, 3, 1, 2, 3], 2)); 

function chunkArray(arr, size) {
    let result = []

    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size)
        result.push(chunk)
    }
    return result
}

// Example:
// console.log(chunkArray([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]

function intersectArrays(arr1, arr2) {
    const set = new Set(arr1)

    const result = []
    
    for(let element of arr2){
        if(set.has(element)){
            result.push(element)
        }
    }
    return result
}

// Example:
// console.log(intersectArrays([1, 2, 3], [2, 3, 4])); // Output: [2, 3]


// let data = "size"

// const bird = {
//     size : "small"
// }
// console.log(bird[data]); //small
// console.log(bird["size"]); //small
// console.log(bird.size);  //small
// console.log(bird.data); // undefined 

// let number = 0

// console.log(number++); // 0
// console.log(++number); // 2
// console.log(number); // 2




// const person  = { name : "Nabil"}

// function sayHi(age){
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person,20)); // Nabil is 20
// console.log(sayHi.bind(person,20)); // will print function





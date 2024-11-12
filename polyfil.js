const arr = [1, 2, 3, 4]

// arr.forEach((ele)=> console.log(ele))

Array.prototype.myForEach = function (cb) {
    for (let index = 0; index < this.length; index++) {
        cb(this[index])
    }
}


Array.prototype.myMap = function (cb) {
    let result = []
    for (let index = 0; index < this.length; index++) {
        result.push(cb(this[index]))
    }
    return result
}

// arr.myForEach((ele)=>{
//     console.log(ele);
// });

// const res = arr.myMap((ele)=> ele * 2)
// console.log(res);

// const filtered = arr.filter((num)=> num % 2 === 0)
// console.log(filtered);


Array.prototype.myFilter = function (cb) {
    let result = []

    for (let index = 0; index < this.length; index++) {
        if (cb(this[index])) {
            result.push(this[index])
        }
    }
    return result
}

// const filtered = arr.myFilter((num)=> num % 2 === 0)

// console.log(filtered);


// const sumOfElements = arr.reduce((acc,ele)=> {
//    return acc + ele
// },0)

// console.log(sumOfElements);

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue
    for (let index = 0; index < this.length; index++) {
        acc = acc ? cb(acc, this[index]) : this[index]
    }
    return acc
}

const sumOfElements = arr.myReduce((acc, ele) => {
    return acc + ele
}, 0)

// console.log(sumOfElements);

async function func1() {
    return new Promise((res, rej) => {
        res("Promise1");
    });
}

function func2() {
    return new Promise((res, rej) => {
        res("Promise2");
    });
}

function func3() {
    return new Promise((res, rej) => {
        res("Promise3");
    });
}

// func1()
//     .then((data) => {
//         console.log(data); // Output: Promise1
//         return func2();    // Returning a new promise
//     })
//     .then((data) => {
//         console.log(data); // Output: Promise2
//         return func3();    // Returning another new promise
//     })
//     .then((data) => {
//         console.log(data); // Output: Promise3
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// Returns the first Element satisfying the test condition
const res = arr.find((ele) => ele % 2 === 0)

// Returns the Index first Element satisfying the test condition
const res1 = arr.findIndex((ele) => ele % 2 === 0)

// console.log(res1);



const person = {
    name: "Alice",
    greet: function () {
        console.log(this.name); // 'this' refers to the 'person' object
    }
};

const person2 = {
    name: "Tony",
    greet: function () {
        console.log(this.name); // 'this' refers to the 'person' object
    }
};

// person2.greet.call(person);

const obj1 = {
    name: "Nabil"
}


const obj2 = {
    name: "Adnan"
}

function greet(age, city) {
    console.log(`Hello ${this.name} your age is ${age} and you are from ${city}`);
}

//  greet.call(obj1,20)

Function.prototype.myCall = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Not Callable')
    }
    obj.fn = this
    obj.fn(...args)
}

Function.prototype.myApply = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Not Callable')
    }
    if (Array.isArray(...args)) {
        throw new Error('TypeError CreateListFromArrayLike')
    }
    obj.fn = this
    console.log(obj);
    obj.fn(...args)
}

// greet.myCall(obj1,20,"Anand")

// greet.myApply(obj1,[20, "Anand"])


Function.prototype.myBind = function (obj = {},...args1) {
    if (typeof this !== 'function') {
        throw new Error('Not Callable')
    }
    obj.fn = this
    return function (...args2) {
        // console.log(obj);
        obj.fn(...args1, ...args2)
    }
}


// const message = greet.myBind(obj1)
// message(21,"Anand")

function areAngrams(str1,str2){
    const normalizedstr1 = str1.toLowerCase().split('').sort().join('')
    const normalizedstr2 = str2.toLowerCase().split('').sort().join('')
    return normalizedstr1 === normalizedstr2
}

// console.log(areAngrams('listen', 'silent')); // true
// console.log(areAngrams('hello', 'world')); // false

function nonRepeatingCharacter(str){
    const countMap = {}
    const strArray = str.split('');
    strArray.map((char)=>{
        if(countMap[char]){
            countMap[char]++;
        }
        else{
            countMap[char] = 1
        }
    })


    for(let char of strArray){
        if(countMap[char] === 1){
            return char
        }
    }
}
// console.log(nonRepeatingCharacter('swiss')); // 'w'

function sumOfDigits(num){
    const digits = num.toString().split('');   
    const sum = digits.map(Number).reduce((acc,num)=> acc +num)
    return sum
}

// console.log(sumOfDigits(123));


function flattenArray(arr) {
    let result = []

    arr.forEach((element) => {
        if(Array.isArray(element)){
            result = result.concat(flattenArray(element));
        }
        else{
            result.push(element)
        }
    });
    return result
  }
  
  // Example
//   console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]

class MyStack {
    constructor(){
        this.arr = []
    }

    push(ele){
        this.arr.push(ele);
    }

    pop(){
        if(this.arr.length === 0){
            return null
        }
        return this.arr.pop()
    }

    peek(){
        if(this.arr.length === 0){
            return null
        }
        return this.arr[this.arr.length -1];
    }
}

const stack = new MyStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());


// console.log('2' + 1  + 3);


const myobj1 = {
    name : "Nabil Khan",
    age : 20
}

const myobj2 = {
     city : "Anand",
     __proto__ : myobj1
}

const myobj3 = {
    score : 80,
    __proto__ : myobj2
}

// console.log(myobj1);
// console.log(myobj2.name);
// console.log(myobj3.age);



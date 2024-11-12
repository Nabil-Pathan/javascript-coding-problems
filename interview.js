function productOfArrayExcepetSelf(arr) {
    let n = arr.length;
    let result = new Array(n).fill(1)

    let leftProduct = 1
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= arr[i]
    }

    let rightProduct = 1

    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct
        rightProduct *= arr[i]
    }

    return result

}
// console.log(productOfArrayExcepetSelf([1,2,3,4]));
function duplicates(a, n) {
    let result = []

    let countMap = new Map()

    for (let i = 0; i < n; i++) {
        countMap.set(a[i], (countMap.get(a[i]) || 0) + 1)
    }

    for (let i = 0; i < n; i++) {
        if (countMap.get(a[i]) > 1 && !result.includes(a[i])) {
            result.push(a[i])
        }
    }
    return result
}

// console.log(duplicates([1, 2, 3, 2, 4, 5, 6, 4], 8));  // Output: [2, 4]

function firstNonRepeatingCharacter(str) {
    let charMap = new Map()

    let strArr = str.split("")

    for (let char of strArr) {
        charMap.set(char, (charMap.get(char) || 0) + 1)
    }

    for (let char of strArr) {
        if (charMap.get(char) === 1) {
            return char
        }
    }
}

function removeDuplicates(arr) {
    let set = new Set()

    let size = 0

    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i])
            arr[size++] = arr[i]
        }
    }
    return size
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]));



function rotateArray(arr, k) {
    const n = arr.length
    k = k % n

    function reverse(start, end) {
        while (start < end) {
            const temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }

    // Entire Array
    reverse(0, n - 1)


    // reverse first k elements in this case its first 3 elements
    reverse(0, k - 1)

    // reverse the remaining ones
    reverse(k, n - 1)

    return arr

}

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));


function mostFrequentChar(arr) {
    const charMap = {}
    let maxCount = 0
    let maxChar = null

    for (let char of arr) {
        charMap[char] = (charMap[char] || 0) + 1

        if (charMap[char] > maxCount) {
            maxCount = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

// console.log(mostFrequentChar(["a","a","b","c","d","a","c","e"]));



//  Group items on the basis of age of given array of object
let peoples = [
    { name: "Alice", age: 20 },
    { name: "Max", age: 21 },
    { name: "Jane", age: 18 },
    { name: "John", age: 20 },
    { name: "Tony", age: 21 },
    { name: "Stark", age: 18 },
]

// Output : 
//  {
//   '18': [ { name: 'Jane', age: 18 }, { name: 'Stark', age: 18 } ],
//   '20': [ { name: 'Alice', age: 20 }, { name: 'John', age: 20 } ],
//   '21': [ { name: 'Max', age: 21 }, { name: 'Tony', age: 21 } ]
// }

function groupItems(peoples) {
    const check = {}
    peoples.map((people) => {
        if (!check[people.age]) {
            check[people.age] = [people]
        }
        else {
            check[people.age].push(people)
        }
    })
    return check
}
// console.log(groupItems(peoples));


// const arr = [1,2,3,4,5,6] 

// // [1,2,3,7,8,6]
// arr.splice(3,2,7,8)
// console.log(arr);

function validParantheses(str) {
    const stack = []

    const combinations = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (let char of str) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char)
        }
        else if (char === '}' || char === ']' || char === ')') {
            if (stack.length === 0 || stack.pop() !== combinations[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}

// console.log(validParantheses("{[()]}"));
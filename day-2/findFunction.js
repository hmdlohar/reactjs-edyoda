Array.find()
// Only difference between filter and find is that. filter returns new array while find returns single arrayItem. 
// You need to return true/false. If filterFunction Return true then arrayItem will be included in new array. otherwise it will not be included. 
// you will get only arrayItem. Not an array. 

const arr = ["Hamid", "Suraj", "Nikunj", "Jatin"]

// Find name whole length is 5 character
var arrayElement = undefined;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 5) {
        arrayElement = arr[i]
        break;
    }
}

// Syntax map, filter, find, findIndex
// 1
arr.find((arrayItem) => arrayItem.length == 5)

//2
arr.find(function (arrayItem) {
    return arrayItem.length == 5
})

//3
function filterFunction(arrayItem) {
    return arrayItem.length == 5
}
arr.find(filterFunction)

//4
const filterArrowFunction = (arrayItem) => {
    return arrayItem.length == 5
}
arr.find(filterFunction)


// can we check for all last alphabet in string? using filter
arr.find(arrayItem => {
    return arrayItem[arrayItem.length - 1] == 'j';
})



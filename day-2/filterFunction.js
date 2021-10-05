Array.filter()
// It returns new array based on condition where condition returns true. 
// You need to return true/false. If filterFunction Return true then arrayItem will be included in new array. otherwise it will not be included. 
// Length of resulting array will be less then or equeal to original array. 

const arr = ["Hamid", "Suraj", "Nikunj", "Jatin"]

// Find name whole length is 5 character
var filteredArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 5) {
        filteredArr.push(arr[i])
    }
}

// Syntax map, filter, find, findIndex
// 1
arr.filter((arrayItem) => arrayItem.length == 5)

//2
arr.filter(function (arrayItem) {
    return arrayItem.length == 5
})

//3
function filterFunction(arrayItem) {
    return arrayItem.length == 5
}
arr.filter(filterFunction)

//4
const filterArrowFunction = (arrayItem) => {
    return arrayItem.length == 5
}
arr.filter(filterFunction)




// can we check for all last alphabet in string? using filter
arr.filter(arrayItem => {
    return arrayItem[arrayItem.length - 1] == 'j';
})



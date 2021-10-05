Array.findIndex()
// Only difference between find and findIndex is that. It retuns index of element instead of arrayElement. 
// You need to return true/false. If filterFunction Return true then arrayItem will be included in new array. otherwise it will not be included. 
// you will get only index of element. Not an array. 

const arr = ["Hamid", "Suraj", "Nikunj", "Jatin"]

// Find name whole length is 5 character
var index = undefined;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 5) {
        index = i;
        break;
    }
}

// Syntax map, filter, find, findIndex
// 1
arr.findIndex((arrayItem) => arrayItem.length == 5)


// can we check for all last alphabet in string? using filter
arr.findIndex(arrayItem => {
    return arrayItem[arrayItem.length - 1] == 'j';
})




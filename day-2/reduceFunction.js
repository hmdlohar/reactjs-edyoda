Array.reduce()
// 

const arr = [5, 6, 9, 7, 5];

// sum of all element of array. 
var previousValue = 0;
for (let i = 0; i < arr.length; i++) {
    previousValue = previousValue + arr[i];
}

// Syntax reduce
// 1
arr.reduce((previousValue, arrayItem) => {
    return previousValue + arrayItem
}, 5)

// 0 th iteration previousValue= 5, arrayItem= 5 --> 5+5 = 10
// 1 st iteration previousValue= 10, arrayItem= 6 --> 10+6 = 16
// 2 nd iteration previousValue= 16, arrayItem= 9 --> 16+9 = 25
// 3 th iteration previousValue= 25, arrayItem= 7 --> 25+7 = 32
// 4 th iteration previousValue= 32, arrayItem= 5 --> 32+5 = 37


// Find Maximum number from list. 
arr.reduce((previousValue, arrayItem) => {
    if(arrayItem > previousValue)
        return arrayItem
    else 
        return previousValue
}, 0)

// 0 th iteration previousValue= 0, arrayItem= 5 --> 5>0  5
// 1 st iteration previousValue= 5, arrayItem= 6 --> 6>5  6
// 2 nd iteration previousValue= 6, arrayItem= 9 --> 9>6  9
// 3 th iteration previousValue= 9, arrayItem= 7 --> 7>9  9
// 4 th iteration previousValue= 9, arrayItem= 5 --> 5>9  9

// return 9

// where previousValue is getting updated?


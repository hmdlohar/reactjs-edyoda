Array.map()
// It transforms one Array to a new array based on Funcation we Provide to map method. 
// Map returns New Array and preserve Old Array As It Is. 
// return new Value
// If you don't return anything then it return array of undefined. 
// Length of resulting array is same as length of Original Array. 

const arr = ["Hamid", "Suraj", "Nikunj", "Jatin"]

//loop  over all element and chagne value. 
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase()
}

// Syntax
arr.map((arrayItem, index) => arrayItem.toLowerCase())

// Using Index
arr.map((arrayItem, index)=>{
    return `${index + 1}-${arrayItem}`
})
function add(a, b) {
    let c = a + b;
    console.log("Sum: ", c)
}

function addMultiple(name, ...args) {
    console.log("name",name )
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        sum = sum + args[index];
    }
    console.log("Sum: ", sum)
}


let obj1 ={
    firstName: "h",
    lastName: "l"
}

let obj2={
    age: 33
}

let arr =[1,2,3,5,6,95,2]

let f = arr[0]
let s = arr[1]

let [first, second] = arr;




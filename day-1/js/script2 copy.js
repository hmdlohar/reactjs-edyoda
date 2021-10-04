function changeName(name){
    name = "new Name";
    console.log("Inside function:", name) // Value Will be changed here. 
}

function changeNmaeObj(objPerson){
    objPerson.name = "new Name";
    console.log("Inside Obj function:", objPerson.name)
    // Value Will be changed here. And Reflected outside
}

let n = "old Name";
let o = {};
o.name = "Old Name";

console.log("Before Calling function: ")
console.log("n:  ", n)
console.log("o.name:  ", o.name)

changeName(n)
changeNmaeObj(o)


console.log("After Calling function: ")
console.log("n:  ", n)
console.log("o.name:  ", o.name)
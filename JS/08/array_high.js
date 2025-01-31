//HIGH ORDER FUNCTIONS IN ARRAYS
student=["khushi","sayna"]
for (i=0;i<student.length ;i++){
    console.log(student[i])
}

function print(n){
    console.log(n)
}
 //forEach function is a high order function as it accepts the function as there output is like call by function
student.forEach(print) //forEach function takes each elements of array and passes them as a argument

student.map(val=>{console.log(val)})

//map function forms the new array and then return the values on the other hand the forEach returns the value

marks=[100,200,300]
marks.forEach(val=>{console.log(val*2)})
marks.map(val=>{console.log(val*2)})

const newArray=[]
marks.forEach(val=>{newArray.push(val*2)})
console.log(newArray)
// for each does not return any value

mark=[100,200,300,400]
let newarr=marks.forEach(val=>{val*2})
console.log(newarr)
console.log(mark)

function arr(n){
    return n*2
}
 let newa =mark.forEach(arr)
 console.log(newa)

let newar=mark.map(arr)
console.log(newar)
console.log(mark)

//map function calls callback fun then joh bhi ap return krte ho uska ek new array bna k de deta h

const numbers=[20,2,12,23,33]
let result=numbers.find(num=>{num===2})
console.log(result)
// find values udhata hai check kerta hai if true then return that value
result=numbers.findIndex(num=>num===20)
console.log(result)
result=numbers.includes(12)
console.log(result)
result=numbers.filter(num=> num%2==0)
console.log(result)
result=numbers.slice(4)
console.log(result)
result=numbers.slice(1,5)
console.log(result)
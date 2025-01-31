//ARRAYS
let student=["khushi","Sayna","vansh"]
student[0]="khushi nain"
student.push("geeta")  //add string at last

console.log(student)
//arrays in js are heterogeneous
myarray=["khushi",1,false,1+2]
myarray.push({name:"khushi"}) //we can add even a object in arrays

console.log(myarray)
console.log(myarray.indexOf("khushi")) //tells the index of elements of array and wecan search of elements that they exists in the array

myarray.pop() //remove the last value from array
console.log(myarray)
myarray.reverse()
console.log(myarray)


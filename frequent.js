// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var i = 0
// var count=0
// while(i<arr1.length){
//     if (arr1[i]=="a"){
//         count+=1
//     }
//     i+=1
// }
// console.log(count)


let array = [1,2,3,4]
// Output : - [[1,2], [2,3],[3,4]]

var i=0
var emp=[]
var emp1=[]
while (i<array.length){
    var a=array[i]
    emp.push(a)
    i++
}
console.log(emp)


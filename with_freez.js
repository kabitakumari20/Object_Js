// var arr=[1,2,3,4]
// arr[1]=6
// Object.freeze(arr)
// arr[2]=9
// console.log(arr)


// const obj={name :"manvi", age:20, class:12}
// obj["name"]="kavita"
// Object.freeze(obj)
// obj.age=25
// console.log(obj)



// function diagonalDifference(arr) {
// arr=[[11, 2, 4],[4, 5, 6],[10, 8, -12]]

// let d1=0
// let d2=0
// let i=0
// let j=0
// while (i<arr.length){
//     d1=d1+(arr[i][j])
//     j=j+1
//     i=i+1
    
// }
// console.log(d1)
// let k=0
// let t=2
// while (k<arr.length){
//     d2=d2+(arr[k][t])
//     t=t-1
//     k=k+1
// }
// console.log(d2)
// let diagonalDifference=0
// if (d1>d2){
//     diagonalDifference=d1-d2 
// }
// if (d2>d1){
//     diagonalDifference=d2-d1
// }
// console.log(diagonalDifference)


// var arr=[1, 2, 3, 4, 5]
// var i=0
// var maxsum=0
// var minsum=0
// var max=0
// var min=arr[0]
// while (i<arr.length){
//     maxsum=maxsum+arr[i]
//     if (arr[i]>max){
//         max=arr[i]
//     }
//     if (arr[i]<min){
//         min=arr[i]
//     }
//     minsum=minsum+arr[i]
//     i++
// }
// console.log(maxsum-min)
// console.log(minsum-5)
// console.log(max)
// console.log(min)




// function miniMaxSum(arr) {
//     // Write your code her

//     let arr2=[...arr]
//     let max=0
//     for (let value of arr){
//         if (value>max){
//             max=value
//         }
//     }
//     let y=arr.indexOf(max)
//     arr.splice(y,1)
//     const z=(x,y) => x+y;
// let mini=Math.min(...arr2)
// let t=arr2.indexOf(mini)
// let s=arr2.splice(t,1)
// const p=(o,n)=>o+n;
// console.log(arr.reduce(z),arr2.reduce(p))
// }


let candles=[3,1,2,3]
let count=0
let i=0
let max=0
while (i<candles.length){
    if (candles[i]>max){
        max=candles[i]

        count=count+1
    }
    if (max==)
    i++
}
console.log(count)
console.log(max)
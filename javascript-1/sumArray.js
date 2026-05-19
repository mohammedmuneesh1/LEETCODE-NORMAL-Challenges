


function findSumArray(arr){
    let arrSum = 0 ; 
    for(let i=0;i<arr.length;i++){
        arrSum += arr[i]
    }
    return arrSum
}
console.log(findSumArray([1,2,3,4,5])) //15
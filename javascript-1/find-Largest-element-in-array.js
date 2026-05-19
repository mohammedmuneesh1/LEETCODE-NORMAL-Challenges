


const findLargestElementInArray = (arr)=>{
    if(arr.length === 0) return null;

    let largetElement = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>largetElement){
            largetElement = arr[i];
        }
    }

    return largetElement
}

//O(n) Time Complexity n = number of elements n = 5

//If array size grows:
// Array Size	Operations
// 10	~10
// 100	~100
// 1000	~1000


// Operations grow linearly. O(n) 
//Space complexity O(1) because we are using only one variable to store the largest element, regardless of the size of the input array.
///Space Complexity = O(1) Because memory usage does NOT grow with input size. 



console.log(findLargestElementInArray([1,2,3,4,5]))
console.log(findLargestElementInArray([12,89,546,4564,45644,99999]))

//solution-2 
console.log(Math.max(...[1,2,3,4,5]))


//solution-3 using reduce method

const arr = [12,56,23,789,9899,3434345]
const largest = arr.reduce((max, current) => {
    return current > max ? current : max;
});
console.log(largest);



//solution-4 using recursive method 

const findLargest = (arr) => {
   if(arr.length === 1) return arr[0];
   const maxOfRest = findLargest(arr.slice(1));
   return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

//explanation

// /console.log(arr.slice(2))
//findLargest([2,3,4,5])  maxOfRest = findLargest([3,4,5])
//findLargest([3,4,5])  maxOfRest = findLargest([4,5])
//findLargest([4,5])  maxOfRest = findLargest([5])
//findLargest([5]) return 5

// At this point:

// nobody has answer yet
// every function is paused
// waiting for deeper call result
// This is called:
// Call Stack



// findLargest([1,2,3,4,5])
//    ↓
// findLargest([2,3,4,5])
//    ↓
// findLargest([3,4,5])
//    ↓
// findLargest([4,5])
//    ↓
// findLargest([5])
//    ↓
// return 5

//  BOTTOM → UP from return 5 to findLargest([1,2,3,4,5])
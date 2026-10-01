//=------------------- QUESTION -------------------
// Example 2
// Input
// index1 = 11
// index2 = 0
// Output
// 1
// Explanation
// The month with index 11 is December and the month with index 0 is January. So, the number of months needed to wait is 1.

//ANOTHER EXAMPLE 

// Input
// index1  = 1
// index2 = 3
// Output
// 2
// Explanation
// The month with index 1 is February and the month with index 3 is April. So, the number of months needed to wait is 2.


function getMonthsNeededToWait(index1, index2) {
    return (index2 - index1 + 12) % 12;
}


// + 12 prevents the result from becoming negative.
// % 12 makes the result wrap around the 12 months.

console.log(getMonthsNeededToWait(1, 2)); // 1
console.log(getMonthsNeededToWait(11, 0)); // 1 
console.log(getMonthsNeededToWait(11, 6)); // 7 
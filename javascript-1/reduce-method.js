



//larget element 
const arr = [12,56,23,789,9899,3434345]
const largest = arr.reduce((max, current) => {
    return current > max ? current : max;
});
console.log(largest);


//method 2 
console.log([1, 2, 3].reduce((a, b) => a + b));
//NO INITAL VALUE HAS BEEN GIVEN 
// still works because when no initial value is provided:
// ⚠️⚠️⚠️ reduce automatically uses first array element as accumulator ⚠️⚠️⚠️




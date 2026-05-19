
//The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
function fibonacci(n) {
    let num1 = 0, num2 = 1, nextNum;

    console.log("Fibonacci Sequence:");

    for (let i = 1; i <= n; i++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}

fibonacci(7);


const fibonacci2 = (n) => {
    const result = [0, 1];

    for(let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}

console.log(fibonacci2(10));
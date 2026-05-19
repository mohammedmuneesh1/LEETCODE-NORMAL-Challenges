// Prime numbers are numbers greater than 1 that are divisible by only:
// 1
// themselves

// Meaning:
// no other number divides them evenly.

function isPrime(num) {
    if (num <= 1) 
        return false;
    for (let i = 2; i < num; i++) 
    {
        if (num % i === 0) 
            return false;
    }
    return true;
}

console.log(isPrime(7));




// prime numbers 

// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// 53
// 59
// 61
// 67
// 71
// 73
// 79
// 83
// 89
// 97
// 101
// 103
// 107
// 109
// 113
// 127
// 131
// 137
// 139
// 149
// 151
// 157
// 163
// 167
// 173
// 179
// 181
// 191
// 193
// 197
// 199
// 211
// 223
// 227
// 229
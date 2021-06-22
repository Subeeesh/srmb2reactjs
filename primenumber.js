console.log("prime numbers");

const newArray = [21, 47, 37, 12, 10, 37, 84, 22, 5, 11];
const PrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
});
console.log("array::" + newArray);

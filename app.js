function analyzeNumber(rawInput) {
    const num = Number(rawInput);

    if (Number.isNaN(num)) {
        return "invalid input"
    }

    const divByThree = (num % 3 === 0);
    const divByFive = (num % 5 === 0);
    let result = "";

    if (divByThree) result += "Fizz"; 
    if (divByFive) result += "Buzz";

    return result || `${num}`
}


console.log(analyzeNumber(3)); // Fizz
console.log(analyzeNumber(5)); // Buzz
console.log(analyzeNumber(7)); // 7
console.log(analyzeNumber(15)); // FizzBuzz
console.log(analyzeNumber("hi")); // invalid input

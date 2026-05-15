function analyzeNumber (num) {
    const divByThree = (num % 3 === 0) ? "Fizz" : "";
    const divByFive = (num % 5 === 0) ? "Buzz" : "";

    return (divByThree + divByFive) ? (divByThree + divByFive) : num;
}

console.log(analyzeNumber(3));
console.log(analyzeNumber(5));
console.log(analyzeNumber(7));
console.log(analyzeNumber(15));

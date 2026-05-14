function analyzeNumber(num) {
    const divByThree = (num % 3 === 0);
    const divByFive = (num % 5 === 0);

    if (divByThree && divByFive) {
        return "FizzBuzz";
    } 
    else if (divByThree) {
        return "Fizz";
    }
    else if (divByFive) {
        return "Buzz";
    }
    else {
        return num;
    }
}

console.log(analyzeNumber(3));
console.log(analyzeNumber(5));
console.log(analyzeNumber(7));
console.log(analyzeNumber(15));
function analyzeNumber(num) {
    const divByThree = (num % 3 === 0) ? true : false;
    const divByFive = (num % 5 === 0) ? true : false;

    if (divByThree && divByFive) {
        console.log("FizzBuzz");
    } 
    else if (divByThree) {
        console.log("Fizz");
    }
    else if (divByFive) {
        console.log("Buzz");
    }
}

analyzeNumber(30);
analyzeNumber(3);
analyzeNumber(5);
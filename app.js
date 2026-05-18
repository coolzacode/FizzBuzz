const outputSection = document.getElementById('output-section');
let currNum = 1;

function analyzeNumber(rawInput) {
    const num = Number(rawInput);

    if (Number.isNaN(num)) {
        return 'invalid input';
    }

    const divByThree = (num % 3 === 0);
    const divByFive = (num % 5 === 0);
    let result = '';

    if (divByThree) result += 'Fizz';
    if (divByFive) result += 'Buzz';

    return result || `${num}`
}

function addLine() {
    const newDiv = document.createElement('div');
    newDiv.className = 'text-div';

    const numP = document.createElement('p');
    numP.textContent = `${currNum}`;
    newDiv.appendChild(numP);

    const answerText = document.createElement('p');
    answerText.id = `answerText-${currNum}`
    answerText.textContent = '';
    newDiv.appendChild(answerText);

    outputSection.appendChild(newDiv);

    outputSection.scrollTo({
        top: outputSection.scrollHeight,
        behavior: 'smooth'
    })
}

function playGame(input) {
    const userInput = document.getElementById(`answerText-${currNum}`);

    if (analyzeNumber(currNum) === `${input}`) {
        userInput.textContent = `${input}`;
    } else {
        userInput.textContent = '';
    }
    currNum++;
    addLine();
}

addLine();

document.getElementById('fizz-btn').addEventListener('click', () => {
    playGame('Fizz');
})
document.getElementById('fizzbuzz-btn').addEventListener('click', () => {
    playGame('FizzBuzz');
})
document.getElementById('buzz-btn').addEventListener('click', () => {
    playGame('Buzz');
})
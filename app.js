const outputSection = document.getElementById('output-section');
const inputSection = document.getElementById('input-section');
let currNum = 1;

// only returns what is expected from the user
function getCorrectAnswer(num) {
    if (num % 15 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return 'None';
}

function addLine(num) {
    const newDiv = document.createElement('div');
    newDiv.className = 'text-div text-div-active';
    newDiv.id = `row-${num}`;

    const numP = document.createElement('p');
    numP.textContent = num;

    const answerText = document.createElement('p');
    answerText.className = 'line';

    newDiv.appendChild(numP);
    newDiv.appendChild(answerText);
    outputSection.appendChild(newDiv);

    outputSection.scrollTo({
        top: outputSection.scrollHeight,
        behavior: 'smooth'
    })
}

function playGame(userGuess) {
    const correctAnswer = getCorrectAnswer(currNum);
    const currentRow = document.getElementById(`row-${currNum}`);

    const answerText = currentRow.querySelector('.line');
    currentRow.classList.remove('text-div-active');

    if (userGuess === correctAnswer) {
        if (userGuess === 'None') {
            answerText.textContent = '\u2713';
            answerText.classList.add('line-none');
        } else {
            answerText.textContent = userGuess;
            answerText.classList.add(`line-${userGuess.toLowerCase()}`);
        }
    } else {
        answerText.textContent = '\u2717';
        currentRow.classList.add('line-error');
    }

    currNum++;
    addLine(currNum);
}

// start game with the first line
addLine(currNum);

inputSection.addEventListener('click', (e) => {
    const buttonClicked = e.target.closest('button');
    if (!buttonClicked) return;
    
    const guess = buttonClicked.dataset.guess;
    playGame(guess);
})
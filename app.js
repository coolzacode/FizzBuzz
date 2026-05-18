let currNum = 1;

function analyzeNumber(rawInput) {
    const num = Number(rawInput);

    if (Number.isNaN(num)) {
        return "invalid input";
    }

    const divByThree = (num % 3 === 0);
    const divByFive = (num % 5 === 0);
    let result = "";

    if (divByThree) result += "Fizz";
    if (divByFive) result += "Buzz";

    return result || `${num}`
}

function addLine() {
    const outputSection = document.getElementById('output-section');

    const newDiv = document.createElement('div');
    newDiv.className = 'text-div';

    const numP = document.createElement("p");
    numP.textContent = `${currNum}`;
    newDiv.appendChild(numP);

    const answerText = document.createElement("p");
    answerText.textContent = "fizz";
    newDiv.appendChild(answerText);

    outputSection.appendChild(newDiv);

    outputSection.scrollTo({
        top: outputSection.scrollHeight,
        behavior: 'smooth'
    })

    console.log(newDiv);
    currNum++;
}

addLine();

const btn = document.getElementById('fizz-btn');
btn.addEventListener('click', addLine);
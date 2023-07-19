const inputEl = document.querySelector(".js-input");
const btnEl = document.querySelector(".js-btn");
let resultEl = document.querySelector(".js-result");
const resetEl = document.querySelector(".js-reset");

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let numGuesses = 1;
const maxNumAttempts = 6;

// Start the game
resultEl.textContent = `Guess a secret number between 1 and 20. 😃`;

// Function to handle guess submission and condition

btnEl.addEventListener("click", handleGuess);

function handleGuess() {
  const guess = parseInt(inputEl.value);

  if (isNaN(guess) || guess < 1 || guess > 20) {
    resultEl.textContent = `🤷‍♂️ Invalid guess. Please, enter a number between 1 and 20.`;
    return;
  }

  if (guess === secretNumber) {
    delayAndDisplayText(`Congratulations!👍
    You guessed the secret number. Number of guesses: ${numGuesses}`);
    resetGame()
    inputEl.value = "";
  } else if (numGuesses === maxNumAttempts) {
    delayAndDisplayText(`Sorry, you didn't guess the secret number.😉
    The secret number was: ${secretNumber}`);
    resetGame();
    inputEl.value = "";
  } else if (guess < secretNumber) {
    delayAndDisplayText(`Try again! The secret number is higher.🤦‍♂️ 
    ${5 - numGuesses} attempt left`);
  } else {
    delayAndDisplayText(`Try again! The secret number is lower.🤦‍♀️
     ${5 - numGuesses} attempt left`);
  }
  numGuesses++;
  inputEl.value = "";
}

// Reseting Game
resetEl.addEventListener("click", resetGame);

function resetGame() {
  numGuesses = 0;
  inputEl.value = "";
  resultEl.textContent = `Guess a secret number between 1 and 20. 😃`;
}

//keyboard event
// this function is called in the HTML
function handleKeydownPress(event) {
  if (event.key === "Enter") {
    handleGuess();
  }
}

function delayAndDisplayText(text) {
  const delayTime = 2000;
  resultEl.innerHTML = "";
  resultEl.textContent = "Loading...";
  setTimeout(() => {
    resultEl.textContent = "";
    resultEl.textContent = text;
  }, delayTime);
}

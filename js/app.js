let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const startAgain = document.querySelector(".resultpress");
const loworhi = document.querySelector(".loworhi");

const p = document.createElement("p");
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
});
console.log(guess)
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number that is greater than 1!");
  } else if (guess > 100) {
    alert("please enter a number that is less than 500!");
  } else {

    previousGuesses.push(guess);

    if (numGuesses === 11) {
      displayGuesses(guess);
      displayMessage(`Game Over! Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed correctly!`);
    endGame();
  } else if (guess<randomNumber) {
    displayMessage(`Too low! Try Again!`);
  } else if (guess>randomNumber) {
    displayMessage(`Too high! Try Again!`);
  }
}

function displayGuesses(guess) {
  userInput.value ='';
  guessSlot.innerHTML += `${guess}`;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  loworhi.innerHTML= `<h1>${message}</h1>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h1 id="newGame">start a new game</h1>`;
    startAgain.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function () {
      randomNumber = parseInt(Math.random() * 100 + 1);
      previousGuesses = [];
      numGuesses = 1;
      guessSlot.innerHTML = "";
      loworhi.innerHTML = "";
      remaining.innerHTML = `${11 - numGuesses}`;
      userInput.removeAttribute("disabled");
      startAgain.removeChild(p);
      playGame = true;
    });
  }

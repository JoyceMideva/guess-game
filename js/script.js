// let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

// const submit = document.querySelector("#submit");
// const userInput = document.querySelector("#guessfield");
// const remaining = document.querySelector(".lastresult");
// const guessField = document.querySelector(".guesses");
// const startOver = document.querySelector(".resultpress");
// const loworhi = document.querySelector(".loworhi");
// const paragraph = document.createElement("p");
// let numGuesses = 1;
// let previousGuesses = [];
// let playgame = true;
// if (playgame) {
//   submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     validateguess(guess);
//   });
// }
// function validateguess(guess) {
//   if (isNaN(guess)) {
//     alert("please enter the valid number");
//   } else if (guess < 1) {
//     alert("hello");
//   } else if (guess > 500) {
//     alert("high");
//   } else {
//     previousGuesses.push(guess);

//     if (numGuesses === 11) {
//       displayGuesses(guess);
//       displayMessage(`GameOver! The number was${randomNumber}`);
//       endgame();
//     } else {
//       displayGuesses(guess);
//       checkGuess(guess);
//     }
//   }
// }
// function checkGuess(guess){
//     if(guess===randomNumber){
// displayMessage(`you won`)
// endgame()
//     }else if(guess<randomNumber){
// displayMessage(`too low`)
//     }else if(guess>randomNumber){
// displayMessage(`too high`)
//     }
// }
//  function displayGuesses(guess){
//     userInput.value=""
//     guessField.innerHTML +=`${numGuesses}`
//     numGuesses++
//     remaining.innerHTML=`${11 - numGuesses}`

//  }
//  function displayMessage(message){
//     loworhi.innerHTML=`<h1>${message}</h1>`
//  }
//  function endgame() {
//     userInput.value = "";
//     userInput.setAttribute("disabled", "");
//     paragraph.classList.add("button");
//     paragraph.innerHTML = `<h1 id="newGame">start a new game</h1>`;
//     startOver.appendChild(paragraph);
//     playgame = false;
//     newGame();
//   }

//   function newGame() {
//     const newGameButton = document.querySelector("#newGame");
//     newGameButton.addEventListener("click", function () {
//       randomNumber = parseInt(Math.random() * 100 + 1);
//       previousGuesses = [];
//       numGuesses = 1;
//       guessField.innerHTML = "";
//       loworhi.innerHTML = "";
//       remaining.innerHTML = `${11 - numGuesses}`;
//       userInput.removeAttribute("disabled");
//       startOver.removeChild(paragraph);
//       playgame = true;
//     });
//   }
function userChoice(choice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = determineWinner(choice, computerChoice);

  displayResult(result, choice, computerChoice);
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(result, userChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `${result} You chose ${userChoice}, computer chose ${computerChoice}.`;
}

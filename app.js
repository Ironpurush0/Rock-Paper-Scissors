function whole() {
  let userScore = 0;
  let compScore = 0;
  let writing;
  let person = prompt("Enter your name");
  const user_score = document.getElementById("user-score");
  const comp_score = document.getElementById("comp-score");
  const winner_message = document.getElementById("message");
  const rock_counter = document.getElementById("rock");
  const paper_counter = document.getElementById("paper");
  const scissors_counter = document.getElementById("scissors");

  function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
  }
  console.log(getComputerChoice());

  function win() {
    writing = `${person} You win. 😎`;
    winner_message.innerHTML = writing;
    userScore++;
    user_score.innerHTML = userScore;
    comp_score.innerHTML = compScore;
    console.log("Win" + userScore);
  }

  function lost() {
    compScore++;
    writing = `${person} You lose! 😒`;
    winner_message.innerHTML = writing;
    comp_score.innerHTML = compScore;
    user_score.innerHTML = userScore;
    console.log("lost" + compScore);
  }

  function draw() {
    writing = `Its a drawww.. 💩`;
    winner_message.innerHTML = writing;
  }

  function game(userChoice) {
    const computerScore = getComputerChoice();
    switch (userChoice + computerScore) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        win();
        break;

      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        lost();
        break;

      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        draw();
        break;
    }
  }

  function main() {
    rock_counter.addEventListener("click", () => {
      game("rock");
    });
    paper_counter.addEventListener("click", () => {
      game("paper");
    });
    scissors_counter.addEventListener("click", () => {
      game("scissors");
    });
  }

  main();
}

whole();

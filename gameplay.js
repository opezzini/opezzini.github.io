let userScore = 0;
let gameOptions = ["rock", "paper", "scissors"];
let userSelection;
let compSelection;

let options = document.querySelectorAll(".option-container");
let scoreDisplay = document.getElementById("score-display");
let youPicked = document.getElementById("you-picked-img");
let theyPicked = document.getElementById("they-picked-img");
let resultMessage = document.querySelector(".result-message");
scoreDisplay.innerHTML = userScore;

console.log(options[0]);

//Click function
let clicked = (e) => {
  toggleGameBoard();
  userSelection = e.currentTarget.id;
  compSelection = generateCompSelection();
  console.log(`User has selected ${userSelection}`);
  youPicked.parentElement.classList.add("animate");
  theyPicked.parentElement.classList.add("animate");
  youPicked.src = `./images/icon-${`question`}.svg`;
  theyPicked.src = `./images/icon-${`question`}.svg`;

  let countDown = () => {
    showCompSelection(compSelection);
    showMySelection(userSelection);
    compareResult(userSelection, compSelection);
    scoreDisplay.innerHTML = userScore;
    delayPlayAgain();
  };

  setTimeout(countDown, 1480);
};

//Countdown

//Display my selections
let showMySelection = (selection) => {
  youPicked.src = `./images/icon-${selection}.svg`;
  youPicked.parentElement.className = `selection-container ${selection}`;
};

//Display comp selections
let showCompSelection = (comp) => {
  theyPicked.src = `./images/icon-${comp}.svg`;
  theyPicked.parentElement.className = `selection-container ${comp}`;
};

//Click event
options.forEach((option) => {
  option.addEventListener("click", clicked);
});

// Computer random selection
let generateCompSelection = () => {
  let randomNum = Math.floor(Math.random() * options.length);
  compSelection = gameOptions[randomNum];
  console.log(`Computer has selected ${compSelection}`);
  return compSelection;
};

//Change User Score
let changeScore = (result) => {
  if (result == "win") {
    userScore++;
    resultMessage.innerHTML = "YOU WIN";
  } else if (result == "lose" && userScore > 0) {
    userScore--;
    resultMessage.innerHTML = "YOU LOSE";
  } else if (result == "tie") {
    resultMessage.innerHTML = "TIE";
  }
};

//Compare user and comp selection
let compareResult = (userSelection, compSelection) => {
  if (userSelection == "rock" && compSelection.includes("scissors")) {
    console.log(`${userSelection} beats ${compSelection}`);
    changeScore("win");
  } else if (userSelection == "paper" && compSelection.includes("rock")) {
    console.log(`${userSelection} beats ${compSelection}`);
    changeScore("win");
  } else if (userSelection == "scissors" && compSelection.includes("paper")) {
    console.log(`${userSelection} beats ${compSelection}`);
    changeScore("win");
  } else if (compSelection.includes(userSelection)) {
    console.log(`${userSelection} and ${compSelection} are the same!`);
    changeScore("tie");
  } else {
    console.log(`${compSelection} beats ${userSelection} You lose!`);
    changeScore("lose");
  }
};

//Roulette / Delay the result

//put a for loop within a for loop and only change the image after a set time delay

/* let delay = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      theyPicked.src = `./images/icon-${gameOptions[i]}.svg`;
      theyPicked.parentElement.className = `selection-container ${gameOptions[i]}`;
      console.log(i);
    }, 1000);
    console.log(i);
  }
}; */

/* const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

for (let j = 0; j < 3; j++) {
  const delay = async () => {
    for (let i = 0; i < 3; i++) {
      await sleep(100);
      theyPicked.src = `./images/icon-${gameOptions[i]}.svg`;
      theyPicked.parentElement.className = `selection-container ${gameOptions[i]}`;
      console.log(i);
    }
  };
  delay();
  console.log("j" + j);
} */

//Hide gameboard after selection
let toggleGameBoard = () => {
  document.querySelector(".game-board").classList.toggle("hidden");
  document.querySelector(".results-board").classList.toggle("hidden");
  document.querySelector(".playagain-container").classList.toggle("hidden");
};

let togglePlayAgain = () => {
  document.querySelector(".playagain-container").classList.toggle("invisible");
};

let delayPlayAgain = () => {
  document.querySelector(".playagain-container").classList.toggle("invisible");
};

// Play again click event listener
document.querySelector(".play-again").addEventListener("click", () => {
  toggleGameBoard();
  togglePlayAgain();
});

let playagain = () => {};

//toggle modal
let toggleModal = () => {
  document.querySelector(".modal").classList.toggle("hidden");
};

document.querySelector(".rules-btn").addEventListener("click", toggleModal);
document.querySelector(".close-img").addEventListener("click", toggleModal);

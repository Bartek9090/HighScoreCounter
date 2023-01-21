import ScoreboardView from "./scoreboard/ScoreboardView.js";
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(
  root,
  "Dawid",
  "Mati",
  "Bartek",
  (player, direction) => {
    const difference = direction === "minus" ? -1 : 1;

//  
    if (player === "one") {
      playerOneScore = Math.max(playerOneScore + difference, 0);
      checkPlayerOne();
    } else if (player === "two") {
      playerTwoScore = Math.max(playerTwoScore + difference, 0);
      checkPlayerTwo();
    } else {
      playerThreeScore = Math.max(playerThreeScore + difference, 0);
      checkPlayerThree();
    }

    view.update(playerOneScore, playerTwoScore, playerThreeScore);
  }
);

// checking value for each player
const checkPlayerOne = () => {
  if (playerOneScore === 4) {
    displayAlert();
    if (playerOneScore > 3) {
      playerOneScore = 3;
    }
    return;
  } else if (playerTwoScore === 3 || playerThreeScore === 3) {
    if (playerOneScore > 2) {
      playerOneScore = 2;
      displayAlert();
    }else if (
		playerThreeScore === 3 &
		playerTwoScore === 2 ||
		playerThreeScore === 2 &
		playerTwoScore === 3
	  ) {
		playerOneScore = 1;
	  //   displayAlert();
	  }

}};

// checking player two
const checkPlayerTwo = () => {
  if (playerTwoScore === 4) {
    displayAlert();
    if (playerTwoScore > 3) {
      playerTwoScore = 3;
    }
    return;
  } else if (playerOneScore === 3 || playerThreeScore === 3) {
    if (playerTwoScore > 2) {
      playerTwoScore = 2;
      displayAlert();
    }else if (
		playerThreeScore === 3 &
		playerOneScore === 2 ||
		playerThreeScore === 2 &
		playerOneScore === 3
	  ) {
		playerTwoScore = 1;
	  //   displayAlert();
	  }

}};

// checking player three
const checkPlayerThree = () => {
  if (playerThreeScore === 4) {
    displayAlert();
    if (playerThreeScore > 3) {
      playerThreeScore = 3;
    }
    return;
  } else if (playerOneScore === 3 || playerTwoScore === 3) {
    if (playerThreeScore > 2) {
      playerThreeScore = 2;
      displayAlert();
    } else if (
      playerOneScore === 3 &
      playerTwoScore === 2 ||
      playerOneScore === 2 &
      playerTwoScore === 3
    ) {
      playerThreeScore = 1;
    //   displayAlert();
    }
  }
};


// alert trigger
function displayAlert() {
  alert("Please cheat on the game insted of stats.");
}
// function stopCounting() {
//   return;
// }

// display legend

const showBtn = document.querySelector(".box-2");

const legends = document.querySelector(".legends");

showBtn.addEventListener("click", () => {
  legends.classList.toggle("active");
});


// odpady

// Potrzebujemy funkcje która bedzie uniemożliwiała dodawanie czegos powyzej 3 punktów dla jednej osoby
// const checkPlayerOne = () => {
//   if (playerOneScore === 4) {
//     displayAlert();
// 	// stopCounting();
//   } else if (playerTwoScore === 3 || playerThreeScore === 3) {
//     if (playerOneScore === 2) {
// 		displayAlert();
// 		// stopCounting();

//     }
//   } else {
//     displayAlert();
//   }
// };

// Odpady || playerTwoScore === 2 & playerThreeScore === 3

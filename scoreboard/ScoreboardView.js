export default class ScoreboardView {
	constructor(root, playerOneName, playerTwoName, playerThreeName ,onControlButtonClick) {
		this.root = root;
		this.root.innerHTML = `
			<div class="scoreboard">
				<div class="scoreboardName scoreboardNameOne">${playerOneName}</div>
				<div class="scoreboardName scoreboardNameTwo">${playerTwoName}</div>
				<div class="scoreboardName scoreboardNameThree">${playerThreeName}</div>
				<div class="scoreboardScore" data-for-player="one">0</div>
				<div class="scoreboardScore" data-for-player="two">0</div>
				<div class="scoreboardScore" data-for-player="three">0</div>
				<div class="scoreboardControls" data-for-player="one">
					<button class="scoreboardControlButton">-</button>
					<button class="scoreboardControlButton">+</button>
				</div>
				<div class="scoreboardControls" data-for-player="two">
					<button class="scoreboardControlButton">-</button>
					<button class="scoreboardControlButton">+</button>
				</div>
				<div class="scoreboardControls" data-for-player="three">
					<button class="scoreboardControlButton">-</button>
					<button class="scoreboardControlButton">+</button>
				</div>
			</div>
		`;

		this.root.querySelectorAll(".scoreboardControlButton").forEach(controlButton => {
			controlButton.addEventListener("click", () => {
				const direction = controlButton.textContent === "-" ? "minus" : "plus";
				const player = controlButton.closest(".scoreboardControls").dataset.forPlayer;

				onControlButtonClick(player, direction);
			});
		});
	}

	update(playerOneScore, playerTwoScore, playerThreeScore ) {
		this.root.querySelector(".scoreboardScore[data-for-player='one']").textContent = playerOneScore;
		this.root.querySelector(".scoreboardScore[data-for-player='two']").textContent = playerTwoScore;
		this.root.querySelector(".scoreboardScore[data-for-player='three']").textContent = playerThreeScore;
	}
}
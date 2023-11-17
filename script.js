const validChoices = ["1", "2", "3"];
const alignments = ["rock", "paper", "scissors"];

const battles = {
  rock: {
    beats: "scissors",
    action: "smashes"
  },
  paper: {
    beats: "rock",
    action: "covers"
  },
  scissors: {
    beats: "paper",
    action: "cuts"
  }
};

function playRPS(choice) {
  const botChoice = Math.floor(Math.random() * 3);

  const playerBattle = battles[alignments[parseInt(choice) - 1]];
  const botBattle = battles[alignments[botChoice]];

  const playerAction = playerBattle.action;
  const botAction = botBattle.action;

  const playerBeats = playerBattle.beats;
  const botBeats = botBattle.beats;

  const botWord = alignments[botChoice];
  const playerWord = alignments[parseInt(choice) - 1];

  if (playerBeats === botWord) {
    console.log(`${playerWord.charAt(0).toUpperCase() + playerWord.slice(1)} ${playerAction} ${botWord}`);
    console.log("Player wins");
  } else if (botBeats === playerWord) {
    console.log(`${botWord.charAt(0).toUpperCase() + botWord.slice(1)} ${botAction} ${playerWord}`);
    console.log("Bot wins");
  } else if (botWord === playerWord) {
    console.log("Draw!");
  }
}

// Example usage:
// const choice = "1"; // You can pass the player's choice as an argument
// playRPS(choice);

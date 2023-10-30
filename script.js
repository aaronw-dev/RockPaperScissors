const validchoices = ["1", "2", "3"];
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
  const bot_choice = Math.floor(Math.random() * 3);

  const playerbattle = battles[alignments[parseInt(choice) - 1]];
  const botbattle = battles[alignments[bot_choice]];

  const playeraction = playerbattle.action;
  const botaction = botbattle.action;

  const playerbeats = playerbattle.beats;
  const botbeats = botbattle.beats;

  const bot_word = alignments[bot_choice];
  const player_word = alignments[parseInt(choice) - 1];

  if (playerbeats === bot_word) {
    console.log(`${player_word.charAt(0).toUpperCase() + player_word.slice(1)} ${playeraction} ${bot_word}`);
    console.log("Player wins");
  } else if (botbeats === player_word) {
    console.log(`${bot_word.charAt(0).toUpperCase() + bot_word.slice(1)} ${botaction} ${player_word}`);
    console.log("Bot wins");
  } else if (bot_word === player_word) {
    console.log("Draw!");
  }
}

// Example usage:
// const choice = "1"; // You can pass the player's choice as an argument
// playRPS(choice);

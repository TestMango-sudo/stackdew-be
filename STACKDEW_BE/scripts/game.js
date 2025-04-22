// import Phaser from "phaser";
//import GameScene from "../scenes/game1.js";
// import { documentId } from "firebase/firestore";

function startGame() {
  const game = new Phaser.Game(config);
  game.scene.start("GameScene");
}

function closeGame() {
  const gameContainer = document.getElementById("game-container");
  if (gameContainer) {
    gameContainer.innerHTML = ""; // Clear the game container
    game.destroy(true); // Destroy the Phaser game instance
  }
}
const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: "#2d2d2d",
  parent: "game-container",
  scene: [GameScene],
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

//export { startGame, closeGame };

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: "#2d2d2d",
  parent: "game-area",
  scene: [LoginScene, GameScene],
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

new Phaser.Game(config);

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {}

  create() {
    const tileSize = 32;
    const mapWidth = 25;
    const mapHeight = 25;

    const graphics = this.add.graphics();
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        graphics.fillStyle(0x228b22);
        graphics.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }

    this.player = this.add.rectangle(100, 100, 28, 28, 0xff0000);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(
      0,
      0,
      mapWidth * tileSize,
      mapHeight * tileSize
    );

    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys("W,A,S,D");
  }
  update() {
    const speed = 150;
    const body = this.player.body;
    body.setVelocity(0);

    if (this.cursors.left.isDown || this.keys.A.isDown) {
      body.setVelocityX(-speed);
    } else if (this.cursors.right.isDown || this.keys.D.isDown) {
      body.setVelocityX(speed);
    }

    if (this.cursors.up.isDown || this.keys.W.isDown) {
      body.setVelocityY(-speed);
    } else if (this.cursors.down.isDown || this.keys.S.isDown) {
      body.setVelocityY(speed);
    }

    body.velocity.normalize().scale(speed);
  }
}

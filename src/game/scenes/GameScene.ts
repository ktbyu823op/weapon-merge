import { Input, Scene } from "phaser";

export class GameScene extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  floor: Phaser.GameObjects.Rectangle;
  player: Phaser.GameObjects.Rectangle;
  wasd!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

  constructor() {
    super("Game");
  }

  create() {
    this.wasd = this.input.keyboard!.addKeys("W,A,S,D") as {
      W: Phaser.Input.Keyboard.Key;
      A: Phaser.Input.Keyboard.Key;
      S: Phaser.Input.Keyboard.Key;
      D: Phaser.Input.Keyboard.Key;
    };

    this.floor = this.add.rectangle(512, 738, 1024, 60, 0x008000);
    this.physics.add.existing(this.floor, true);

    this.player = this.add.rectangle(100, 500, 40, 100, 0xffffff);
    this.physics.add.existing(this.player);
    this.physics.add.collider(this.player, this.floor);
  }

  update(time: number, delta: number) {
    const speed: number = 200;

    const body = this.player.body as Phaser.Physics.Arcade.Body;

    if (this.wasd.A.isDown) {
      body.setVelocityX(-speed);
    } else if (this.wasd.D.isDown) {
      body.setVelocityX(speed);
    } else {
      body.setVelocityX(0);
    }

    if (body.touching.down && Input.Keyboard.JustDown(this.wasd.W)) {
      body.setVelocityY(-speed);
    }
  }
}
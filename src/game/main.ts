import { Boot } from './scenes/Boot';
import { GameScene } from './scenes/GameScene';
import { MainScene } from './scenes/MenuScene';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainScene,
        GameScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x:0,y:300},
            debug: true
        } 
    }
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;

import { LEVEL, OBJECT_TYPE} from "./konami";

// DOM Elements
const gameGrid = document.querySelector('#game')
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button')

// Game Constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80;//ms

//Inital Setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;


function gameOver(pacman, grid){


}

function checkCollision(pacman, ghosts) {

}

function gameLoop(pacman, ghosts){

}

function startGame() {

}
//Traversy Media with Weibenfalk


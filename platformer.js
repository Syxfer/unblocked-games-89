const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const gravity = 0.5;
const jumpForce = -10;

// Player properties
let playerX = 100;
let playerY = 200;
let playerVelocity = 0;
let playerWidth = 20;
let playerHeight = 20;

// Levels
const levels = [
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
];

let currentLevel = 0;

// Game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw level
  drawLevel(levels[currentLevel]);

  // Draw player
  ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

  // Update player physics
  playerVelocity += gravity;
  playerY += playerVelocity;

  // Check for collisions
  if (checkCollision(playerX, playerY, playerWidth, playerHeight)) {
    playerVelocity = 0;
  }

  // Check for win condition
  if (playerY < 0) {
    currentLevel++;
    if (currentLevel >= levels.length) {
      // Game over (win)
    } else {
      // Load next level
      playerX = 100;
      playerY = 200;
      playerVelocity = 0;
    }
  }

  // Request animation frame
  requestAnimationFrame(gameLoop);
}

// Draw level
function drawLevel(level) {
  for (let y = 0; y < level.length; y++) {
    for (let x = 0; x < level[y].length; x++) {
      if (level[y][x] === 1) {
        ctx.fillRect(x * playerWidth, y * playerWidth, playerWidth, playerWidth);
      }
    }
  }
}

// Check for collision with level tiles
function checkCollision(x, y, width, height) {
  for (let i = 0; i < levels[currentLevel].length; i++) {
    for (let j = 0; j < levels[currentLevel][i].length; j++) {
      if (levels[currentLevel][i][j] === 1 &&
          x + width > j * playerWidth &&
          x < (j + 1) * playerWidth &&
          y + height > i * playerWidth &&
          y < (i + 1) * playerWidth) {
        return true;
      }
    }
  }
  return false;
}

// Start the game
gameLoop();
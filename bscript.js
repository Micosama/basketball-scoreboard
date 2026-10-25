let homeScore = 0;
let guestScore = 0;

const homeScoreScreen = document.getElementById("homeScore");
const guestScoreScreen = document.getElementById("guestScore");

// For home scoreboard
function add1Home() {
  homeScore += 1;
  homeScoreScreen.textContent = homeScore;
}

function add2Home() {
  homeScore += 2;
  homeScoreScreen.textContent = homeScore;
}

function add3Home() {
  homeScore += 3;
  homeScoreScreen.textContent = homeScore;
}

// Guest Scoreboard
function add1Guest() {
  guestScore += 1;
  guestScoreScreen.textContent = guestScore;
}

function add2Guest() {
  guestScore += 2; 
  guestScoreScreen.textContent = guestScore;
}

function add3Guest() {
  guestScore += 3;
  guestScoreScreen.textContent = guestScore;
}

function resetScoreboard() {
  homeScore = 0;
  guestScore = 0;
  homeScoreScreen.textContent = 0;
  guestScoreScreen.textContent = 0;
}
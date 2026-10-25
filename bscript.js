let homeScore=0;
let guestScore=0;

const homeScoreScreen= document.getElementById("homeScore");
const guestScoreScreen= document.getElementById("guestScore");

//for home scoreboard
function add1Home() {
  homeScore += 1;
  homeScoreDisplay.textContent = homeScore;
}

function add2Home() {
  homeScore += 2;
  homeScoreDisplay.textContent = homeScore;
}

function add3Home() {
  homeScore += 3;
  homeScoreDisplay.textContent = homeScore;
}

// Guest Scoreboard
function add1Guest() {
  guestScore += 1;
  guestScoreDisplay.textContent = guestScore;
}

function add2Guest() {
  guestScore += 2; 
  guestScoreDisplay.textContent = guestScore;
}

function add3Guest() {
  guestScore += 3;
  guestScoreDisplay.textContent = guestScore;
}

function resetScoreboard(){
    homeScore = 0;
    guestScore = 0;
    homeScoreDisplay.textContent = 0;
    guestScoreDisplay.textContent = 0;
}


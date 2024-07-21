let scoreMeterA = document.getElementById("scoreMeterA");
let scoreMeterB = document.getElementById("scoreMeterB");
let scoreValueA = document.getElementById("scoreValueA");
let scoreValueB = document.getElementById("scoreValueB");
let scoreA = 0;
let scoreB = 0;
function increaseScore(id) {
  if (id == 1) {
    scoreA += 5;
    if (scoreA <= 100) {
      scoreMeterA.value = scoreA;
      scoreValueA.innerText = scoreA;
    }
  } else {
    scoreB += 5;
    if (scoreB <= 100) {
      scoreMeterB.value = scoreB;
      scoreValueB.innerText = scoreB;
    }
  }
}

function resetScore() {
  scoreA = 0;
  scoreB = 0;
  scoreMeterB.value = 0;
  scoreValueB.innerText = 0;
  scoreMeterA.value = 0;
  scoreValueA.innerText = 0;
}

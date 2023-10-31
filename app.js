// Тоглогчийг ээлжийг хадгалах хувьсагч
// player1 = 0, player2 = 1;

let activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch

let srores = [0,0];

// Toglogchiin onoog hadgalah

let roundScore = 0;

// Shoonii buusan taliig hadgalah function

let dice = Math.ceil(Math.random()*6);

//<div class="player-score" id="score-0">43</div>
window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#score-1').textContent = 0;

window.document.querySelector('#current-0').textContent = 0;
window.document.querySelector('#current-1').textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log('Shoo: ',dice);

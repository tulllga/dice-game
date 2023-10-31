// Тоглогчийг ээлжийг хадгалах хувьсагч
// player1 = 0, player2 = 1;

let activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch

let srores = [0,0];

// Toglogchiin onoog hadgalah

let roundScore = 0;

// Shoonii buusan taliig hadgalah function

//<div class="player-score" id="score-0">43</div>
window.document.getElementById('score-0').textContent = 0;
window.document.getElementById('score-1').textContent = 0;

window.document.getElementById('current-0').textContent = 0;
window.document.getElementById('current-1').textContent = 0;

let diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener('click', function(){
    let diceNumber = Math.ceil(Math.random()*6);
    console.log(diceNumber);

    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = 'dice-' + diceNumber + '.png';
    
})





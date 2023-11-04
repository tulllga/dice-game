// Тоглогчийг ээлжийг хадгалах хувьсагч
// player1 = 0, player2 = 1;
let activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
let srores = [0,0];

// Toglogchiin onoog hadgalah
let roundtScore = 0;
//let roundtScore = 0;


// Shoonii buusan taliig hadgalah function
window.document.getElementById('score-0').textContent = 0;
window.document.getElementById('score-1').textContent = 0;

window.document.getElementById('current-0').textContent = 0;
window.document.getElementById('current-1').textContent = 0;

let diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener('click', function(){

    //1-6 dotorhi sanamsargui neg too gargaj avna
    let diceNumber = Math.ceil(Math.random()*6);

    //Shoonii zurgiig web deer gargaj irne
    document.querySelector(".dice").style.display = "block";

    //Buusan sanamsargui toond hargalzah shoonii zurgiig haruulna
    document.querySelector(".dice").src = 'dice-' + diceNumber + '.png';

    //1s yaltai bol Toglogchiin eeljiin onoog uurchluh
    if(diceNumber !== 1){
        roundtScore = roundtScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundtScore;
    }else{
        //Toglogchiin eeljiin onoog 0 bolgono
        document.getElementById('current-' + activePlayer).textContent = 0;
        roundtScore = 0;

        //Toglogchiin eeljiig soli
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        //ulaan tsegiig shiljuuleh
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        //shoog tur alga bolgoh
        diceDom.style.display = "none";
    }


})





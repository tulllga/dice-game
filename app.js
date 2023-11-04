//global huvisagchid

//idvehtei toglogch
let activePlayer;

//tsugluulsan onoo
let scores;

//togloltiin onoo
let roundtScore;

//shoonii zurgiig uzuuleh emlentiig domoos avchirna
let diceDom = document.querySelector(".dice");

//togloom ehluuleh
initGames();

//togloom ehleh
function initGames(){
    // huvisagchdiin utgiig 0 bolgoh

    activePlayer = 0;

    // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
    srores = [0,0];

    // Toglogchiin onoog hadgalah
    roundtScore = 0;
    //let roundtScore = 0;


    // Shoonii buusan taliig hadgalah function
    window.document.getElementById('score-0').textContent = 0;
    window.document.getElementById('score-1').textContent = 0;

    window.document.getElementById('current-0').textContent = 0;
    window.document.getElementById('current-1').textContent = 0;

    //toglochdiin neriin haruulah
    document.getElementById('name-0').textContent = "Player 1"
    document.getElementById('name-1').textContent = "Player 2"

    //new game button daragdah ved winner effect arilah yostoi
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    
    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style.display = "none";
}

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
        swichToNextPlayer();
    }

});

//hold button event listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    //Toglogchiin eeljiin onoog ooriin onoond nemj ugnu
    srores[activePlayer] = srores[activePlayer] + roundtScore;

     //delgetsiin undsen onoog uurchlunu
     document.getElementById('score-' + activePlayer).textContent = srores[activePlayer];

    //toglogchiin hojson esehiig shalgah 
    if(srores[activePlayer] >= 10){
        //winner-g hojson toglogchiin nernii orond gargana
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')

        //togloomiig zogsooh
    }else {
        //eelj solih function
        swichToNextPlayer();
    }
});

//eelj solih function
function swichToNextPlayer(){
    //eeljiin onoog 0 bolgono
    roundtScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0'

    //eeljiig solino
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

//new game button eventlister
document.querySelector('.btn-new').addEventListener('click', initGames)






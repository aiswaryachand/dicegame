let currentPlayer = 1; 
let score1 = 0; 
let score2 = 0; 
function rolldice(player) {
  
    const diceValue = Math.floor(Math.random() * 6) + 1; 
    const diceImage = document.getElementById('dice-image');

    diceImage.src = `./image/dice${diceValue}.png`;

    if (currentPlayer === 1) {
        score1 += diceValue;
        document.getElementById('Score-1').innerText = score1;
        if (score1 >= 30) {
            alert('Player-1 wins!');
            reset(); 
            return;
        }
    } else {
        score2 += diceValue;
        document.getElementById('Score-2').innerText = score2;
        if (score2 >= 30) {
            alert('Player-2 wins!');
            reset(); 
            return;
        }
    }

    // Switch to the next player
    currentPlayer = 3 - currentPlayer;
    document.getElementById('Player').innerText = `Player-${currentPlayer} to Play`;
}

function reset() {
   
    score1 = 0;
    score2 = 0;
    document.getElementById('Score-1').innerText = '0';
    document.getElementById('Score-2').innerText = '0';

    const diceImage = document.getElementById('dice-image');
    diceImage.src = './image/dice1.png';


    currentPlayer = 1;
    document.getElementById('Player').innerText = 'Player-1 to Play';
}
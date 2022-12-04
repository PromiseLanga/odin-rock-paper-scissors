let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const arrChoices = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrChoices[randomNum]
    return compChoice

}
console.log(getComputerChoice ());
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Paper' && computerSelection === 'Paper'){
        return "Its a tie, you both picked Paper";
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        return "Its a tie, you both picked Rock";
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        compScore++
        return "Its a tie, you both picked Scissors";
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    }
    else if( playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        compScore++
        return 'You win! Scissors cut Paper';
    }
    else if  (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        compScore++
        return 'You lose! Scissors cuts Paper'
    }
    else if  (playerSelection === 'Rock' && computerSelection === 'Paper'){
        playerScore++
        return 'You lose! Paper beats Rock'
    }

        
            }

    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    console.log('1', playerSelection, '2',computerSelection)


    function game() {
        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors')
            console.log('1',playRound(playerSelection, computerSelection));
        }
        if ( playerScore > compScore) {
            return " You win!";
        }
        else if (playerScore < compScore) {
            return "You lose!";
        }
        else {
            return " It's a tie"
        }
    }
    
    console.log(game())
    
    

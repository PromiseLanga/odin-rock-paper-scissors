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
        return "Its a tie, you both picked Scissors";
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    }
    else if( playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return 'You win! Scissors cut Paper';
    }
    else if  (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return 'You lose! Scissors cuts Paper'
    }
    else if  (playerSelection === 'Rock' && computerSelection === 'Paper'){
        return 'You lose! Paper beats Rock'
    }

        
            }

    

    

    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
    

console.log('Play a game of Rock Paper scissors vs the computer. Make selection below:')
let playerInput = prompt();
let computerInput = computerPlayed();
playOneGame(playerInput, computerInput);


function computerPlayed() {
    let computerChoice;
    let computerHand = Math.random();
    if(computerHand < .33)
        {
            computerChoice = 'Rock';
            
        }
    else if(computerHand <= .66 && computerHand >= .33){
        computerChoice = 'Paper'
        }
        else if(computerHand > .66 && computerHand < 1)
        computerChoice = 'Scissors'
        else
            console.log("something went wrong.")

    return computerChoice;
}

function playOneGame(playerSelection, computerSelection) {

    let outcome;

    switch(playerSelection.toLowerCase())
    {
        case 'rock':
            if(computerSelection == 'Rock')
                {
                    outcome = 'tie';
                    console.log('Tie Match!');
                }
            else if(computerSelection == 'Paper')
            {
                outcome = 'computerWin';
                console.log('You Lose! Paper beats Rock');
            }
            else   
            {    outcome = 'playerWin';
                console.log('You Win! Rock beats Scissors');}
                break;

        case 'paper':
            if(computerSelection == 'Rock')
            {
                outcome = 'playerWin';
                console.log('You Win! Paper beats Rock');
            }
        else if(computerSelection == 'Paper')
        {
            outcome = 'tie';
            console.log('Tie Match');
        }
        else   
{            outcome = 'computerWin';
            console.log('You Lose! Scissors beats Paper');}
            break;

        case 'scissors':
            if(computerSelection == 'Rock')
            {
                outcome = 'computerWin';
                console.log('You Lose! Rock beats Scissors');
            }
        else if(computerSelection == 'Paper')
        {
            outcome = 'playerWin';
            console.log('You Win! Scissors beats Paper');
        }
        else   
{            outcome = 'tie';
            console.log('Tie Match!');}
            break;
    }
   
    return outcome;
}
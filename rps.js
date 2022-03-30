console.log('Play a game of Rock Paper scissors vs the computer. Make selection below:')
game();

//Function to return random computer choice between rock paper and scissors
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

//Takes in player selection and computerPlayed's return value, switch case 
//for players selection and then if else to determine winner
//returns one of three values (tie, playerWin, computerWin)
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
                {   
                    outcome = 'playerWin';
                    console.log('You Win! Rock beats Scissors');
                }
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
                {         
                outcome = 'computerWin';
                console.log('You Lose! Scissors beats Paper');
                }
        break;

        case 'scissor':
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
                {
                outcome = 'tie';
                console.log('Tie Match!');
                }
        break;
        }
       
        return outcome;
    }
    
//Plays a 5 round game
function game() {

    let computerWins = 0;
    let playerWins = 0;
    let result;
    let playerCancel = false;
    let computerInput = computerPlayed();
    let playerInput = prompt();

    //Loop to stop the game at cancellation or when best of 5 is reached
    do
    {
        if(playerInput === null)
            {
            playerCancel = true;
            }
        else{
            result = playOneGame(playerInput, computerInput);

        if(result === 'playerWin')
           { 
            playerWins++;
            console.log('The current score is Player: ' + playerWins + ' Computer: ' + computerWins )
            }
        else if(result === 'computerWin')
           { 
            computerWins++
            console.log('The current score is Player: ' + playerWins + ' Computer: ' + computerWins )
            }
        else if(result === 'tie')
            console.log('The current score is Player: ' + playerWins + ' Computer: ' + computerWins )
        else
            {
            console.log('Something went wrong. Make sure you are spelling correctly')
            }

            computerInput = computerPlayed();
            playerInput = prompt();
        }
    } while (playerWins < 3 && computerWins < 3 && !playerCancel)

    if(playerCancel == true)
        console.log('No input received. To start a new game, refresh the page')
    else
        console.log('The game is over. Final Score -> Player: ' + playerWins + ' Computer: ' + computerWins)

}
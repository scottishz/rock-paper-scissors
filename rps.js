

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
                    outcomeMessage.textContent = 'Tie Match!';
                }
            else if(computerSelection == 'Paper')
                {
                    outcome = 'computerWin';
                    outcomeMessage.textContent = 'You Lose! Paper beats Rock';
                }
            else   
                {   
                    outcome = 'playerWin';
                    outcomeMessage.textContent = 'You Win! Rock beats Scissors';
                }
        break;

        case 'paper':
            if(computerSelection == 'Rock')
                {
                    outcome = 'playerWin';
                    outcomeMessage.textContent = 'You Win! Paper beats Rock';
                }
            else if(computerSelection == 'Paper')
                {
                    outcome = 'tie';
                    outcomeMessage.textContent = 'Tie Match';
                }
            else   
                {         
                outcome = 'computerWin';
                outcomeMessage.textContent = 'You Lose! Scissors beats Paper';
                }
        break;

        case 'scissor':
        case 'scissors':
                if(computerSelection == 'Rock')
                {
                    outcome = 'computerWin';
                    outcomeMessage.textContent = 'You Lose! Rock beats Scissors';
                }
            else if(computerSelection == 'Paper')
                {
                outcome = 'playerWin';
                outcomeMessage.textContent = 'You Win! Scissors beats Paper';
                }
            else   
                {
                outcome = 'tie';
                outcomeMessage.textContent = 'Tie Match!';
                }
        break;
        }
       
        return outcome;
    }


        let playerScore = 0;
        let computerScore = 0;

        const container = document.querySelector('.output');
        
        const outcomeMessage = document.createElement('div');
        outcomeMessage.classList.add('current-game');
        outcomeMessage.textContent = 'Select a button to begin a game';
        
        const currentScore = document.createElement('div');
        currentScore.classList.add('current-score');
        currentScore.textContent = ('Player: ' + playerScore + ' Computer: ' + computerScore);
        
        container.appendChild(outcomeMessage);
        container.appendChild(currentScore);

        const rockBtn = document.querySelector('.rock'); 
 
        rockBtn.addEventListener('click', function(){        
           


            if(playerScore < 3 && computerScore < 3)
            {
                let outcome = playOneGame('rock', computerPlayed())
                if(outcome === 'playerWin')

                    playerScore++;
                else if(outcome === 'computerWin')

                    computerScore++;

                    currentScore.textContent = ('Player: ' + playerScore + ' Computer: ' + computerScore);
            }
           
           
            if(playerScore == 3)
            {
                console.log('Player wins the Best out of 5')
                
                playerScore = 0;
                computerScore = 0;
            }    
            else if(computerScore == 3)
            {
                console.log('Computer wins the Best of 5')
                playerScore = 0;
                computerScore = 0;
            }


            
            console.log(playerScore);
            console.log(computerScore);
        })

        const paperBtn = document.querySelector('.paper');
 
        paperBtn.addEventListener('click', function(){        
            playOneGame('paper', computerPlayed())
            console.log(playerScore);
            console.log(computerScore);
        })


        const scissorBtn = document.querySelector('.scissors');

        scissorBtn.addEventListener('click', function(){
            playOneGame('scissor', computerPlayed())
        })

        
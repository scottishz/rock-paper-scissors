

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


        let playerScore = 0;
        let computerScore = 0;
                            
        const rockBtn = document.querySelector('.rock'); 
 
        rockBtn.addEventListener('click', function(){        
           
            if(playerScore < 3 && computerScore < 3)
            {
                let outcome = playOneGame('rock', computerPlayed())
                if(outcome === 'playerWin')
                    playerScore++;
                else if(outcome === 'computerWin')
                    computerScore++;
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

        
function getComputerChoice()
{
    let x = Math.floor(Math.random()*3)+1;
    if(x === 1)
    {
        return "rock";
    }
    else if(x === 2){
        return "paper";
    }
    else{
        return "pencil";
    }
}

function getHumanChoice()
{
    let x = prompt("Enter your Choice(rock, paper, pencil): ");
    let human = x.toLowerCase();
    let z = human;
    let k = 0;
    while(z !== "rock" && z !== "paper" && z!=="pencil"){
        let y = prompt("Enter a valid Choice(rock, paper, pencil): ");
        z = y.toLowerCase();
        k = 1;
    }
    return z;
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(human, computer)
    {
        if(human === "paper" && computer === "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if(human === "rock" && computer === "pencil"){
            console.log("You win! Rock beats Pencil.")
            humanScore++;
        }
        else if(human === "pencil" && computer === "paper"){
            console.log("You win! Pencil beats Paper.");
            humanScore++;
        }
        else if(human === "paper" && computer === "pencil"){
            console.log("You lose! Pencil beats Paper");
            computerScore++;
        }
        else if(human === "rock" && computer === "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else if(human === "rock" && computer === "rock"){
            console.log("Tie! Both Rocks.");
        }
        else if(human === "pencil" && computer === "pencil"){
            console.log("Tie! Both Pencils.");
        }
        else if(human === "paper" && computer === "paper"){
            console.log("Tie! Both Papers.");
        }
        else if(human === "pencil" && computer === "rock"){
            console.log("You lose! Rock beats Pencil.");
            computerScore++;
        }
        else 
        {
            console.log("Error occured");
        }
    }

    for(let i = 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore){
        console.log("You win! Yay!");
    }
    else if(computerScore > humanScore){
        console.log("You lost! We'll forget this start a new round.");
    }
    else{
        console.log("It's a tie! Do better next time.");
    }
}

let x = playGame();
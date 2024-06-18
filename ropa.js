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
        return "scissor";
    }
}

function getHumanChoice()
{
    let x = prompt("Enter your Choice(rock, paper, scissor): ");
    let human = x.toLowerCase();
    let z = human;
    let k = 0;
    while(z !== "rock" && z !== "paper" && z!=="scissor"){
        alert("INVALID CHOICE.");
        let y = prompt("Enter a valid Choice(rock, paper, scissor): ");
        z = y.toLowerCase();
        k = 1;
    }
    return z;
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(human)
    { 
        const body = document.querySelector(".new");
        const game = document.querySelector(".game");
        game.innerText = '';
        let computer = getComputerChoice();
        const roundwin = document.querySelector(".roundwin");
        if(human === "paper" && computer === "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
            roundwin.innerText = "You Win!";
            roundwin.style.cssText = "color: rgb(21, 117, 228);"
        }
        else if(human === "rock" && computer === "scissor"){
            console.log("You win! Rock beats Scissor.")
            humanScore++;
            roundwin.innerText = "You Win!";
            roundwin.style.cssText = "color: rgb(21, 117, 228);"
        }
        else if(human === "scissor" && computer === "paper"){
            console.log("You win! Scissor beats Paper.");
            humanScore++;
            roundwin.innerText = "You Win!";
            roundwin.style.cssText = "color: rgb(21, 117, 228);"
        }
        else if(human === "paper" && computer === "scissor"){
            console.log("You lose! Scissor beats Paper");
            computerScore++;
            roundwin.innerText = "You Lose!";
            roundwin.style.cssText = "color: rgb(198, 27, 27);"
        }
        else if(human === "rock" && computer === "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
            roundwin.innerText = "You Lose!";
            roundwin.style.cssText = "color: rgb(198, 27, 27);"
        }
        else if(human === "rock" && computer === "rock"){
            console.log("Tie! Both Rocks.");
            roundwin.innerText = "Tie!";
            roundwin.style.cssText = "color: #cacaca;"
        }
        else if(human === "scissor" && computer === "scissor"){
            console.log("Tie! Both Scissors.");
            roundwin.innerText = "Tie!";
            roundwin.style.cssText = "color: #cacaca;"
        }
        else if(human === "paper" && computer === "paper"){
            console.log("Tie! Both Papers.");
            roundwin.innerText = "Tie!";
            roundwin.style.cssText = "color: #cacaca;"
        }
        else if(human === "scissor" && computer === "rock"){
            console.log("You lose! Rock beats Scissor.");
            computerScore++;
            roundwin.innerText = "You Lose!";
            roundwin.style.cssText = "color: rgb(198, 27, 27);"
        }
        else 
        {
            console.log("Error occured");
        }
        const husc = document.querySelector(".husc");
        husc.innerText = `${humanScore}`;
        const huch = document.querySelector(".huch");
        huch.innerText = `${human.toUpperCase()}`
        const compsc = document.querySelector(".compsc");
        const compch = document.querySelector(".compch");
        compsc.innerText = `${computerScore}`;
        compch.innerText = `${computer.toUpperCase()}`
        if(humanScore === 5){
            game.innerText = "Game Over\nYOU WIN!";
            let btn = document.createElement("button");
            btn.innerText = "NEW GAME";
            body.appendChild(btn);
            btn.addEventListener("click", function(e){
                husc.innerText = 0;
                compsc.innerText = 0;
                huch.innerText = '';
                compch.innerText = '';
                roundwin.innerText = '';
                game.innerText = '';
                body.removeChild(e.target);
            })
            humanScore = 0;
            computerScore = 0;
        }
        else if(computerScore === 5){
            game.innerText = "Game Over\nYOU LOSE!";
            let btn = document.createElement("button");
            btn.innerText = "NEW GAME";
            body.appendChild(btn);
            btn.addEventListener("click", function(e){
                husc.innerText = 0;
                compsc.innerText = 0;
                huch.innerText = '';
                compch.innerText = '';
                roundwin.innerText = '';
                game.innerText = '';
                body.removeChild(e.target);
            })
            computerScore = 0;
            computerScore = 0;
        }
    }

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissor = document.querySelector(".scissor");

    rock.addEventListener("click", function(){
        playRound("rock");
    });
    paper.addEventListener("click", function(){
        playRound("paper");
    });
    scissor.addEventListener("click", function(){
        playRound("scissor");
    });

    
}

let x = playGame();
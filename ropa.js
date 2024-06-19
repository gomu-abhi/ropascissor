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
        return "scissors";
    }
}

function getHumanChoice()
{
    let x = prompt("Enter your Choice(rock, paper, scissors): ");
    let human = x.toLowerCase();
    let z = human;
    let k = 0;
    while(z !== "rock" && z !== "paper" && z!=="scissors"){
        alert("INVALID CHOICE.");
        let y = prompt("Enter a valid Choice(rock, paper, scissors): ");
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
        if(humanScore === 5 || computerScore === 5){
            return;
        }
        const body = document.querySelector(".new");
        const game = document.querySelector(".game");
        game.innerText = 'First to reach 5 points WIN';
        let computer = getComputerChoice();
        const roundwin = document.querySelector(".roundwin");
        if(human === "paper" && computer === "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
            roundwin.innerText = "You Win!";
            roundwin.style.cssText = "color: rgb(21, 117, 228);"
        }
        else if(human === "rock" && computer === "scissors"){
            console.log("You win! Rock beats Scissors.")
            humanScore++;
            roundwin.innerText = "You Win!";
            roundwin.style.cssText = "color: rgb(21, 117, 228);"
        }
        else if(human === "scissors" && computer === "paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore++;
            roundwin.innerText = "You Win!";
            roundwin.style.cssText = "color: rgb(21, 117, 228);"
        }
        else if(human === "paper" && computer === "scissors"){
            console.log("You lose! Scissors beats Paper");
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
        else if(human === "scissors" && computer === "scissors"){
            console.log("Tie! Both Scissors.");
            roundwin.innerText = "Tie!";
            roundwin.style.cssText = "color: #cacaca;"
        }
        else if(human === "paper" && computer === "paper"){
            console.log("Tie! Both Papers.");
            roundwin.innerText = "Tie!";
            roundwin.style.cssText = "color: #cacaca;"
        }
        else if(human === "scissors" && computer === "rock"){
            console.log("You lose! Rock beats Scissors.");
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
        if(human === "rock"){
            huch.innerText = `✊`;
        }
        else if (human === "scissors"){
            huch.innerText = '✌️'
        }
        else if(human === "paper"){
            huch.innerText = '✋';
        }
        const compsc = document.querySelector(".compsc");
        const compch = document.querySelector(".compch");
        if(computer === "rock"){
            compch.innerText = `✊`;
        }
        else if (computer === "scissors"){
            compch.innerText = '✌️'
        }
        else if(computer === "paper"){
            compch.innerText = '✋';
        }
        compsc.innerText = `${computerScore}`;
        if(humanScore === 5){
            game.innerText = "Game Over\nVICTORY BELONGS TO US.";
            let btn = document.createElement("button");
            btn.innerText = "NEW GAME";
            btn.classList.add("button-54");
            // btn.style.backgroundColor = "hsl(0, 0%, 79%)";
            // btn.style.color= "black";
            // btn.style.fontSize = "35px";
            // btn.style.border = "solid 2px black"
            body.appendChild(btn);
            btn.addEventListener("click", function(e){
                humanScore = 0;
                computerScore =0;
                husc.innerText = 0;
                compsc.innerText = 0;
                huch.innerText = '';
                compch.innerText = '';
                roundwin.innerText = '';
                game.innerText = 'First to reach 5 points WIN';
                body.removeChild(e.target);
            })
        }
        else if(computerScore === 5){
            game.innerText = "Game Over\nYOU LOST (TO A BOT)!";
            let btn = document.createElement("button");
            btn.innerText = "NEW GAME";
            btn.classList.add("button-54");
            // btn.style.backgroundColor = "hsl(0, 0%, 79%)";
            // btn.style.color= "black";
            // btn.style.fontSize = "35px";
            // btn.style.border = "solid 2px black"
            body.appendChild(btn);
            btn.addEventListener("click", function(e){
                husc.innerText = 0;
                compsc.innerText = 0;
                humanScore = 0;
                computerScore = 0;
                huch.innerText = '';
                compch.innerText = '';
                game.innerText = 'First to reach 5 points WIN';
                roundwin.innerText = '';
                body.removeChild(e.target);
            })
        }
    }

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener("click", function(){
        playRound("rock");}
    );
    paper.addEventListener("click", function(){
        playRound("paper");}
    );
    scissors.addEventListener("click", function(){
        playRound("scissors");}
    );

    
}

let x = playGame();
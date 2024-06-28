const choices = ['rock','paper','scissors'];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");

const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
let p_score = 0;
let c_score = 0;

function playgame(playerchoices){
    const computerchoices = choices[Math.floor(Math.random() * 3)];
    console.log(playerdisplay);
    let result = "";
    
    if(playerchoices === computerchoices){
        result = "It's A Tie!";
    }
    else{ 
        switch(playerchoices){
            case "rock" :
               result = (computerchoices === "scissors")? 'You Win!': 'You Lose!';
               break;
            case "paper" :
               result = (computerchoices === "rock")? "You Win!": "You Lose!";
               break;
            case "scissors" :
               result =  (computerchoices === "paper")? "You Win!": "You Lose!";
               break;
        }
    }
    
    playerdisplay.textContent = ` ${playerchoices}`;
    computerdisplay.textContent = ` ${computerchoices}`;
    resultdisplay.textContent = result;


    // resultdisplay.classList.remove("green,red");

    switch(result){
        case "You Win!" : 
            // resultdisplay.classList.add("green"); 
            p_score++; 
            playerscore.textContent = p_score;
            break; 
        case "You Lose!" : 
            // resultdisplay.classList.add("red");
            c_score++; 
            computerscore.textContent = c_score;
            break;   
    }

}
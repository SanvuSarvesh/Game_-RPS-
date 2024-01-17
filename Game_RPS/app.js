// let userScore = 0;
// let systemScore = 0;
// var playerName = "";
// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// //const playerName = document.getElementById("#name").value();
// const thankingMsg = document.querySelector("#thankingMsg");

// //const enter = document.querySelector("#submit");

// //console.log("----> enter : ", enter);
// // function getValue(){
// //     const playerName = document.getElementById("username");
// //     console.log("---->player name : ", playerName);
// // }


// document.getElementById("submit").addEventListener("click", function() {
//     var inputElement = document.getElementById("username").value();

//     // Get the value of the input element
//     //playerName = inputElement.value;
    
//     console.log("Input value: " + inputElement);
// });

// // console.log(playerName);
// console.log(thankingMsg);

// const userScorePara = document.querySelector("#user-score");
// const systemScorePara = document.querySelector("#system-score");

// const generateSystemChoice = () => {
//     const options = ["rock", "paper", "scissor"];
//     const randomIdx = Math.floor(Math.random() * 3);
//     return options[randomIdx];
// }

// const drawGame = () => {
//     console.log("Game Draw.");
//     msg.innerText = "Game was Draw. Play again.";
//     msg.style.background = "yellow";
//     msg.style.color = "black";
//     // const thankingMessage = `Thank You ${playerName} for playing this Game.`;
//     // console.log(thankingMessage);
// }

// const showWinner = (userWin) => {
//     if(userWin){
//         console.log("You won!!!");
//         userScore++;
//         msg.innerText = "You Won!!!"
//         msg.style.background = "green";
//         userScorePara.innerText = userScore;
//     }else{
//         console.log("You lost!!!");
//         systemScore++;
//         msg.innerText = "You Lost!!!"
//         msg.style.background = "red";
//         systemScorePara.innerText = systemScore;
//     }
//     const thankingMessage = `Thank You ${playerName} for playing this Game. `;
//     console.log(thankingMessage);
// }

// const playGame = (userChoice) => {
//     const systemchoice = generateSystemChoice();
//     console.log("----> userChoice is : ",userChoice);
//     console.log("----> system choice : ",systemchoice);
//     if(userChoice === systemchoice){
//         drawGame();
//     }else{
//         let userWin = true;
//         if(userChoice === "rock"){
//             // System choice :- paper,scissor
//             userWin = systemchoice === "paper" ? false : true;
//         }else if(userChoice === "paper"){
//             // System choice :- rock,scissor
//             userWin = systemchoice === "scissor" ? false : true;
//         }else{
//             // System choice :- rock,paper
//             userWin = systemchoice === "rock" ? false : true;
//         }
//         showWinner(userWin);
//     }
// }

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         const systemchoice = generateSystemChoice();

//         //console.log("Current selected choice is ", userChoice);
//         playGame(userChoice);

//     })
    
// })



let userScore = 0;
let systemScore = 0;
let playerName = "";

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const thankingMsg = document.querySelector("#thankingMsg");
const enter = document.querySelector("#submit");
const userScorePara = document.querySelector("#user-score");
const systemScorePara = document.querySelector("#system-score");

// enter.addEventListener("click", () => {
//     playerName = document.getElementById("name").value;
//     console.log(playerName);

//     const thankingMessage = `Thank You ${playerName} for playing this Game.`;
//     console.log(thankingMessage);
// });

document.addEventListener("DOMContentLoaded", () => {
    const enter = document.querySelector("#submit");
    const playerNameInput = document.getElementById("username");

    enter.addEventListener("click", () => {
        playerName = playerNameInput.value();
        console.log(playerName);

        const thankingMessage = `Thank You ${playerName} for playing this Game.`;
        console.log(thankingMessage);
    });
});


const generateSystemChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Game Draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.background = "yellow";
    msg.style.color = "black";
    const thankingMessage = `Thank You ${playerName} for playing this Game.`;
    console.log(thankingMessage);
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You won!!!");
        userScore++;
        msg.innerText = "You Won!!!"
        msg.style.background = "green";
        userScorePara.innerText = userScore;
    } else {
        console.log("You lost!!!");
        systemScore++;
        msg.innerText = "You Lost!!!"
        msg.style.background = "red";
        systemScorePara.innerText = systemScore;
    }
    const thankingMessage = `Thank You ${playerName} for playing this Game.`;
    console.log(thankingMessage);
}

const playGame = (userChoice) => {
    const systemchoice = generateSystemChoice();
    console.log("----> userChoice is : ", userChoice);
    console.log("----> system choice : ", systemchoice);
    if (userChoice === systemchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = systemchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = systemchoice === "scissor" ? false : true;
        } else {
            userWin = systemchoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

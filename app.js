const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const buttons = document.querySelectorAll(".buttons");
const userImage = document.querySelector(".userImage")
const compImage = document.querySelector(".compImage")
const resultPopUp = document.querySelector(".result");
const finalMessage = document.querySelector("#finalMessage");
const playAgain = document.querySelector("#playAgainButton")
let userResult=0;
let compResult=0;

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",(e)=>{
        displayImages(e.target.id)
        // checkResult()
    })
}


function displayImages(anything){
    let possibility = ["rock","paper","scissors"];
    let random = randomNumbers();
    if(anything=="rock"){
        userImage.innerHTML=`<img src="./assets/rock-hand.png" alt="" class="play-image">`
    }
    else if(anything=="paper"){
        userImage.innerHTML=`<img src="./assets/paper-hand.png" alt="" class="play-image">`
    }
    else if(anything=="scissors"){
        userImage.innerHTML=`<img src="./assets/scissors-hand.png" alt="" class="play-image">`
    }
    compImage.innerHTML=`<img src="./assets/${possibility[random]}-hand.png" alt="" class="play-image">`
    updateResult(anything,possibility[random])
}

function randomNumbers(){
    return Math.floor(Math.random()*3)
}


`class="play-image"`

function updateResult(user,comp){
    if(user=="rock" && comp=="scissors" || user=="scissors" && comp=="paper" || user=="paper" && comp=="rock"){
        userResult++;
        userScore.innerText=userResult;
    }
    else if(comp=="rock" && user=="scissors" || comp=="scissors" && user=="paper" || comp=="paper" && user=="rock"){
        compResult++;
        compScore.innerText=compResult;
    }
    checkResult()
}

function checkResult(){
    if(userResult==5 || compResult==5){
        buttons.forEach((e)=>{
            e.style.display = "none";
        })
        resultPopUp.style.visibility = "visible";
        
    }
    if(userResult==5 && compResult==5){
        finalMessage.innerHTML="<h2>It's a draw</h2>";
        console.log("1")
    }
    else if(userResult==5 && compResult<userResult){
        finalMessage.innerHTML="<h2>You Won</h2>";
        console.log("2")

    }
    else if(compResult==5 && userResult<compResult){
        finalMessage.innerHTML="<h2>Computer Won</h2>";
        console.log("3")
    }
    console.log(userResult)
}

playAgain.addEventListener("click",()=>{
    location.reload()
})
// resultPopUp.style.visibility = "visible";
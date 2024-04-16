let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow","red","green","purple"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started!");    //so that this msg comes only when game is started
        started = true;

        levelUp();
    }
    
})

//level up ,user sequence null,and random colour by game will be generated
function levelUp(){
    userSeq=[]; //user have to click all btns from beginning once the level is up
    level++;
    h2.innerText = `Level ${level}`
    
    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

//flash is white
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000);
}

//flash is green
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },1000);
}

//button press
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress); //btnPress function called
}

//the work we want to do after the button is pressed
function btnPress (){
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
   
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

//checking user sequence and game sequence
function checkAns(idx){
    // console.log(`level  is ${level}`);
    // let idx = level-1;  //1-1=0,bcz index is 0
   
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b>!<br> Press any key to start.`
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
       },150);
        reset();
    }
}



//reset the game
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }
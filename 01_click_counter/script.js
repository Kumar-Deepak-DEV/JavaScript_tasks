var player = prompt("Enter your name: ");
// six elements
var currentScore = document.querySelector("#currentScore");
var highScore = document.querySelector("#highScore");
var timer = document.querySelector("#timer");
var clickButton = document.querySelector("#clickButton");
var startButton = document.querySelector("#startButton");
var statusMessage = document.querySelector("#statusMessage");
var cpsMessage = document.querySelector("#cpsMessage");
var resetbutton = document.querySelector("#resetButton");
var pauseButton = document.querySelector("#pauseButton");
var resumeButton = document.querySelector("#resumeButton");
var video = document.querySelector(".video");

//Extra var req: 5

var size=1.1;
var current = 0;
var high = 0;
var time = 10;
var flag = false;
var timeId = null;
var clickId = null;

function loadfunc() {
  var temp = localStorage.getItem("highScore");
  if (temp != null) high = temp;
  else high = 0;
}
function onWebsite() {
  loadfunc();
  displayContent();
}

function statusmsg(msg) {
  statusMessage.textContent = msg;
}

function cpsmsg(msg){
    cpsMessage.textContent=msg;
}

function displayContent() {
  currentScore.textContent = current;
  highScore.textContent = high;
  timer.textContent = time;
}
function reset() {
    currentScore.style.color="white";
    statusmsg("High Score has been reset. click on \"Start Game \" to start new game");
    cpsmsg('');
    clickButton.disabled = true;
    clickButton.style.backgroundColor = "gray";
    localStorage.clear();
    highScore.textContent=0;   
    currentScore.textContent=0;
    clearInterval(timeId);
    time = 10;
    flag = false;
    timer.textContent=10
    current=0;
    video.style.display="none";
}


function endGame() {
    size =1.1;
    clickButton.style.color='white'
    clearInterval(timeId);
    startButton.style.backgroundColor="rgb(115, 0, 255)";
    flag = false;
    var cps=current/10;  // task 4 --> calculating cps
    pauseButton.style.display="none";
    if (time <= 0) {
        if (current > high) {
            statusmsg(`Congratulations ${player}! you have New High Score!`);
            localStorage.setItem("highScore", current);
            video.style.display="inline";
            high = current;
            displayContent();
            current = 0;
            document.body.style.background = 'gold'   //task 6 --> Confetti on New High Score
            setTimeout(function(){
                document.body.style.background='rgb(115, 0, 255)'
            },1000);
                
        }
        
        else if (current < high) {
            statusmsg(`Oops ${player}! Your Current Score is comparitively lower than high score`);
        }
        clickButton.style.transform = 'scale(1)';
        startButton.disabled=false;
        cpsmsg(`your click per second is ${cps}`);  // task 4--> Show Clicks Per Second (CPS)
        startButton.innerText = "Play Again"  // task 5--> Start Button Says "Play Again" After Game
        currentScore.style.color="white";
    }
}

function pause(){
    clearInterval(timeId);
    clickButton.disabled=true;
    clickButton.style.backgroundColor="gray";
    resumeButton.style.display="block";
    pauseButton.style.display="none";
    statusmsg("Game has been paused");
}
function resume(){
    clickButton.disabled=false;
    clickButton.style.backgroundColor="green";
    resumeButton.style.display="none";
    pauseButton.style.display="block";
    statusmsg("Game has been resumed")
    timeId=setInterval(function(){
        time--;
        if(time <=0){
            clickButton.disabled = true; 
            clickButton.style.backgroundColor = "gray";
            endGame();
        }
        displayContent();
    },1000);
}

function startGame() {
    time=10;
    current=0;
    cpsmsg('');
    clickButton.disabled = false;
    startButton.style.backgroundColor="gray";
    clickButton.style.backgroundColor = "green";
    statusmsg("The Game is Started!");
    video.style.display="none";
    statusMessage.textContent= "Game started!"
    flag = true;
    pauseButton.style.display="block";
    startButton.disabled=true;
    timeId = setInterval(function () {
        time--;
        if (time <= 0) {
            clickButton.disabled = true; 
            clickButton.style.backgroundColor = "gray";
            endGame();
        }
        displayContent();
    }, 1000);
 
    clickButton.style.color='red';   // task 2--> "Click Me!" Message Flashes on Start
    clickId = setTimeout(function(){
        clickButton.style.color='transparent'
    },1000);
}


function clickMe() {
    if (flag == true) {
        current++;
        if(size<2){clickButton.style.transform = `scale(${size})`;
            size=size+.1;
        }
        displayContent();

        
        if(current>20)  currentScore.style.color="red";  //task 1--> Click Counter Turns Red When > 20

        }
    }
    onWebsite();

startButton.addEventListener("click", startGame);
clickButton.addEventListener("click", clickMe);
resetbutton.addEventListener('click',reset);
resumeButton.addEventListener('click',resume);
pauseButton.addEventListener('click',pause);
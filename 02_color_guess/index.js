// step-1 --- >>-html:

const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
var heart = document.querySelector(".heart");
var heartArr = ["","❤️","❤️❤️","❤️❤️❤️"];

const colorBoxes = document.querySelectorAll(".color-box");// console.log(colorBoxes);
const newRoundBtn = document.querySelector('#newRoundBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector("#hardBtn");
const resetStreakBtn = document.querySelector('#resetStreakBtn');

// // varaiables ...
var currentMode = "hard";
var currentStreak = 0; //user-> track
var bestStreak = 0; // previously data fecth -> store
var pickCorrectColor = 0; // -> random color
var color = []; //-> empty array -> 6 - color store index - by - index
var num =6; //loop control
var count =3;

function webLoad() {    //we made this function as this function automatically calls  other funtion at once.
    onLoad();
    setGame();
    displayContent();
}

// // whenever the website will load then first it will load the entire data ....
function onLoad() {  //if player has played the game, so load the high score and if not then put highScore to zero.
    var highBestStreak = (currentMode === "easy") ? "highBestStreakEasy" : "highBestStreakHard";
    var temp = localStorage.getItem(highBestStreak);
    if (temp != null) {
        bestStreak = parseInt(temp); // --> here the localstorage contains the data so it will return the data so it will return data not in numbers, so it(parseInt) converts other data types into numbers(int) 
    }
    else{
        bestStreak = 0; // --> if there is no data in localstorage so it wwill return null instead of number.
    } 
}

// here we will define the display content message in a function format ..

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

//random color generator

function colorGenerate(){    
    var a = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var c = Math.floor(Math.random()*256);
    // console.log(`rgb(${a},${b},${c})`);
    return `rgb(${a}, ${b}, ${c})`;
}

function generateColor(num){
    const arr = [];
    for(var i =0 ; i<num ; i++){
        arr.push(colorGenerate());
    }
    // console.log(arr);
    return arr;
}

function pickGenerator(){
const index = Math. floor(Math.random()*color.length);
// console.log(color[index]);
return color[index];
}

function setGame(){
    color = generateColor(num);  //local variable can be accessed inside the curly braces where it was formed, while global variable can be accessed throughout the code, it is formed outside any of the curly braces.

    // console.log(color);
    pickCorrectColor=pickGenerator();
    // console.log(pickCorrectColor);
    colorDisplay.textContent = pickCorrectColor;
    for (var i=0; i < color.length ; i++){
        colorBoxes[i].style.backgroundColor = color[i];
        colorBoxes[i].style.border="none";
    }    
    // console.log(color);

    colorBoxes.forEach(function(box, index) {
        if (index < num) {
            // Show box and assign color
            box.style.display = 'block';
            box.style.backgroundColor = color[index];
            box.classList.remove('fade');
        } else {
            // Hide extra boxes (for easy mode)
            box.style.display = 'none';
        }
    });
}

//task 1--> Correct Color Glows When Clicked

//task 2-->"Streak!" Message When Streak ≥ 3

//task-4--> Show "First Win!" on First Correct Answer

//task 5--> Header Text Becomes Bold on New Best Streak

//task 6--> Wrong Box Shakes When Clicked
function winGuess(event){

    event.target.disabled=true;
        var tempBox = event.target;

        if (pickCorrectColor === tempBox.style.backgroundColor) {
            messageDisplay.textContent='You Won!!';
            tempBox.style.border="3px solid gold"
            currentStreak++;
            if(currentStreak===1) messageDisplay.innerText="first win"

            if(currentStreak >= 3){
                messageDisplay.innerText = 'Streak!';
                colorDisplay.style.fontWeight = 'bold'
                messageDisplay.style.color = "green";
            }
            if(count<3){count++;}
            
            
            if (currentStreak>bestStreak) {
                bestStreak = currentStreak;
                messageDisplay.innerText = 'new best Streak!';
                var highBestStreak = (currentMode === "easy") ? "highBestStreakEasy" : "highBestStreakHard";
                localStorage.setItem(highBestStreak,bestStreak);
            }
            colorBoxes.forEach((box)=>{
                box.disabled=true;
            })
        } else {
            tempBox.classList.add("shake");
            setTimeout(()=>{
                tempBox.classList.remove('shake');
            },1000)
            messageDisplay.textContent='Try again!';
            count--;
            console.log(count);
            if(count<=0){
                colorBoxes.forEach((box)=>{
                    box.disabled=true;
                })
                messageDisplay.textContent='You Lost! Restart a new Game';
            }
            }

    heart.textContent=heartArr[count];
    
    displayContent();
}
//parent addeventlistner
// --> 1} with loop

colorBoxes.forEach((box)=>{
    // console.log(box);
    box.addEventListener('click',winGuess);
});
webLoad();

function newRound(){
    colorBoxes.forEach((box)=>{
        box.disabled=false;
        box.style.border="none";
    })
    webLoad();
    // count = 3;
}
function resetStreak(){
    colorBoxes.forEach((box)=>{
        box.disabled=false;
    });
    var highBestStreak = (currentMode === "easy") ? "highBestStreakEasy" : "highBestStreakHard";
    localStorage.setItem(highBestStreak,0);
    messageDisplay.textContent=`Streak reset! Start fresh!`;
    webLoad();
    count = 3;
}
//task 3-->  Easy Mode Button Turns Green When Selected
function setEasy(){
    num = 3;
    currentMode = "easy";
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    currentStreak=0;
    onLoad();
    displayContent();
    setGame();
    easyBtn.disabled=true;
    hardBtn.disabled=false;
    easyBtn.style.backgroundColor="green";
}

function setHard() {
    easyBtn.disabled=false;
    hardBtn.disabled=true;
    currentMode="hard";
    currentStreak=0;
    num = 6;
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    easyBtn.style.backgroundColor="rgba(255, 255, 255, 0.1)";
    onLoad();
    displayContent();
    setGame();
}

easyBtn.addEventListener('click', setEasy);
hardBtn.addEventListener('click', setHard);
newRoundBtn.addEventListener("click",newRound);
resetStreakBtn.addEventListener("click",resetStreak);
// if we have used addEventListener to a number of elements, we perform some minor changes, put any parameter in th e function lke here in this case winGame,  it will have track of all clicks of the buttons.
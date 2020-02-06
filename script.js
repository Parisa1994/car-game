const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
let keys = {
    ArrowUp: false,ArrowDown: false,ArrowRight: false,ArrowLeft: false
};

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function pressOff (e){
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}

function pressOn(e){
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}

function start(){
    console.log("click");
}
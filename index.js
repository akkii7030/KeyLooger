const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);  
})

stopBtn.addEventListener("click",()=>{
    document.addEventListener("keydonw",handleDown);
    document.addEventListener("keyup",handleUp); 
    logDiv.textContent="";
    stateDiv.textContent=""; 
})

function handleDown(e){
    logDiv.textContent = `key ${e.key} pressed down`;
    stateDiv.textContent ="key is down"
}

function handleUp(e){
    logDiv.textContent = `key ${e.key} pressed Up`;
    stateDiv.textContent ="key is up"
}
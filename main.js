let startBtn = document.getElementById('start');
let stopBtn  = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let timer = null;
startBtn.addEventListener('click',()=>{
     if(!isRunning){
        let currentTime = Date.now()
        startTime = currentTime - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
     }
    
})
stopBtn.addEventListener('click',()=>{
    if(isRunning)
        {let currentTime = Date.now()
    elapsedTime = currentTime - startTime
    clearInterval(timer);
    isRunning = false;
}
})

resetBtn.addEventListener('click',()=>{
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    document.querySelector('#time').textContent = '00:00:00:00'
})
function update(){
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

// Calculate minutes
let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

// Calculate seconds
let  seconds = Math.floor((elapsedTime / 1000) % 60);

// Calculate milliseconds
let milliseconds = Math.floor((elapsedTime % 1000) / 10); // dividing by 10 for centiseconds

hours = hours.toString().padStart(2,'0');
 minutes= minutes.toString().padStart(2,'0');
 seconds= seconds.toString().padStart(2,'0');
 milliseconds = milliseconds.toString().padStart(2,'0')
document.querySelector('#time').textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}
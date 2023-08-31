
const reset = document.getElementById("reset");
const playPause = document.getElementById("playPause");

let [hour, minute , second] = [0,0,0];
let timer = document.getElementById("timer");
let clock = null;

function stopwatch(){
    second++;
    if(second==60){
        minute++;
        if(minute==60){
            hour++;
        }
    }
}

function start(){
    if(playPause.classList.contains("fa-play")){
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
        if(clock!==null){
            clearInterval(clock);
        }
        clock = setInterval(stopwatch,1000);
    }else{
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        clearInterval(clock);
    }
    

}
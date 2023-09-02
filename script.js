
const reset = document.getElementById("reset");
const playPause = document.getElementById("playPause");


let [hour, minute , second] = [0,0,0];
let timer = document.getElementById("timer");
let clock = null;

let h;
let m;
let s;


function stopwatch(){
    second++;
    if(second==60){
        minute++;
        second = 0;
        if(minute==60){
            minute = 0;
            hour++;
        }
    }
    h = hour<10? '0'+hour : hour;
    m = minute<10? '0'+minute : minute;
    s = second<10? '0'+second : second;

    timer.innerHTML = h + ":" + m + ":" + s;

}

function start(){
    if(playPause.classList.contains("fa-play")){
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
        clock = setInterval(stopwatch,1000);
    }else{
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        clearInterval(clock);
    }
}

function resetClock(){
    clearInterval(clock);
    [hour, minute , second] = [0,0,0];
    timer.innerHTML = "00:00:00";
    if(playPause.classList.contains("fa-pause")){
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        clearInterval(clock);
    }
}
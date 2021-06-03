let timer = document.getElementById('timer');
// Taking the access of stop start and reset button from their id's 
let stop = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
// hr min and sec will be update on runtime 
let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;

// to start the timer
function startTimer(){
    // check timer is on or off
    if(stopTime === true){
        stopTime = false;
        // this function will start the timer
        currentTime();
    }
}

// to stop the timer
function stopTimer() {
    // check timer is on or off
    if (stopTime == false) {
        stopTime = true;
    }
  }

function currentTime(){
    if(stopTime == false){
// parseInt take string as input and return number as output
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        // increasing sec after every 1 sec
        sec += 1;

        // updating min and sec after 60 sec
        if(sec == 60){
            min += 1;
            sec = 0;
        }

        // updating hr , min and sec after 60 min
        if(min == 60){
            hr += 1;
            min = 0;
            sec = 0;
        }

        // display 0 before every unit digit number
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }

        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
      
        // updating screen 
        timer.innerHTML = hr + ':' + min + ':' + sec;

        // calling setTimeout after every 1 sec
        setTimeout("currentTime()" , 1000);
    }
}

// reset timer
function resetTimer() {

    sec = 0;
    min = 0;
    hr = 0;
    timer.innerHTML = '00:00:00';
}

// adding click events to all buttons 
start.addEventListener('click' ,startTimer);
stop.addEventListener('click' , stopTimer);
reset.addEventListener('click' , resetTimer);
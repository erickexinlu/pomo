var timer;
var element = document.getElementById("timer");

function startTimer() {

    // var hours = document.getElementById("hours").innerHTML;
    // var minutes = document.getElementById("minutes").innerHTML;
    // var seconds = document.getElementById("seconds").innerHTML;

    var hours   = document.getElementById("hours").innerHTML;
    var minutes = document.getElementById("minutes").innerHTML;
    var seconds = document.getElementById("seconds").innerHTML;
    
    timer = setInterval(()=>{
        if (seconds == 0 && minutes == 0 && hours == 0) {
                element.innerHTML = "Timer Done!";
            } else if (seconds == 0) {
                if (minutes == 0) {
                    element.innerHTML = addZero(hours - 1) + ":59:59";
                    hours --;
                    minutes = 59;
                    seconds = 59;
                } else {
                    element.innerHTML = addZero(hours) + ":" + addZero(minutes - 1) + ":59";
                    minutes --;
                    seconds = 59;
                }
            } else {
                element.innerHTML = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds - 1);
                seconds = 59;
            }
    }, 1000)
}






// var timer;

// function startTimer() {
//     let hours = document.getElementById("hours").innerHTML;
//     let minutes = document.getElementById("minutes").innerHTML;
//     let seconds = document.getElementById("seconds").innerHTML;

//     timer = setInterval(updateTimer(Number(hours), Number(minutes), Number(seconds), 1000));
// }

// function updateTimer(hours, minutes, seconds) {
//     if (seconds === 0 && minutes === 0 && hours === 0) {
//         document.getElementById("timer_display").innerHTML = "Timer Done!";
//     } else if (seconds === 0) {
//         if (minutes === 0) {
//             document.getElementById("timer_display").innerHTML = addZero(hours - 1) + ":59:59";
//         } else {
//             document.getElementById("timer_display").innerHTML = addZero(hours) + ":" + addZero(minutes - 1) + ":59";
//         }
//     } else {
//         document.getElementById("timer_display").innerHTML = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds - 1);
//     }
// }

// function addZero(time) {
//     if (time < 10) {
//         return "0" + String(time)
//     } else {
//         return String(time)
//     }
// }


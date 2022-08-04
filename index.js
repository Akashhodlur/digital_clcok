// for targeting the ids
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const ampmEl = document.getElementById('ampm')

function updateClock() {
    // for the getting real time using the Date()
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // for making 12 houre time and for AMPM changeing write if condtion
    if(h > 12){
        h = h - 12;
        ampm = "PM"
    } 


    // for double element
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // passing the fucntion to the vairable
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;


    // for automatic upadting the time use setTimeout

    setTimeout(() =>{
        updateClock();
    },1000)
}
updateClock();

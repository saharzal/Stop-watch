const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");
const seconds = document.getElementById("seconds");
const milisecond = document.getElementById("milisecond");

var secondcounter = 00 , milicounter = 00 , interval ;

startbtn.onclick = function(){
    clearInterval(interval);
    interval = setInterval(starttimer,10);
}
stopbtn.addEventListener('click',function(){
    clearInterval(interval);
});
resetbtn.addEventListener('click',function(){
    clearInterval(interval);
    milisecond.textContent="00";
    seconds.textContent="00";
    secondcounter=0;
    milicounter=0;
});

function starttimer(){
    secondcounter++;
    if(secondcounter<=9){
        seconds.textContent = '0'+ secondcounter;
    }else if(secondcounter<=60){
        seconds.textContent = secondcounter;
    }else {
        milicounter++;
        milisecond.textContent = '0'+milicounter;
        secondcounter = 0 ;
        seconds.textContent = '0'+ 0 ;
    }
    if(milicounter >9){
        milisecond.textContent = milicounter;
    }
}
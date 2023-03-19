let minutes=0,seconds=0,hours=0,millisec=0;
let timerShow=document.getElementById('timerShow');
let timeref;
document.getElementById('start').onclick=function(){
timeref=setInterval(updatingTime,1);
};
function updatingTime()
{
    millisec=millisec+1
    if(millisec==200)
    {
    seconds=seconds+1;
    millisec=0;
    if(seconds==60){
        minutes=minutes+1;
        seconds=0;
        if(minutes==60)
        {
            hours=hours+1
            minutes=0;
        }
    }
}
let ms,s,m,h;
if(millisec<10){
    ms='0'+millisec
}
else{
    ms=millisec
}
if(seconds<10){
    s='0'+seconds
}
else{
   s=seconds
}
if(minutes<10){
    m='0'+minutes
}
else{
    m=minutes
}
if(hours<10){
   h='0'+hours
}
else{
    h=hours
}
    timerShow.innerHTML=` ${h} : ${m} :${s} `
}
document.getElementById('pause').onclick=function(){
    clearTimeout(timeref);
}
document.getElementById('reset').onclick=function(){
    clearInterval(timeref);
    millisec=0
    seconds=0
    minutes=0
    hours=0
 timerShow.innerHTML= "00 : 00 : 00"
}
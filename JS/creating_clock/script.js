function showTime(){
    const currentTime= new Date
    console.log(currentTime);
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    console.log(time);
    document.getElementById("time").innerText=time;
    
}

// showTime();
// setTimeout ek barr call kerta hai then ends setInterval do that on repeat after the time mentions
// setTimeout( ()=> console.log("hi"),5000);
// setInterval( ()=>console.log("hi"),5000);

 //1000=1sec
const interval=setInterval(showTime,1000);
const stop_timer=document.getElementById("stop")
stop_timer.addEventListener("click",()=>{
  clearInterval(interval)
})

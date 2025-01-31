const button=document.getElementById("button")
const f_location=document.getElementById("final_location")
function gotLocation(position){
    // console.log(position);
    const latitude=position.coords.latitude
    const longitude=position.coords.longitude
    const final_location=getData(latitude,longitude)
    f_location.innerText=final_location

    // console.log(longitude)
    // console.log(latitude)
}
function failedToGet(){
    console.log("there was an error")
}
button.addEventListener("click",async ()=>{
    // #we have two things first argument if successfully completed the task other failed
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
    // current_positon=navigator.geolocation.getCurrentPosition()
    // console.log(current_positon)
})


async function getData(latitude,longitude){
    const data= await fetch(`http://api.weatherapi.com/v1/current.json?key=91378afb04644e95b2b135311241311&q=${latitude},${longitude}&aqi=yes`)
    return await data.json()
}
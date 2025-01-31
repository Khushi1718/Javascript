// alert ("hey")
const button=window.document.getElementById("search-button")
const input=window.document.getElementById("city-name")
const city=window.document.getElementById("city")
const temp=window.document.getElementById("temprature")
const time=window.document.getElementById("local_time")
// const air_quality=window.document.getElementById("air_quality")
// const humidity=window.document.getElementById("humidity")

button.addEventListener("click",async()=>{
    const city_input=input.value;
    const result= await getData(city_input)
    console.log(result)

    city.innerText=`${result.location.name},${result.location.region},${result.location.country}`
    temp.innerText=result.current.temp_c
    time.innerText=result.location.localtime
    // air_quality.innerText=`${air_quality.co},${air_quality.no2},${air_quality.o3}`
    // humidity.innerText=



})
async function getData(cityName){
    const data= await fetch(`http://api.weatherapi.com/v1/current.json?key=91378afb04644e95b2b135311241311&q=${cityName}&aqi=yes`)
    return await data.json()
}
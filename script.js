const apiKey="cbfde4451c03e2a1bab425698e730e1a";
async function getWeather(){
    const city=document.getElementById("city-input").value;
    const err=document.getElementById("error");
    const weatherBox=document.getElementById("weatherResult");
    err.textContent="";
    weatherBox.classList.add("hidden");
    if(!city){
        err.textContent="Please enter a city name.";
        return;
    }
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if(!response.ok){
            err.textContent="City not found.";
            return;
        }
        const data=await response.json();
        console.log(data);
        document.getElementById("cityName").textContent=data.name;
        document.getElementById('temp').textContent=`temp:🌡️${data.main.temp} °C`;
        document.getElementById('condition').textContent=`Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent=`Humidity:💧${data.main.humidity}%`;
        document.getElementById('wind').textContent=`Wind Speed:💨${data.wind.speed} m/s`;
        weatherBox.classList.remove("hidden");
    } 
    catch(error){
        err.textContent=error.message;
        return;
    }
}
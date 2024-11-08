
function time()
{
    let d=new Date();
    let day  =d.getDay();
    let hours=d.getHours();
    let min=d.getMinutes();
    let date=d.getDate();
    if(date<10)
    {
        date="0"+date
    }
    if(min<10)
    {
        min="0"+min;
    }
    
    if(hours>12)
    {
        hours=hours-12;
    }
    if(hours<10)
        {
            hours="0"+hours;
        }

    arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById('sp').innerText="DATE"+":"+date+"/"+d.getMonth()+"/"+d.getFullYear();
    document.getElementById('sec').innerText="DAY"+":"+arr[day].toUpperCase();
    document.getElementById('tim').innerText="TIME"+":"+hours+":"+min;
}
async function gets()
{
    let context=document.getElementById('ipt').value;
   
    
  
let promise=await fetch(`https://api.shecodes.io/weather/v1/current?query=${context}&key=63931c24f44t8b7cb315af74o03a3082`);
let response=await promise.json();
console.log(response);
document.getElementById('desc').innerText="DESCRIPTION"+" : "+response.condition.description;
document.getElementById('h2').innerText="CITY"+" : "+context.toUpperCase();

document.getElementById('h3').innerText="TEMPERATURE"+" : "+response.temperature.current;
document.getElementById('humid').innerHTML="HUMIDITY"+" : "+response.temperature.humidity;
document.getElementById('lat').innerHTML="LATITUDE"+" : "+response.coordinates.latitude;
document.getElementById('long').innerText="LONGITUDE"+" : "+response.coordinates.longitude;
}
let btn=document.querySelector('button');
btn,addEventListener('load',time);
btn.addEventListener("click",gets);

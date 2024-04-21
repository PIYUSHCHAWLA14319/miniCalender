const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
// const hrs = document.querySelector(".hrs");

const today = new Date();

// console.log(today);
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

date.innerHTML = today.getDate()
day.innerHTML = weekday[today.getDay()]
month.innerHTML =months[today.getMonth()]
year.innerHTML = today.getFullYear()

const time = document.getElementById("time");
setInterval(()=>{
    const times = new Date()
    time.innerHTML = times.toLocaleTimeString()
   
},1000)
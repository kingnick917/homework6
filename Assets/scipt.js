const button = document.querySelector('#button');
const inputvalue = document.querySelector('#inputvalue');
const name = document.querySelector('#name');
const desc = document.querySelector('#desc');
const tep = document.querySelector('#tep');


fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+' &appid=YOU_API_KEY=b059e3b9ba1555004206345a13c9cf24') 
.then(Response => Response.json())
.then(data => console.log(data))

.catch(err => alert())
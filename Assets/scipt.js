const buttonEL = document.querySelector('#button');
const inputvalueEL = document.querySelector('#inputvalue');
const nameEL = document.querySelector('#name');
const descEL = document.querySelector('#desc');
const tepEL = document.querySelector('#tep');

buttonEL.addEventListener('click',function(nameEL){
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&appid=b059e3b9ba1555004206345a13c9cf24')
 .then(Response => Response.json())
 .then(data => {
    const namevalue = data['name'];
    const tempvalue = data['main']['temp'];
    const descvalue =data ['weather'][0]['description'];

    nameEL.innerHTML=namevalue;
    tepEL.innerHTML=tempvalue;
    descEL.innerHTML=descvalue;
 })

 .catch(err => alert('wrong city name!'))

})

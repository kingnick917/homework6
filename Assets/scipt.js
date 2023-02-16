const buttonEL = document.querySelector('.button');
const inputvalueEL = document.querySelector('.inputvalue');
const nameEL = document.querySelector('.name');
const descEL = document.querySelector('.desc');
const tepEL = document.querySelector('.tep');


buttonEL.addEventListener('click',function(nameEL){
   const cityname = inputvalueEL.value;
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname},CA,US&appid=b059e3b9ba1555004206345a13c9cf24`)
 .then(Response => Response.json())
 .then(data => {
   //  const namevalue = data['name'];
   //  const tempvalue = data['main']['temp'];
   //  const descvalue =data ['weather'][0]['description'];
    
   //  nameEL.innerHTML=namevalue;
   //  tepEL.innerHTML=tempvalue;
   //  descEL.innerHTML=descvalue;
   //  input.value ="";
   console.log(data)
   const lat =data[0].lat
   const long = data[0].lon
 })

})
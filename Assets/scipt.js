const buttonEL = document.querySelector('.button');
const inputvalueEL = document.querySelector('.inputvalue');
const nameEL = document.querySelector('.Name');
const descEL = document.querySelector('.desc');
const tepEL = document.querySelector('.tep');
const weathercontainerEL = document.querySelector ('#weathercontainer');

buttonEL.addEventListener('click',function(){
   const cityname = inputvalueEL.value;
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname},CA,US&appid=b059e3b9ba1555004206345a13c9cf24`)
 .then(Response => Response.json())
 .then(data => {
  
   console.log(data)
   const lat =data[0].lat
   const long = data[0].lon

   fetch(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${long}&appid=b059e3b9ba1555004206345a13c9cf24`)
   .then(Res => Res.json())
   .then(datad => {
    console.log(datad)
     const namevalue = datad.city['name'];
    for(let i= 0;i< datad.list.length;i++ ){
      
      const descvalue = datad.list[i]['weather'][0]['description'];
      const divEL =  document.createElement('div');
      const tepl = document.createElement('p')
      const descl = document.createElement('p')
      tepl.innerHTML = datad.list[i].main.temp
      descl.innerHTML = descvalue
      divEL.append(tepl,descl);
      divEL.setAttribute("class",'cards')
      weathercontainerEL.append(divEL)
      
    }
    console.log(nameEL)
   nameEL.innerHTML=namevalue;

   })
 })


})


const container = document.getElementsByClassName("container")[0];

var current = new Date();
var current_hour = parseInt(current.getHours());
console.log(current_hour);
passTime();
setInterval(passTime, 1000);

function passTime() {
   const time = new Date()
   document.getElementById('currentTime').innerHTML = time.toLocaleString();
}


const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

function renderPage() {
  for (let i = 0; i <= hours.length - 1; i++) {
    const aDiv = document.createElement("div");
    //add id 'hour-'
    aDiv.setAttribute("id", `hour-${hours[i]}`);
    aDiv.classList.add("row", "time-block");
    aDiv.innerHTML = `<div class="col-md-1 hour">
   ${getTime(hours[i])}
 </div>
 <textarea class="${getColor(hours[i])} col-md-10 description">${localStorage.getItem(`btn-${hours[i]}`) || ''}
 </textarea>
 <button id="btn-${hours[i]}" class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>`;
    container.appendChild(aDiv);
  }
   
   const buttonsCollection = document.getElementsByClassName('btn')
   const buttons = Array.from(buttonsCollection)
   buttons.forEach(button => {
      button.addEventListener('click', () => {
         console.log(button.id);
         localStorage.setItem(button.id, button.previousElementSibling.value);
         console.log(button.previousElementSibling.value);
      });
   });
}

renderPage();

function getColor(hour) {
   if (hour < current_hour) 
      return 'past';
   else if (hour == current_hour)
      return 'present';
   else
      return 'future';
   }


function getTime(hour) {
   switch (hour) {
      case '09':
         return '9AM';
      case '10':
         return '10AM';
      case '11':
         return '11AM';
      case '12':
         return '12PM';
      case '13':
         return '1PM';
      case '14':
            return '2PM';
      case '15':
            return '3PM';
      case '16':
            return '4PM';
      case '17':
         return '5PM';
      
   
      
   }
}
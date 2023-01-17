let d = new Date();

document.getElementById('currentDay').innerHTML = `<h1>${d.toDateString()}</h1>`;

let main = document.getElementById('main');

let hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

hours.forEach((hour,i) => {
  let rowHour = i+9;

  main.innerHTML += `
    <div class="row time-block ${ rowHour < d.getHours() ? 'past' : rowHour > d.getHours() ? 'future' : 'present' }">
        <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
        <textarea class="col-8 col-md-10 description" rows="3" id="${hour}"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>

  `;

});


function saveNote (event) {

  if(event.target.getAttribute("class").includes("saveBtn")){ 
    var clickedbutton = event.target
    
    var textvalue = clickedbutton.previousElementSibling.value
    console.log(textvalue)

    var textKey = clickedbutton.previousElementSibling.id
    console.log(textKey)

    localStorage.setItem(textKey,textvalue)
  }

}

function displayNote(){
  let textarea = document.querySelectorAll(".description")
  console.log(textarea)
  
  textarea.forEach(function(area){
    let textareaId = area.id
    
    console.log(textareaId)

    area.value = localStorage.getItem(textareaId)
  })

}

document.addEventListener("click", saveNote)

displayNote()
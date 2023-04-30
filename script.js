const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

const listContainer = document.querySelector('.listContainer');

 const addTodo = function(){
     if(input.value === ''){         
        alert("You have to write something to add to this todo app")
     }
     else{
        let li = document.createElement("li");
        li.textContent = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
     }
     input.value = '';
 }
btn.addEventListener('click', addTodo)


listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
       e.target.classList.toggle('checked');
       saveData();
    }
    else if(e.target.tagName === 'SPAN'){

      e.target.parentElement.remove();
       saveData();
    }
   
   console.log(e.target.tagName);
})


const saveData = function(){
   localStorage.setItem("data",listContainer.innerHTML);
}

const showTask = function(){
   listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
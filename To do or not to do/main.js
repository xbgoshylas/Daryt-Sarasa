loadEvents();
// Kad uzkrautu visus surasytus eventus, ko gero itakos puslapio uzkrovimo greiti
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}
// Pasiema duomenis, siuo atveju texta kuri uzrasiau i vietoj placeholderio
function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// Prisidedu uzduociu
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

loadEvents();
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);

}

function clearList(e){
  // setting the ul innerHML to an empty string
  let ul = document.querySelector('ul').innerHTML = '';
}
// Dedu eventus papildomai clear ir clickui
loadEvents();
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);

}
// Toliau eina istrinimai
function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
  // Targina childa, meto errora, bet veikia ???
}

function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}

'use script';

const plusButton = document.querySelector ('.plus__button');
const addButton = document.querySelector ('.add-task__button')
const newTaskBox = document.querySelector ('.add-task__container');
const inputTask = document.querySelector ('.add-task__input');
const listTask = document.querySelector ('.todos__list');
const date = document.querySelector ('.header__date');
let allTasks = {
  task: []
};

// Open New Task button
const openTask = () => {
  newTaskBox.classList.toggle('hidden');
}

// Local Storage
const newTask = () => {
  let tasks = {};
  newInputTask.name = inputTask.value;
  tasks.complete = false;
  allTasks.push(tasks);
  localStorage.setItem('key', JSON.stringify(allTasks));
  JSON.parse(localStorage.getItem(allTasks));
  console.log('tasks', tasks);
  console.log('allTasks', allTasks);
}

//Save localStorage and paint
const paintTask = () => {
  let taskList = document.querySelector ('.todos__list');
  let value = document.querySelector ('.add-task__input').value;

  allTasks.task.push(value);
  let newList = allTasks.task
  console.log(newList);
  let addList = '';
  for (let i = 0; i<newList.length; i++){
    addList +=
    `<li class="single_task">
    <label>
      <input type="checkbox" id="cbox">${newList[i]}
      </label>
    </li>`;
  };
  taskList.innerHTML= addList;
  //reset input.value
  document.querySelector('.add-task__input').value = '';
  localStorage.setItem('tareas', JSON.stringify(allTasks));
}

paintTask();

// Date
let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let weekDays = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
let f = new Date();
let dayTxt = weekDays[f.getDay()];
let day = f.getDate();
let month = months[f.getMonth()];
let year = f.getFullYear()
f = day + " " + dayTxt + " " + month + " " + year;
date.innerHTML = f;

// Events

plusButton.addEventListener('click', openTask);
addButton.addEventListener('click', openTask);
addButton.addEventListener('click', newTask);
addButton.addEventListener('click', paintTask);

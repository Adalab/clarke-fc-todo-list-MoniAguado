'use script';

const plusButton = document.querySelector ('.plus__button');
const addButton = document.querySelector ('.add-task__button')
const newTaskBox = document.querySelector ('.add-task__container');
const inputTask = document.querySelector ('.add-task__input');
const listTast = document.querySelector ('.todos__list');

// Open New Task
const openTask = () => {
  newTaskBox.classList.toggle('hidden');
}

plusButton.addEventListener('click', openTask);

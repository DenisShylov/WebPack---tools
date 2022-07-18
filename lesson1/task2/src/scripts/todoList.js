import { onCreateTask } from './createTask.js';
import { changeToCheckbox } from './changeToCheckbox.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', changeToCheckbox);
};

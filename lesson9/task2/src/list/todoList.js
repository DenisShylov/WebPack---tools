import { onCreateTask } from './createTask';
import { changeToCheckbox } from './changeToCheckbox';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', changeToCheckbox);
};

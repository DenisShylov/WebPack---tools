import { renderTasks } from './list/renderTasks.js';
import { initTodoListHandlers } from './list/todoList.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { createCheckboxElem } from './checkbox.js';
import { setItem, getItem } from './storage.js';
const listElem = document.querySelector('.list');

const createListItem = _ref => {
  let {
    done,
    id,
    text
  } = _ref;
  listElem.textContent = '';
  const listItemElem = document.createElement('li');
  listItemElem.setAttribute('data-id', id);
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckboxElem({
    done,
    id
  });

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(checkboxElem, text);
  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  const tasksElems = tasksList.sort((a, b) => new Date(b.finishDate) - new Date(a.finishDate)).map(createListItem);
  listElem.append(...tasksElems);
};
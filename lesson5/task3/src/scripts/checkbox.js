export const createCheckboxElem = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  checkboxElem.setAttribute('data-id', id);

  return checkboxElem;
};

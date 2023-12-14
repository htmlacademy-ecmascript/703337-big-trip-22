import {createElement} from '../render.js';
function createFormEventTemplate() {
  return ('<li class="trip-events__item"></li>');
}
export default class FormEventView {
  getTemplate() {
    return createFormEventTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

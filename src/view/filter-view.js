import AbstractView from '../framework/view/abstract-view';

function createFilterItemTemplate(filter, currentFilterType) {
  const {type, count} = filter;
  return `<div class="trip-filters__filter">
  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio"
    name="trip-filter" value="${type}" ${type === currentFilterType ? 'checked' : ''}
    ${count === 0 ? 'disabled' : ''}>
  <label class="trip-filters__filter-label" data-filter-type="${type}" for="filter-everything">${type}</label>
</div>`;
}

function createFilterTemplate(filterItems, currentFilterType) {

  const filterItemsTemplate = filterItems
    .map((item) => createFilterItemTemplate(item, currentFilterType))
    .join('');
  return (`<form class="trip-filters" action="#" method="get">
  ${filterItemsTemplate}

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`);
}

export default class FilterView extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('click', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    if(evt.target.closest('label')){
      this.#handleFilterTypeChange(evt.target.closest('label').dataset.filterType);
    }
  };
}

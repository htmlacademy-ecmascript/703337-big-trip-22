import WaypointView from '../view/waypoint-view.js';
import TripEventEditView from '../view/editing-form-view.js';
import {render, replace, remove} from '../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #point = null;
  #destinations = null;
  #offers = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({pointListContainer, onDataChange, onModeChange}) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  #handleEditClickPresenter = () => {
    this.#replaceCardToForm();
  };

  init(point, destinations, offers) {
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new WaypointView({
      point: this.#point,
      onEditClick: this.#handleEditClickPresenter,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new TripEventEditView({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: this.#handleFormSubmit,
      onFormClose: this.#handleFormClose,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }
    if (this.#pointListContainer.contains(prevPointComponent.element)) {
      //alert('меняю местами новую точку и предыдущую точку');
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointListContainer.contains(prevPointEditComponent.element)) {
      //alert('меняю местами новую форму и предыдущую форму');
      this.#mode = Mode.EDITING;
      replace(this.#pointEditComponent, prevPointEditComponent);

    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
    //alert(' метод resetView заменяю форму на карту')
      this.#replaceFormToCard();
    }
  }

  #replaceCardToForm () {
    this.#handleModeChange();
    replace(this.#pointEditComponent, this.#pointComponent);
    this.#mode = Mode.EDITING;
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToCard () {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToCard();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToCard();
  };

  #handleFormClose = () => {
    this.#replaceFormToCard();
  };
}

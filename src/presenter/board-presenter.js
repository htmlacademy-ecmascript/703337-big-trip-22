import SortView from '../view/sort-view.js';
import TripEventListView from '../view/trip-events-list-view.js';
import WaypointView from '../view/waypoint-view.js';
import TripEventEditView from '../view/editing-form-view.js';
import {render, replace, remove} from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';

export default class BoardPresenter {
  #tripListComponent = new TripEventListView();
  #boardContainer = null;
  #pointsModel = null;
  #boardPoints = [];
  #boardEditPoint = {};

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#boardEditPoint = this.#pointsModel.point;
    this.#renderBoard();
    // render(new SortView(), this.#boardContainer);
    // render(this.tripListComponent, this.#boardContainer);
    //render (new TripEventEditView({event: this.#boardEditPoint}), this.#tripListComponent.element);

    // for (let i = 0; i < this.#boardPoints.length; i++) {
    //   this.#renderPoint(this.#boardPoints[i]);
    // }
  }

  #renderBoard() {
    if (this.#boardPoints.every((point) => point === null || undefined)) {
      render(new NoPointView(), this.#boardContainer);
      return;
    }
    render(new SortView(), this.#boardContainer);
    render(this.#tripListComponent, this.#boardContainer);
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointEditComponent = new TripEventEditView({
      point,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });
    const pointComponent = new WaypointView({
      point,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm () {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToCard () {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#tripListComponent.element);
  }
}

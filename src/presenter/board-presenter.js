import SortView from '../view/sort-view.js';
import TripEventListView from '../view/trip-events-list-view.js';
import {render} from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import { RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../utils/common.js';

export default class BoardPresenter {
  #tripListComponent = new TripEventListView();
  #boardContainer = null;
  #pointsModel = null;
  #boardPoints = [];
  #sortComponent = new SortView();
  #noPointComponent = new NoPointView();
  #pointPresenters = new Map();

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#renderBoard();

  }

  #renderBoard() {
    if (this.#boardPoints.every((point) => point === null || undefined)) {
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#renderTripList();
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
    //console.log(this.#pointPresenters);
  }

  #handlePointChange = (updatedPoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #renderSort() {
    render(this.#sortComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderTripList(){
    render(this.#tripListComponent, this.#boardContainer);
  }

  #renderNoPoints() {
    render(this.#noPointComponent, this.#boardContainer.element, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#tripListComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => {alert('forEach для каждого презентера из боарда'); presenter.resetView()});
  };
}



import SortView from '../view/sort-view.js';
import TripEventListView from '../view/trip-events-list-view.js';
import {render} from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import { RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../utils/common.js';
import { SortType } from '../const.js';
import { sortTypePrice, sortTypeTime } from '../utils/point.js';

export default class BoardPresenter {
  #tripListComponent = new TripEventListView();
  #boardContainer = null;
  #pointsModel = null;
  #boardPoints = [];
  #sortComponent = null;
  #noPointComponent = new NoPointView();
  #pointPresenters = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedBoardPoints = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#sourcedBoardPoints = [...this.#pointsModel.points];
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
    this.#sourcedBoardPoints = updateItem(this.#sourcedBoardPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChangeBoard
    });
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
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChangeBoard = (sortType) => {
    if(this.#currentSortType === sortType){
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderTripList();
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  };

  #sortPoints(sortType) {
    switch(sortType){
      case SortType.TIME:
        this.#boardPoints.sort(sortTypeTime);
        break;
      case SortType.PRICE:
        this.#boardPoints.sort(sortTypePrice);
        break;
      default:
        this.#boardPoints = [...this.#sourcedBoardPoints];
    }
    this.#currentSortType = sortType;
  }
}



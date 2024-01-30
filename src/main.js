//import FilterView from './view/filter-view.js';
import { mockDestinations } from './mock/destinationM.js';
import { mockOffers } from './mock/offerM.js';
import { render } from './framework/render.js';
import NewPointButtonView from './view/new-point-button-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/point-model.js';
import DestinationsModel from './model/destination-model.js';
import OffersModel from './model/offer-model.js';
import { getRandomPoint } from './mock/pointM.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';

const EVENT_COUNT = 3;
const tripMainElement = document.querySelector('.trip-main');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel(Array.from({length: EVENT_COUNT}, getRandomPoint));
const filterModel = new FilterModel();
const destinationsModel = new DestinationsModel(mockDestinations);
const offersModel = new OffersModel(mockOffers);
const boardPresenter = new BoardPresenter(
  {
    boardContainer: siteMainElement,
    pointsModel,
    filterModel,
    destinationsModel,
    offersModel,
    onNewPointDestroy: handleNewPointFormClose
  });

const filterPresenter = new FilterPresenter({
  filterContainer: siteHeaderElement,
  filterModel,
  pointsModel
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(newPointButtonComponent, tripMainElement);
filterPresenter.init();

boardPresenter.init();

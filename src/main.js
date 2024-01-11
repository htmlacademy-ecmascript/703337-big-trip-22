import FilterView from './view/filter-view.js';
import { mockDestinations } from './mock/destinationM.js';
import { mockOffers } from './mock/offerM.js';
import { render } from './framework/render.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/point-model.js';
import DestinationsModel from './model/destination-model.js';
import OffersModel from './model/offer-model.js';
import { getRandomPoint } from './mock/pointM.js';
const EVENT_COUNT = 3;

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel(Array.from({length: EVENT_COUNT}, getRandomPoint));
const destinationsModel = new DestinationsModel(mockDestinations);
const offersModel = new OffersModel(mockOffers);
const boardPresenter = new BoardPresenter({boardContainer: siteMainElement, pointsModel,
  destinationsModel, offersModel});

render(new FilterView(), siteHeaderElement);
boardPresenter.init();

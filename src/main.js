import FilterView from './view/filter-view.js';
import { render } from './framework/render.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/point-model.js';
import { getRandomPoint } from './mock/pointM.js';
const EVENT_COUNT = 3;

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel(Array.from({length: EVENT_COUNT}, getRandomPoint));
const boardPresenter = new BoardPresenter({boardContainer: siteMainElement, pointsModel,});


render(new FilterView(), siteHeaderElement);
boardPresenter.init();

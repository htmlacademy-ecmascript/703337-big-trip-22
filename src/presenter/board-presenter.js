import SortView from '../view/sort-view.js';
import TripEventListView from '../view/trip-events-list-view.js';
import WaypointView from '../view/waypoint-view.js';
import TripEventEditView from '../view/editing-form-view.js';

import {render} from '../render.js';

export default class BoardPresenter {
  tripListComponent = new TripEventListView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.boardEditPoint = this.pointsModel.getPoint();
    //console.log(this.boardEditPoint);
    render(new SortView(), this.boardContainer);
    render(this.tripListComponent, this.boardContainer);
    render (new TripEventEditView({event: this.boardEditPoint}), this.tripListComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new WaypointView({event: this.boardPoints[i]}), this.tripListComponent.getElement());
    }
  }
}

import SortView from '../view/sort-view.js';
import TripEventListView from '../view/trip-events-list-view.js';
import FormEventView from '../view/event-view.js';
import WaypointView from '../view/waypoint-view.js';
import TripEventEditView from '../view/editing-form-view.js';

import {render} from '../render.js';

export default class BoardPresenter {
  tripListComponent = new TripEventListView();
  eventComponent = new FormEventView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.tripListComponent, this.boardContainer);
    render(this.eventComponent, this.tripListComponent.getElement());
    render (new TripEventEditView(), this.eventComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.tripListComponent.getElement());
    }
  }
}

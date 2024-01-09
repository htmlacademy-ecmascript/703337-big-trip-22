import AbstractView from '../framework/view/abstract-view';
import { mockDestinations } from '../mock/destinationM';

const getImgTemplate = (pictures) => {
  const array = [];
  for(let i = 0; i < pictures.length; i ++){
    array[i] = `<img class="event__photo" src="${pictures[i].src}" alt="Event photo">`;
  }
  return array.join('');
};

const getDestinationObj = (point) => {
  let destObject = {};
  if(point){
    for (let i = 0; i < mockDestinations.length; i++){
      if(mockDestinations[i].name === point.destination){
        destObject = structuredClone(mockDestinations[i]);
        break;
      }
    }
  }
  return destObject;
};

function createDestinationTemplate(point) {
  const{description, pictures} = getDestinationObj(point);
  return `<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>

  <div class="event__photos-container">
    <div class="event__photos-tape">
    ${getImgTemplate(pictures)}
    </div>
  </div>
  </section>`;
}

export default class DestinationView extends AbstractView {
  #destination = null;

  constructor(destination){
    super();
    this.#destination = destination;
  }

  get template() {
    return createDestinationTemplate(this.#destination);
  }
}



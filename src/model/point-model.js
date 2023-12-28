import {getRandomPoint} from '../mock/pointM.js';

const EVENT_COUNT = 3;

export default class PointsModel {
  #points = Array.from({length: EVENT_COUNT}, getRandomPoint);
  #point = getRandomPoint();

  get points() {
    return this.#points;
  }

  get point(){
    return this.#point;
  }
}

import Observable from '../framework/observable';
import { UpdateType } from '../const';

export default class DestinationsModel extends Observable {
  #destinationsApiService = null;
  #destinations = [];

  constructor({destinationsApiService}){
    super();
    this.#destinationsApiService = destinationsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init(){
    try{

      const destinations = await this.#destinationsApiService.destinations;
      this.#destinations = destinations;

    } catch(err){
      this._notify(UpdateType.FAILED);
    }

  }
}

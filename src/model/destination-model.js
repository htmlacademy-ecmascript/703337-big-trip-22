import Observable from '../framework/observable';

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
    this.#destinations = [...await this.#destinationsApiService.destinations];
  }
}

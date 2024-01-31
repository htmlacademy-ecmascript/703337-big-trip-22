import Observable from '../framework/observable';

export default class OffersModel extends Observable {
  #offersApiService = null;
  #offers = [];

  constructor({offersApiService}){
    super();
    this.#offersApiService = offersApiService;
  }

  get offers() {
    return this.#offers;
  }

  async init(){
    this.#offers = [...await this.#offersApiService.offers];
  }
}

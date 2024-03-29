import Observable from '../framework/observable';
import { UpdateType } from '../const';

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
    try{
      const offersArray = await this.#offersApiService.offers;
      this.#offers = offersArray;

    }catch(err){
      this._notify(UpdateType.FAILED);
    }

  }
}

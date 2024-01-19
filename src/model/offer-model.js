export default class OffersModel {
  #offers = null;

  constructor(offers){
    this.#offers = offers;
  }

  get offers() {
    return this.#offers;
  }
}
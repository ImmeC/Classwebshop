export default class Winkel {
  constructor(naam){
    this.naam = naam;
    this.producten = [];
  }

  voegProductToe(product){
    this.producten.push(product);
  }

  toonProducten(){
    return this.producten;
  }
}

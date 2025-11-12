export default class Klant {
  constructor(id, naam, email, adres = null){
    this.klant_ID = id;
    this.naam = naam;
    this.email = email;
    this.adres = adres;
  }
}

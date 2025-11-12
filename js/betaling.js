export default class Betaling {
  constructor(mandje_ID, totaalbedrag){
    this.betalings_ID = Date.now();
    this.mandje_ID = mandje_ID;
    this.betaalmethode = '';
    this.totaalbedrag = totaalbedrag;
    this.status = 'open';
  }

  kiesBetaling(methode){
    this.betaalmethode = methode;
  }

  betalen(){
    this.status = 'betaald';
  }
}

export default class Winkelmandje {
  constructor(klant_ID = null){
    this.mandje_ID = Date.now();
    this.klant_ID = klant_ID;
    this.producten = [];
  }

  voegProductToe(product){
    this.producten.push(product);
    this.slaOp();
  }

  verwijderProduct(index){
    this.producten.splice(index,1);
    this.slaOp();
  }

  telEindPrijs(){
    return this.producten.reduce((t, p) => t + Number(p.prijs), 0);
  }

  leegMandje(){
    this.producten = [];
    this.slaOp();
  }

  slaOp(){
    localStorage.setItem('mandje', JSON.stringify(this.producten));
  }

  
  static laadtVanStorage(){
    const data = JSON.parse(localStorage.getItem('mandje') || '[]');
    return data;
  }
}

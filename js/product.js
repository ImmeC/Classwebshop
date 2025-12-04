export default class Product {
  constructor(id, afbeelding, naam, merk, foto, maat, kleur, prijs, voorraad, beschrijving) {
    this.product_ID = id;
    this.afbeelding = afbeelding;
    this.naam = naam;
    this.merk = merk;
    this.afbeelding = foto;
    this.maat = maat;
    this.kleur = kleur;
    this.prijs = prijs;
    this.voorraad = voorraad;
    this.beschrijving = beschrijving;

    this.producten = [
      {
        id: 1,
        afbeelding: './img/nike_air_max_270.png',
        naam: 'Nike Air Max 270',
        merk: 'Nike',
        maat: 42,
        kleur: 'wit',
        prijs: 120,
        voorraad: 5,
        beschrijving: 'Comfortabele sneaker met een goede demping.'
      },
      {
        id: 2,
        afbeelding: './img/adidas_ultraboost.png',
        naam: 'Adidas Ultraboost',
        merk: 'Adidas',
        maat: 43,
        kleur: 'wit',
        prijs: 150,
        voorraad: 4,
        beschrijving:'Zeer comfortabel met responsieve zool.'
      },
      {
        id: 3,
        afbeelding: './img/vans_old_skool.png',
        naam: 'Vans Old Skool',
        merk: 'Vans',
        maat: 42,
        kleur: 'zwart',
        prijs: 65,
        voorraad: 8,
        beschrijving: 'Klassieke skateschoen.'
      },
      {
        id: 4,
        afbeelding: './img/puma_rs-x.png',
        naam: 'Puma RS-X',
        merk: 'Puma',
        maat: 44,
        kleur: 'grijs',
        prijs: 85,
        voorraad: 6,
        beschrijving: 'Stoere retro-look sneaker.'
      },
      {
        id: 5,
        afbeelding: './img/converse_chuck_taylor.png',
        naam: 'Converse Chuck Taylor',
        merk: 'Converse',
        maat: 41,
        kleur: 'zwart',
        prijs: 55,
        voorraad: 10,
        beschrijving: 'Iconische canvas sneaker.'
      }

    ];
  }

  getAlleProducten() {
    return this.producten;
  }
}

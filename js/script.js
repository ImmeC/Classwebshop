import Product from './product.js';
import Klant from './klant.js';
import Winkel from './winkel.js';
import Winkelmandje from './winkelmandje.js';
import Betaling from './betaling.js';


const winkel = new Winkel("Imme's Schoenenwinkel");

const sample = [
  new Product(1, 'Nike Air Max 270', 'Nike', 42, 'zwart', 120, 5, 'Comfortabele sneaker met goede demping.'),
  new Product(2, 'Adidas Ultraboost', 'Adidas', 43, 'wit', 150, 4, 'Zeer comfortabel met responsieve zool.'),
  new Product(3, 'Vans Old Skool', 'Vans', 42, 'zwart/wit', 65, 8, 'Klassieke skateschoen.'),
  new Product(4, 'Puma RS-X', 'Puma', 44, 'grijs', 85, 6, 'Stoere retro-look sneaker.'),
  new Product(5, 'Converse Chuck Taylor', 'Converse', 41, 'wit', 55, 10, 'Iconische canvas sneaker.')
];


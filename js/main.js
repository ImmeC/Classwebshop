import Product from './product.js';
import Klant from './klant.js';
import Winkel from './winkel.js';
import Winkelmandje from './winkelmandje.js';
import Betaling from './betaling.js';

// Setup winkel & sample data
const winkel = new Winkel("Imme's Schoenenwinkel");

const sample = [
  new Product(1, 'Nike Air Max 270', 'Nike', 42, 'zwart', 120, 5, 'Comfortabele sneaker met goede demping.'),
  new Product(2, 'Adidas Ultraboost', 'Adidas', 43, 'wit', 150, 4, 'Zeer comfortabel met responsieve zool.'),
  new Product(3, 'Vans Old Skool', 'Vans', 42, 'zwart/wit', 65, 8, 'Klassieke skateschoen.'),
  new Product(4, 'Puma RS-X', 'Puma', 44, 'grijs', 85, 6, 'Stoere retro-look sneaker.'),
  new Product(5, 'Converse Chuck Taylor', 'Converse', 41, 'wit', 55, 10, 'Iconische canvas sneaker.')
];

sample.forEach(p => winkel.voegProductToe(p));

// UI elements
const productsList = document.getElementById('products-list');
const cartCount = document.getElementById('cart-count');
const viewCartBtn = document.getElementById('view-cart-btn');
const cartSection = document.getElementById('cart-section');
const productsSection = document.getElementById('products-section');
const checkoutSection = document.getElementById('checkout-section');
const confirmationSection = document.getElementById('confirmation-section');
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');

let mandje = new Winkelmandje();
const stored = Winkelmandje.laadtVanStorage();
mandje.producten = stored || [];
updateCartUI();

// Render products
function renderProducts(){
  productsList.innerHTML = '';
  winkel.toonProducten().forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="title">${p.naam}</div>
      <div class="product-meta">${p.merk} • Maat ${p.maat} • ${p.kleur}</div>
      <div class="price">€${Number(p.prijs).toFixed(2)}</div>
      <div class="desc">${p.beschrijving}</div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn add-btn">Voeg toe</button>
      </div>
    `;
    card.querySelector('.add-btn').addEventListener('click', () => {
      mandje.voegProductToe(p);
      updateCartUI();
      alert(`${p.naam} toegevoegd aan mandje!`);
    });
    productsList.appendChild(card);
  });
}

function updateCartUI(){
  cartCount.textContent = mandje.producten.length;
  cartTotal.textContent = mandje.telEindPrijs().toFixed(2);
}

// Navigatie helper
function showPanel(panel){
  document.querySelectorAll('.panel').forEach(sec => sec.classList.remove('active'));
  panel.classList.add('active');
}

// Het mandje kunnen bekijken
viewCartBtn.addEventListener('click', () => {
  renderCart();
  showPanel(cartSection);
});

// Verder winkelen 
document.getElementById('continue-shopping').addEventListener('click', () => {
  showPanel(productsSection);
});

// Checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
  document.getElementById('cust-name').value = '';
  document.getElementById('cust-email').value = '';
  document.getElementById('payment-method').value = '';
  showPanel(checkoutSection);
  renderCart();
});

// Terug naar het mandje van de checkup
document.getElementById('back-to-cart').addEventListener('click', () => {
  showPanel(cartSection);
});

// Betaling afronden
document.getElementById('checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('cust-name').value.trim();
  const email = document.getElementById('cust-email').value.trim();
  const method = document.getElementById('payment-method').value;

  if(!name || !email || !method){
    alert('Vul alle velden in.');
    return;
  }

  const klant = new Klant(Date.now(), name, email);
  const betaling = new Betaling(mandje.mandje_ID, mandje.telEindPrijs());
  betaling.kiesBetaling(method);
  betaling.betalingen = mandje.producten.slice();
  betaling.betalen();

  // Simpeler bevesteging van betaling
  document.getElementById('confirmation-message').textContent = `Dank je, ${klant.naam}! Je betaling van €${betaling.totaalbedrag.toFixed(2)} is ontvangen (methode: ${betaling.betaalmethode}).`;
  mandje.leegMandje();
  updateCartUI();
  showPanel(confirmationSection);
});

// Terug winkelen 
document.getElementById('shop-again').addEventListener('click', () => {
  showPanel(productsSection);
});

// Renderen van winkelmandje details
function renderCart(){
  cartList.innerHTML = '';
  if(mandje.producten.length === 0){
    cartList.innerHTML = '<p>Je mandje is leeg.</p>';
    cartTotal.textContent = '0.00';
    return;
  }

  mandje.producten.forEach((p, idx) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div>
        <div style="font-weight:600">${p.naam}</div>
        <div class="product-meta">${p.merk} • Maat ${p.maat}</div>
      </div>
      <div style="text-align:right">
        <div>€${Number(p.prijs).toFixed(2)}</div>
        <div style="margin-top:8px">
          <button class="btn outline remove-btn">Verwijder</button>
        </div>
      </div>
    `;
    div.querySelector('.remove-btn').addEventListener('click', () => {
      mandje.verwijderProduct(idx);
      renderCart();
      updateCartUI();
    });
    cartList.appendChild(div);
  });

  cartTotal.textContent = mandje.telEindPrijs().toFixed(2);
}

// initialiseren 
renderProducts();
updateCartUI();

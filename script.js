
const cart = [];

function addToCart(product) {
  cart.push(product);
  alert(`${product} foi adicionado ao carrinho!`);
}

function showCart() {
  const modal = document.getElementById('cartModal');
  const list = document.getElementById('cartItems');
  list.innerHTML = "";
  if (cart.length === 0) {
    list.innerHTML = "<li>Seu carrinho está vazio.</li>";
  } else {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }
  modal.style.display = "block";
}

function closeCart() {
  document.getElementById('cartModal').style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById('cartModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const products = [
  { id: 1, name: "Smartphone", price: 20000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Watch", price: 5000 },
  { id: 4, name: "Shoes", price: 4000 },
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rs. ${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.quantity += 1;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, quantity: 1 });
  }
  displayCart();
}

function displayCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>No items in cart.</p>";
    return;
  }

  cart.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - Rs. ${item.price} x ${item.quantity}`;
    cartDiv.appendChild(div);
  });
}

function checkout() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("total").innerText = `Total Bill: Rs. ${total}`;
}

displayProducts();

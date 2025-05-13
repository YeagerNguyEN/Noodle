let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const totalElem = document.getElementById("total");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price.toLocaleString()}đ
      <button onclick="removeFromCart(${index})">✖</button>
    `;
    list.appendChild(li);
  });

  totalElem.textContent = `Tổng: ${total.toLocaleString()}đ`;
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

document.getElementById("toggleCart").addEventListener("click", () => {
  document.getElementById("cart").classList.toggle("hidden");
});

const api = "https://fakestoreapi.com/products";

fetch(api)
  .then((response) => response.json())
  .then((data) => product(data));

function product(products) {
  const container = document.getElementsByClassName("products")[0];

  products.forEach((product) => {
    const card = document.createElement("div");

    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" /> 
      <h3>${product.title.slice(0, 20)}...</h3>
      <p class="price">$${product.price}</p>
      <button> savatga qoshish</button>
    `;
    container.appendChild(card);
  });
}

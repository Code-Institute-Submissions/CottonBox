$(document).ready(function () {
  const data = document.getElementById("data");
  const search = document.getElementById("search");
  let products = [];

  search.addEventListener("keyup", (search) => {
    const searchText = search.target.value.toLowerCase();
    const searchedProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchText) ||
        product.colour.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
      );
    });
    displayProducts(searchedProducts);
  });
  const searchproducts = async () => {
    try {
      const res = await fetch("../json/allProducts.json");
      let products = await res.json();
      displayProducts(products);
    } catch (err) {
      console.log(err);
    }
  };

  const displayProducts = (products) => {
    const htmlString = products
      .map((product) => {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="container text-center">
            <div class="card card-body product-card">
              <img class="card-img" src="${product.image}"></img>
              <h4>${product.name}</h4>
              <p class="lead">${product.price}</p>
              <p>${product.category}<p>
              <p>Colour: ${product.colour}</p>
            </div>
          </div>
        </div>
       `;
      })
      .join("");
    data.innerHTML = htmlString;
  };

  searchproducts();
});

$(document).ready(function () {
  const search = document.getElementById("search");
  const data = document.getElementById("data");

  const searchProducts = async (searchText) => {
    const res = await fetch("assets/json/allProducts.json");
    const products = await res.json();

    let matchedProducts = products.filter((product) => {
      const regex = new RegExp(`${searchText}`, "gi");
      return product.name.match(regex) || product.category.match(regex);
    });

    if (searchText.length === 0) {
      matchedProducts = [];
      data.innerHTML = "";
    }

    outputHtml(matchedProducts);
  };

  const outputHtml = (matchedProducts) => {
    if (matchedProducts.length > 0) {
      const html = matchedProducts
        .map(
          (product) => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2>
          <div class="container">
            <div class="card card-body text-center">
              <img class="card-img" src="${product.image}"></img>
              <h4>${product.name}</h4>
              <p class="lead">${product.price}</p>
              <p>${product.category}</p>
              <p>${product.colour}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("");

      data.innerHTML = html;
    }
  };

  search.addEventListener("input", () => searchProducts(search.value));
});

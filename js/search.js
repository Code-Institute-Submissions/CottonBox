// eslint-disable-next-line no-undef
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
      // eslint-disable-next-line no-undef
      $("#new-in").removeClass("d-none");
      // eslint-disable-next-line no-undef
      $("#categories").removeClass("d-none");
    }

    outputHtml(matchedProducts);
  };

  const outputHtml = (matchedProducts) => {
    if (matchedProducts.length > 0) {
      const html = matchedProducts
        .map(
          (product) => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card card-body text-center search-card">
            <img class="card-img" src="${product.image}"></img>
            <h4 class="mt-2">${product.name}</h4>
            <p class="lead">${product.price}</p>
            <p>${product.category}</p>
            <p>${product.colour}</p>
          </div>
        </div>
      `
        )
        .join("");
      // eslint-disable-next-line no-undef
      $("#new-in").addClass("d-none");
      // eslint-disable-next-line no-undef
      $("#categories").addClass("d-none");
      data.innerHTML = html;
    }
  };

  search.addEventListener("input", () => searchProducts(search.value));
});

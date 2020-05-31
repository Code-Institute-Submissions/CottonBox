const tops = [
  {
    productID: "1",
    name: "Chiffon Sleeved Top",
    price: "NT$1100",
    category: "Tops",
    image: "../assets/images/clothing/tops/black-chiffon-sleeve-top.jpg",
    colour: "Black",
  },
  {
    productID: "2",
    name: "Chiffon Sleeved Top",
    price: "NT$1100",
    category: "Tops",
    image: "../assets/images/clothing/tops/white-chiffon-sleeve-top.jpg",
    colour: "White",
  },
  {
    productID: "3",
    name: "Lace Neck Top",
    price: "NT$1580",
    category: "Tops",
    image: "../assets/images/clothing/tops/pink-lace-neck-top.jpg",
    colour: "Light Pink",
  },
  {
    productID: "4",
    name: "Lace Sleeve Top",
    price: "NT$1580",
    category: "Tops",
    image: "../assets/images/clothing/tops/pink-lace-sleeve-top.jpg",
    colour: "Light Pink",
  },
];

document.getElementById("products").innerHTML = tops
  .map((product) => {
    return `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
  <div class="card card-body text-center product-card">
    <img
      src="${product.image}"
      class="card-img"
    />
    <h4 class="mt-2">${product.name}</h4>
    <p class="lead">${product.price}</p>
    <button
      type="button"
      class="btn"
      data-toggle="modal"
      data-target="#top${product.productID}"
    >
      View
    </button>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="top${product.productID}"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            id="carousel"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="${product.image}"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <h4 class="mr-auto">${product.name}</h4>
          <p class="lead">${product.price}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  })
  .join("");

const shirts = [
  {
    productID: "1",
    name: "格紋襯衫",
    price: "NT$1680",
    category: "襯衫",
    image: "../assets/images/clothing/shirts/blue-checked-shirt.jpg",
    colour: "藍色, 灰色, 白色",
  },
  {
    productID: "2",
    name: "格紋襯衫",
    price: "NT$1680",
    category: "襯衫",
    image: "../assets/images/clothing/shirts/red-checked-shirt.jpg",
    colour: "紅色, 灰色, 白色",
  },
  {
    productID: "3",
    name: "拼接雪紡襯衫",
    price: "NT$1580",
    category: "襯衫",
    image: "../assets/images/clothing/shirts/chiffon-smart-shirt.jpg",
    colour: "白色, 黑色",
  },
  {
    productID: "4",
    name: "氣質V領襯衫",
    price: "NT$690",
    category: "襯衫",
    image: "../assets/images/clothing/shirts/navy-vneck-shirt-front.jpg",
    colour: "海軍藍",
  },
];

const search = document.getElementById("search");
const data = document.getElementById("data");

const searchShirts = async (searchText) => {
  let matchedShirts = shirts.filter((product) => {
    const regex = new RegExp(`${searchText}`, "gi");
    return product.name.match(regex) || product.colour.match(regex);
  });

  if (searchText.length === 0) {
    matchedShirts = [];
    data.innerHTML = "";
    // eslint-disable-next-line no-undef
    $("#products").removeClass("d-none");
  }

  outputHtml(matchedShirts);
};

const outputHtml = (matchedShirts) => {
  if (matchedShirts.length > 0) {
    const html = matchedShirts
      .map(
        (product) => `
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
      查看
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
                  class="d-block w-100 img-responsive"
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
    `
      )
      .join("");
    // eslint-disable-next-line no-undef
    $("#products").addClass("d-none");
    data.innerHTML = html;
  }
};

search.addEventListener("input", () => searchShirts(search.value));

document.getElementById("products").innerHTML = shirts
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
      查看
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

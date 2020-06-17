const dresses = [
  {
    productID: "1",
    name: "碎花洋裝",
    price: "NT$2580",
    category: "洋裝",
    image: "../../assets/images/clothing/dresses/floral-dress.jpg",
    colour: "淺藍",
  },
  {
    productID: "2",
    name: "背心裙",
    price: "NT$1680",
    category: "洋裝",
    image: "../../assets/images/clothing/dresses/navy-pinafore-dress-front.jpg",
    colour: "海軍藍",
  },
  {
    productID: "3",
    name: "夏季休閒洋裝",
    price: "NT$880",
    category: "洋裝",
    image: "../../assets/images/clothing/dresses/short-sleeves-dress-front.jpg",
    colour: "桃紅",
  },
  {
    productID: "4",
    name: "夏季休閒洋裝",
    price: "NT$880",
    category: "洋裝",
    image:
      "../../assets/images/clothing/dresses/short-sleeves-dress-yellow.jpg",
    colour: "黃色",
  },
];

const search = document.getElementById("search");
const data = document.getElementById("data");

const searchDresses = async (searchText) => {
  let matchedDresses = dresses.filter((product) => {
    const regex = new RegExp(`${searchText}`, "gi");
    return product.name.match(regex) || product.colour.match(regex);
  });

  if (searchText.length === 0) {
    matchedDresses = [];
    data.innerHTML = "";
    // eslint-disable-next-line no-undef
    $("#products").removeClass("d-none");
  }

  outputHtml(matchedDresses);
};

const outputHtml = (matchedDresses) => {
  if (matchedDresses.length > 0) {
    const html = matchedDresses
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

search.addEventListener("input", () => searchDresses(search.value));

document.getElementById("products").innerHTML = dresses
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

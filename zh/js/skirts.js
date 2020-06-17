const skirts = [
  {
    productID: "1",
    name: "丹寧抓破褲裙",
    price: "NT$1780",
    category: "裙裝",
    image: "../../assets/images/clothing/skirts/black-denim-skort-front.jpg",
    colour: "黑色",
  },
  {
    productID: "2",
    name: "丹寧抓破褲裙",
    price: "NT$1780",
    category: "裙裝",
    image: "../../assets/images/clothing/skirts/blue-denim-skort-front.jpg",
    colour: "藍色",
  },
  {
    productID: "3",
    name: "拼接設計長棉裙",
    price: "NT$1880",
    category: "裙裝",
    image: "../../assets/images/clothing/skirts/long-skirt-blue-front.jpg",
    colour: "藍色",
  },
  {
    productID: "4",
    name: "拼接設計長棉裙",
    price: "NT$1880",
    category: "裙裝",
    image: "../../assets/images/clothing/skirts/long-skirt-nude-front.jpg",
    colour: "裸色",
  },
  {
    productID: "5",
    name: "拼接設計長棉裙",
    price: "NT$1880",
    category: "裙裝",
    image: "../../assets/images/clothing/skirts/long-skirt-pink-front.jpg",
    colour: "粉色",
  },
  {
    productID: "6",
    name: "優雅蝴蝶結長裙",
    price: "NT$790",
    category: "裙裝",
    image: "../../assets/images/clothing/skirts/long-skirt-bow-brown.jpg",
    colour: "裸色",
  },
];

const search = document.getElementById("search");
const data = document.getElementById("data");

const searchSkirts = async (searchText) => {
  let matchedSkirts = skirts.filter((product) => {
    const regex = new RegExp(`${searchText}`, "gi");
    return product.name.match(regex) || product.colour.match(regex);
  });

  if (searchText.length === 0) {
    matchedSkirts = [];
    data.innerHTML = "";
    // eslint-disable-next-line no-undef
    $("#products").removeClass("d-none");
  }

  outputHtml(matchedSkirts);
};

const outputHtml = (matchedSkirts) => {
  if (matchedSkirts.length > 0) {
    const html = matchedSkirts
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

search.addEventListener("input", () => searchSkirts(search.value));

document.getElementById("products").innerHTML = skirts
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

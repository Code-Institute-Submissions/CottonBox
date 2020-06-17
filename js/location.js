const access_key = "1bd0cdaafce863dcf36e31bf97cf8441";

$.ajax({
  url: "https://api.ipstack.com/check?access_key=" + access_key,
  dataType: "jsonp",
  success: function (result) {
    if (result.country_code === "ZH" || result.country_code === "CN") {
      window.location.href = "/zh/";
    } else {
      window.location.href = "index.html";
    }
  },
});

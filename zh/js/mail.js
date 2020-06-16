(function () {
  // eslint-disable-next-line no-undef
  emailjs.init("user_OFYhUA5JRmSJ85n6gKi0l");
  // eslint-disable-next-line no-undef
  var myform = $("form#emailForm");
  // eslint-disable-next-line no-undef
  var thanksMessage = $("#thanksMessage");
  // eslint-disable-next-line no-undef
  var contactHeading = $("#contactHeading");
  myform.submit(function (event) {
    event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "gmail";
    var template_id = "default_template";

    myform.find("button").text("Sending...");
    // eslint-disable-next-line no-undef
    emailjs.sendForm(service_id, template_id, myform[0]).then(
      function () {
        myform.addClass("d-none");
        thanksMessage.removeClass("d-none");
        contactHeading.addClass("d-none");
        myform.find("button").text("Send");
      },
      function (err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        myform.find("button").text("Send");
      }
    );
    return false;
  });
})();

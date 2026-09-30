// Contact form: no backend, so we simulate a submission and confirm inline.
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = form.elements["name"].value.trim();
    var message = form.elements["message"].value.trim();

    if (!name || !message) {
      status.textContent = "Please fill in your name and a message before sending.";
      status.dataset.state = "error";
      return;
    }

    // Simulate a brief send delay, then confirm and reset the form.
    var submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    setTimeout(function () {
      status.textContent =
        "Thanks, " + name + " — your message has been received. I'll get back to you soon.";
      status.dataset.state = "sent";
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
      form.reset();
    }, 700);
  });
});

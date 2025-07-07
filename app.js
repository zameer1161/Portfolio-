document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const name = form.querySelector('input[placeholder="Your Full name"]');
  const email = form.querySelector('input[placeholder="Your Email"]');
  const message = form.querySelector(".input-message");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (name.value === "" || email.value === "" || message.value === "") {
      alert("Please fill all fields!");
    } else {
      alert("Message sent!");
      form.reset();
    }
  });

  button.addEventListener("mouseenter", function () {
    button.innerHTML = "Sending... ✉️";
  });

  button.addEventListener("mouseleave", function () {
    button.innerHTML = "Send Message <i class='bx bx-mail-send'></i>";
  });
});

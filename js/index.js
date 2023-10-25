const input_email = document.querySelector(".input_email");
const btn_subscribe = document.querySelector(".btn_subscribe");
const form = document.querySelector(".form");
const message_email_invalid = document.querySelector(".message_email_invalid");

let email = "";

input_email.addEventListener("change", (e) => {
  email = e.target.value;
});

btn_subscribe.addEventListener("click", (e) => {
  e.preventDefault();

  if (validate_email(email) && email.length > 0) {
    window.location.href = "pages/success.html";
  } else {
    message_email_invalid.classList.remove("hidden");
    input_email.classList.add("invalid");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault(e);

  if (validate_email(email) && email.length > 0) {
    window.location.href = "pages/success.html";
  } else {
    message_email_invalid.classList.remove("hidden");
    input_email.classList.add("invalid");
  }
});

const validate_email = (email) => {
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    return true;
  }

  return false;
};

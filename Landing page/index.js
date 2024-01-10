const signup_form_wrapper = document.querySelector(".signup-form-wrapper");
const login_form_wrapper = document.querySelector(".login-form-wrapper");
const login_btn = document.querySelector(".login-btn");
const sign_btn = document.querySelector(".sign-btn");



sign_btn.addEventListener("click", () => {
  signup_form_wrapper.classList.add("display");
  document.querySelector(".form-container").classList.add("disable");
});

login_btn.addEventListener("click", () => {
  login_form_wrapper.classList.add("display");
  document.querySelector(".form-container").classList.add("disable");
});

document.querySelector(".siginup-x").addEventListener("click", () => {
  signup_form_wrapper.classList.toggle("display");
  document.querySelector(".form-container").classList.remove("disable");
});
document.querySelector(".login-x").addEventListener("click", () => {
  login_form_wrapper.classList.toggle("display");
  document.querySelector(".form-container").classList.remove("disable");
});


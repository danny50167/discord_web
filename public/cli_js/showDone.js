const btn = document.getElementById("btn_submit");
const form = document.getElementById("form");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    form.style.display = "none";
  }, 1000);
  window.open("/")
})
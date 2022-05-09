const title = document.title.split("-");

const as = document.getElementsByClassName("navi_a");

Array.from(as).forEach(a => {
  console.log(a);
  console.log(title[1]);
  if (a.innerText == title[1]) {
    a.style.textDecoration = "underline";
    // a.style.textDecorationStyle = "wavy"
    a.style.textDecorationThickness = "3px";
  }
})
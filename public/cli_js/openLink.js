const btn = document.getElementById("botAddingLink");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(
    "https://discord.com/api/oauth2/authorize?client_id=972553471939182632&permissions=8&scope=bot",
    "popUpWindow",
    "height=600,width=400,left=100,top=100,resizable=no,scrollbars=no,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
  );
});

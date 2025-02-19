const img = document.getElementById("my-photo");

img.addEventListener("click", () => {
  if (img.src.includes("lampada.jpg")) {
    img.src = "lampada-on.jpg";
  } else {
    img.src = "lampada.jpg";
  }
});

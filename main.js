const plusIcons = document.querySelectorAll(".plus-icon");

plusIcons.forEach(function (img) {
  img.addEventListener("click", function () {
    if (img.src.endsWith("icon-plus.svg")) {
      img.src = "./assets/images/icon-minus.svg";
      img.alt = "icon minus";
    } else {
      img.src = "./assets/images/icon-plus.svg";
      img.alt = "icon plus";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los iconos plus y minus
  const plusIcons = document.querySelectorAll(".question-container__s2-details-icon#plus");
  const minusIcons = document.querySelectorAll(".question-container__s2-details-icon#minus");

  // Agregar un event listener a cada icono plus
  plusIcons.forEach(function (plusIcon) {
    plusIcon.addEventListener("click", function () {
      // Encontrar el índice correspondiente al icono plus clickeado
      const index = Array.from(plusIcons).indexOf(plusIcon);

      // Ocultar el icono plus clicado y mostrar el icono minus correspondiente
      plusIcon.style.display = "none";
      minusIcons[index].style.display = "block";
    });
  });

  // Agregar un event listener a cada icono minus
  minusIcons.forEach(function (minusIcon) {
    minusIcon.addEventListener("click", function () {
      // Encontrar el índice correspondiente al icono minus clickeado
      const index = Array.from(minusIcons).indexOf(minusIcon);

      // Ocultar el icono minus clickeado y mostrar el icono plus correspondiente
      minusIcon.style.display = "none";
      plusIcons[index].style.display = "block";
    });
  });
});





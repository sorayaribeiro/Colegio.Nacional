
document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-button");
  var menuIcon = document.getElementById("menu-icon");
  var menu = document.getElementById("nav");
  var navLinks = document.querySelectorAll(".nav-link");

  menuButton.addEventListener("click", function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
      menuIcon.textContent = "☰"; // Altera o ícone para "☰" quando o menu é fechado
    } else {
      menu.style.display = "block";
      menuIcon.textContent = "✕"; // Altera o ícone para "✕" quando o menu é aberto
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var submenu = link.nextElementSibling; // Pega o próximo elemento, que é o submenu

      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        closeSubmenus(); // Fechar todos os submenus antes de abrir o atual
        submenu.style.display = "block";
      }
    });
  });

  function closeSubmenus() {
    var submenus = document.querySelectorAll(".submenu");
    submenus.forEach(function (submenu) {
      submenu.style.display = "none";
    });
  }
});
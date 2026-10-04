/* =====================================================
   INHINYERO TEA HOUSE
===================================================== */

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

  });


  document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("active");

    });

  });

}


/* CURRENT YEAR */

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}

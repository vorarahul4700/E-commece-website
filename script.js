const navslide = () => {
  var bur = document.getElementById("burger");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");
  const navlinks = document.querySelectorAll("#navbar li");

  bur.className = "fa-solid fa-bars";

  burger.addEventListener("click", () => {
    nav.classList.toggle("navbar-active");
    nav.style.display="block";
    if (bur.className === "fa-solid fa-xmark") {
      bur.className = "fa-solid fa-bars";
      nav.style.visibility="hidden";
    } else {
      bur.className = "fa-solid fa-xmark";
      nav.style.visibility="visible";
    }
  });
};

navslide();

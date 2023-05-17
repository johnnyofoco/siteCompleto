// Elements selection
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

// Functions
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offSetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offSetTop,
    behavior: "smooth",
  });
  
  setTimeout(()=>{
    if(menu.classList.contains("menu-active")){
        menu.classList.remove("menu-active")
    }
  }, 500)

}

// Events
[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

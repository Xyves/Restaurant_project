import refresh from "./refreshPage.js";
const container = document.querySelector(".container");

const containerbg = document.createElement("div");
containerbg.classList.add("bg-container");

export default function () {
  function createNav() {
    const menuItems = ["Home", "Menu", "Contact"];
    const urls = ["/dist/home", "/dist/about", "/dist/menu", "/dist/gallery"];
    const navBar = document.createElement("nav");
    const ul = document.createElement("ul");
    let Logo = document.createElement("img");
    const logoBox = document.createElement("div");
    containerbg.src = "src/img/pizza.jpg";
    Logo.src = "../src/img/Jenos_logo.png";

    Logo.classList.add();
    logoBox.classList.add("logo");

    navBar.appendChild(logoBox);
    logoBox.appendChild(Logo);
    container.appendChild(containerbg);
    containerbg.appendChild(navBar);
    navBar.appendChild(ul);

    for (let i = 0; i < menuItems.length; i++) {
      let li = document.createElement("li");
      li.classList.add(menuItems[i]);
      li.textContent = menuItems[i];
      ul.appendChild(li);
    }
    const home = menuItems[0];
    console.log(home);
    // home.addEventListener("click", refresh());
    const icons = document.createElement("div");
    icons.classList.add("icons");
  }

  createNav();
}
